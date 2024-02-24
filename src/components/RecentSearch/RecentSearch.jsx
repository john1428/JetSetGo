import React from "react";
import styles from "./RecentSearch.module.css";
import { useContext } from "react";
import { FlightContext } from "../../context/FlightContext";
import { useEffect } from "react";
import RecentTab from "../RecentTab/RecentTab";

function RecentSearch() {
  const { recentFlights } = useContext(FlightContext);
  useEffect(() => {
    console.log("recentFlights", recentFlights);
  }, []);
  return (
    <div className={styles.outerdiv}>
      <h1>Recent Searches</h1>
      {recentFlights.map((element) => {
        return (
          <ul className={styles.outer_ul}>
            <RecentTab recentFlight={element} />
          </ul>
        );
      })}
    </div>
  );
}

export default RecentSearch;
