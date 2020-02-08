import React, { Component } from "react";
import styles from "./Button.module.css";

class Button extends Component {
  render() {
    return (
      <div>
        <button
          className={styles.Button}
          type="button"
          onClick={this.props.onLoadMore}
        >
          Load More...
        </button>
      </div>
    );
  }
}

export default Button;
