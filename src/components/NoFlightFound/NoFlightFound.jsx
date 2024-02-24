import React from "react";
import styles from "./NoFlightFound.module.css";
function NoFlightFound() {
  return (
    <div className={`${styles.outer_div} ${styles.img_style}`}>
      <iframe
        className={styles.img_style}
        src="https://giphy.com/embed/xUOxfn3TfKndQeEJe8"
        width="480"
        height="480"
        frameBorder="0"
        class="giphy-embed"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default NoFlightFound;
