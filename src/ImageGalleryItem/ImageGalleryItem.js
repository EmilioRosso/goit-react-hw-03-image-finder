import React, { Component } from "react";
import styles from "./ImageGalleryItem.module.css";

class ImageGalleryItem extends Component {
  render() {
    return (
      <li className={styles.ImageGalleryItem}>
        <img
          src={this.props.tumbnail}
          alt=""
          className={styles.ImageGalleryItemImage}
          onClick={this.props.enlargeImg}
        />
      </li>
    );
  }
}

export default ImageGalleryItem;
