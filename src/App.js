import React, { Component } from "react";
import "./App.css";

import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import pixabayApi from "./API/pixabayAPI";
import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";
import Modal from "./Modal/Modal";
import Button from "./Button";

class App extends Component {
  state = {
    query: "",
    page: 1,
    imgGallery: [],
    imgModal: null,
    isLoading: false,
    error: ""
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.fetchSearch();
    }
    window.addEventListener("keydown", this.closeModal);
  }

  fetchSearch = () => {
    this.setState({ isLoading: true });
    pixabayApi
      .searchImages(this.state.query, this.state.page)
      .then(response => {
        this.setState(prevState => ({
          imgGallery: [...prevState.imgGallery, ...response.data.hits],
          page: prevState.page + 1
        }));
      })
      .catch(error => this.setState({ error }))
      .finally(() => {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: "smooth"
        });
        this.setState({ isLoading: false });
      });
  };

  createSearchQuery = text => {
    this.setState({ imgGallery: [], query: text, page: 1 });
  };

  openModal = img => {
    this.setState({ imgModal: img });
  };

  closeModal = evt => {
    if (evt.code === "Escape") {
      this.setState({ imgModal: null });
    }
  };

  render() {
    const { isLoading, imgGallery, imgModal } = this.state;

    return (
      <>
        <Searchbar searchQuery={this.createSearchQuery} />
        {imgGallery.length > 0 && (
          <ImageGallery list={imgGallery} newModal={this.openModal} />
        )}
        {isLoading && (
          <div className="loaderWrap">
            <Loader
              type="MutatingDots"
              color="#303F9D"
              height={100}
              width={100}
            />
          </div>
        )}
        {imgGallery.length > 0 && !isLoading && (
          <Button onLoadMore={this.fetchSearch} />
        )}
        {imgModal && <Modal imgSrc={imgModal}></Modal>}
      </>
    );
  }
}

export default App;
