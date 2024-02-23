import React from "react";
import styles from "./NoFlightFound.module.css";
import no_flight from "../../assets/flight_tenor.gif";
function NoFlightFound() {
  return (
    <div className={styles.outer_div}>
      <div>
        <img
          className={styles.img_style}
          src={no_flight}
          width={450}
          height={350}
        />
      </div>
    </div>
  );
}

export default NoFlightFound;
