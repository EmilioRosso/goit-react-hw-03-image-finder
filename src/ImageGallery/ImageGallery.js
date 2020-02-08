import React, { Component } from "react";
import styles from "./ImageGallery.module.css";

import ImageGalleryItem from "../ImageGalleryItem";

class ImageGallery extends Component {
  render() {
    return (
      <ul className={styles.ImageGallery}>
        {this.props.list.map(({ id, webformatURL, largeImageURL }) => {
          return (
            <ImageGalleryItem
              key={id}
              tumbnail={webformatURL}
              enlargeImg={() => {
                this.props.newModal(largeImageURL);
              }}
            />
          );
        })}
      </ul>
    );
  }
}

export default ImageGallery;
