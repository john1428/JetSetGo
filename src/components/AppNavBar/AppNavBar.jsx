import React from "react";
import styles from "./AppNavBar.module.css";
import jetset_logo from "../../assets/jetset.png";
function AppNavBar() {
  return (
    <div className={styles.outerNavbar}>
      <nav className={styles.appnavbar}>
        <img src={jetset_logo} width={150} height={80} />
      </nav>
    </div>
  );
}

export default AppNavBar;
