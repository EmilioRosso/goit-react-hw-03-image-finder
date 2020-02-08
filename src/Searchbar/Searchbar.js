import React, { Component } from "react";
import styles from "./Searchbar.module.css";

import SearchForm from "../SearchForm";

class Searchbar extends Component {
  render() {
    return (
      <header className={styles.Searchbar}>
        <SearchForm onSearch={this.props.searchQuery} />
      </header>
    );
  }
}

export default Searchbar;
