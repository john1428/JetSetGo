import React, { useState, useRef } from "react";
import styles from "./FlightMain.module.css";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useContext } from "react";
import { FlightContext } from "../../context/FlightContext";
import { useEffect } from "react";
import NoFlightFound from "../NoFlightFound/NoFlightFound";
import FlightItem from "../FlightItem/FlightItem";

import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

import toast, { Toaster } from "react-hot-toast";

let options1 = ["Delhi (DEL)"];
let options2 = ["Chennai (MAA)"];

function FlightMain() {
  const [value, setValue] = useState("oneway");
  const [arrivalValue, setarrivalValue] = React.useState(options1[0]);
  const [destinationValue, setDestinationValue] = React.useState(options2[0]);
  const [loading, setLoading] = React.useState(false);
  const [inputValue, setInputValue] = React.useState("");
  const [datevalue, setDateValue] = React.useState(dayjs("2022-04-17"));
  const { flightData, source, destination, setRecentFlights } =
    useContext(FlightContext);
  const [currFlights, setCurrFlights] = useState([]);
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSourceReverse = () => {
    setarrivalValue(destinationValue);
    setDestinationValue(arrivalValue);
  };
  useEffect(() => {
    if (currFlights.length == 0) {
      toast.error("No Flights Found");
    }
  }, [currFlights]);

  var handleSearch = () => {
    console.log("button clicked");
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
      if (arrivalValue == destinationValue) {
        toast.error("Same Source and Destination. Please Change one");
      }
    }, 2000);

    let currSource = arrivalValue.split(" ")[0];
    let currDestination = destinationValue.split(" ")[0];
    let currDate = new Date(datevalue).getDate();
    let currDay = new Date(datevalue).getDay();
    let currMonth = new Date(datevalue).getMonth();
    let currYear = new Date(datevalue).getFullYear();
    setRecentFlights((prev) => {
      return [
        ...prev,
        { currSource, currDestination, currDay, currDate, currMonth },
      ];
    });
    setCurrFlights(
      flightData.filter(
        (element) =>
          element.displayData.source.airport.cityName == currSource &&
          element.displayData.destination.airport.cityName == currDestination &&
          new Date(element.displayData.source.depTime).getDate() == currDate &&
          new Date(element.displayData.source.depTime).getMonth() ==
            currMonth &&
          new Date(element.displayData.source.depTime).getFullYear() == currYear
      )
    );

    console.log("currFlights", currFlights);
  };

  return (
    <div className={styles.outer_div}>
      <Toaster />
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <div>
        <h1>Search Flights</h1>
        <h3>Enjoy Hassle free bookings with JetSetGo</h3>
      </div>
      <div className={styles.outerSearchBox}>
        <div>
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={value}
              onChange={handleChange}
              row
            >
              <FormControlLabel
                value="oneway"
                control={<Radio />}
                label="One-way"
              />
              <FormControlLabel
                value="roundtrip"
                control={<Radio />}
                label="Round-trip"
              />
              <FormControlLabel
                value="multicity"
                control={<Radio />}
                label="Multi-city"
              />
            </RadioGroup>
          </FormControl>
        </div>
        <div class={styles.mainFromtoDestination}>
          <br />
          <Autocomplete
            value={arrivalValue}
            onChange={(event, newValue) => {
              setarrivalValue(newValue);
            }}
            inputValue={arrivalValue}
            onInputChange={(event, newInputValue) => {
              setInputValue(newInputValue);
            }}
            id="controllable-states-demo"
            options={source}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="From" />}
          />
          <span className={styles.fromtospan} onClick={handleSourceReverse}>
            <svg
              width="20"
              height="15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.11 6.739a.842.842 0 0 1-.842-.842V4.844a.21.21 0 0 0-.21-.211H4.543a1.264 1.264 0 1 1 0-2.527h8.515a.21.21 0 0 0 .21-.21V.841A.843.843 0 0 1 14.544.12l4.212 2.528a.842.842 0 0 1 0 1.444L14.544 6.62a.843.843 0 0 1-.433.12ZM.409 10.26l4.212-2.527a.842.842 0 0 1 1.276.723v1.053c0 .116.095.21.21.21h8.516a1.264 1.264 0 1 1 0 2.528H6.108a.21.21 0 0 0-.21.21v1.053a.842.842 0 0 1-1.277.722L.409 11.705a.842.842 0 0 1 0-1.445Z"
                fill="#2276E3"
              ></path>
            </svg>
          </span>
          <Autocomplete
            value={destinationValue}
            onChange={(event, newValue) => {
              setDestinationValue(newValue);
            }}
            inputValue={destinationValue}
            onInputChange={(event, newInputValue) => {
              setInputValue(newInputValue);
            }}
            id="controllable-states-demo"
            options={destination}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="To" />}
          />
        </div>
        <div className={styles.datepicker}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Departure"
              value={datevalue}
              onChange={(newValue) => setDateValue(newValue)}
            />
          </LocalizationProvider>
        </div>
        <div className={`${styles.outerbtn}`} onClick={handleSearch}>
          <span>Search Flights</span>
        </div>
      </div>
      {!open && (
        <div>
          {currFlights.length == 0 ? (
            <NoFlightFound />
          ) : (
            <div className={styles.flight_items}>
              <div className={styles.mostOuter}>
                <p>Airlines</p>
                <p>Departure</p>
                <p>Duration</p>

                <p>Arrival</p>

                <p>Price</p>
              </div>
              {currFlights.map((flight) => (
                <FlightItem key={flight.id} flight={flight} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default FlightMain;
