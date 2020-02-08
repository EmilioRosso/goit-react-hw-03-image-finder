import React, { Component } from "react";
import styles from "./SearchForm.module.css";

class SearchForm extends Component {
  state = {
    query: ""
  };

  searchQuery = e => {
    this.setState({ query: e.target.value });
  };

  sendQuery = e => {
    e.preventDefault();

    this.props.onSearch(this.state.query);
    this.setState({ query: "" });
  };

  render() {
    return (
      <form className={styles.SearchForm} onSubmit={this.sendQuery}>
        <button type="submit" className={styles.SearchFormButton}>
          <span className={styles.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          className={styles.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={this.searchQuery}
          value={this.state.query}
        />
      </form>
    );
  }
}

export default SearchForm;
