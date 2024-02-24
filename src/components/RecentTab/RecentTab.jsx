import React from "react";
import Styles from "./RecentTab.module.css";
import right_logo from "../../assets/right-arrow.png";
function RecentTab({ recentFlight }) {
  const weekday = ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"];
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return (
    <li className={Styles.outer_div}>
      <div>
        <a className={Styles.cityDiv}>
          <p className={Styles.maintab}>
            {recentFlight.currSource} → {recentFlight.currDestination}
          </p>
          <img
            className={Styles.right_logo}
            src={right_logo}
            width={20}
            height={8}
          />
        </a>
      </div>
      <div className={`${Styles.cityDiv} ${Styles.dateDiv}`}>
        <p>{weekday[recentFlight.currDay]}, </p>
        <p>{recentFlight.currDate} </p>
        <p>{monthNames[recentFlight.currMonth]}</p>
      </div>
    </li>
  );
}

export default RecentTab;
