import React from "react";
import styles from "./FlightItem.module.css";
import flight_logo from "../../assets/airplane.png";
function FlightItem({ flight }) {
  function padZero(number) {
    return number < 10 ? `0${number}` : number;
  }

  function formatTime(date) {
    const hours = date.getHours();
    const minutes = date.getMinutes();

    // Use template literals to format the time
    const formattedTime = `${padZero(hours)}:${padZero(minutes)}`;

    return formattedTime;
  }

  const src_time = formatTime(new Date(flight.displayData.source.depTime));
  const dst_time = formatTime(new Date(flight.displayData.destination.arrTime));

  return (
    <div>
      <div className={styles.outer_div}>
        <div class={styles.flight_name}>
          <div class={styles.flight_details}>
            <div>
              <img src={flight_logo} className={styles.flight_logo} />
            </div>
            <div>
              <div className={styles.inner_flight_detail}>
                <p>{flight.displayData.airlines[0].airlineName}</p>
                <p>{flight.displayData.airlines[0].flightNumber}</p>
              </div>
            </div>
          </div>
          <p className={styles.blue_flight}>Flight details</p>
        </div>
        <div className={styles.inner_flight_detail_p}>
          <p>{src_time}</p>
          <p className={styles.cityedit}>
            {flight.displayData.source.airport.cityName}
          </p>
        </div>
        <br />
        <div className={styles.inner_flight_detail_p}>
          <p>{flight.displayData.totalDuration}</p>
        </div>
        <div class={styles.linebarrir}>
          <div class="p-relative bg-white stepper-circle "></div>
        </div>

        <div className={styles.inner_flight_detail_p}>
          <p>{dst_time}</p>
          <p className={styles.cityedit}>
            {flight.displayData.destination.airport.cityName}
          </p>
        </div>
        <div className={styles.inner_flight_detail_p}>
          <p>{`₹${flight.fare}`}</p>
        </div>
        <div className={styles.outerbtn}>
          <span>Book</span>
        </div>
      </div>
    </div>
  );
}

export default FlightItem;
