import React, { Component } from "react";
import styles from "./Modal.module.css";

class Modal extends Component {
  render() {
    return (
      <div className={styles.Overlay}>
        <div className={styles.Modal}>
          <img src={this.props.imgSrc} alt="" />
        </div>
      </div>
    );
  }
}

export default Modal;
