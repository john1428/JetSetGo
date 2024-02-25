import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { useEffect } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import styles from "./Filters.module.css";
import { useContext } from "react";
import { FlightContext } from "../../context/FlightContext";

function Filters() {
  const [stops, setStops] = useState("Non stop");
  const [price, setPrice] = useState(0);
  const [duration, setDuration] = useState([1, 11]);
  const [airlines, setAirlines] = useState("");
  let { currFlights, setCurrFlights } = useContext(FlightContext);

  const [currFlightData, setCurrFlightData] = useState([...currFlights]);

  let handleFilters = () => {
    let FilteredFlights = currFlights.filter((element) => {
      element.displayData.airlines.airlineName == airlines &&
        element.displayData.stopInfo == stops;
    });

    setCurrFlights(FilteredFlights);
  };

  const handleStops = (e) => {
    setStops(e.target.value);
  };

  const handlePriceSlider = (e) => {
    setPrice(e.target.value);
  };

  useEffect(() => {
    console.log("stops is ", stops);
    console.log("price is ", price);
    console.log("airlines is ", airlines);
  }, [stops, price, duration, airlines]);
  return (
    <div className={styles.outer_filter_div}>
      <p className={styles.outer_filter_div_p}>Filters</p>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          // aria-controls="panel1-content"
          id="panel1-header"
        >
          Stops
        </AccordionSummary>
        <AccordionDetails>
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={stops}
              onChange={handleStops}
            >
              <FormControlLabel
                value="Non stop"
                control={<Radio />}
                label="Non Stop"
              />
              <FormControlLabel
                value="1 Stop"
                control={<Radio />}
                label="1 Stop"
              />
              <FormControlLabel
                value="2 Stop"
                control={<Radio />}
                label="2 Stops"
              />
            </RadioGroup>
          </FormControl>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Price
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ width: 230 }}>
            <Slider
              aria-label="Temperature"
              defaultValue={30}
              //   getAriaValueText={pricetext}
              valueLabelDisplay="auto"
              shiftStep={30}
              step={10}
              marks
              min={3000}
              max={15000}
              onChange={handlePriceSlider}
            />
          </Box>
          <div className={styles.rupee_div}>
            <p>{`₹3000`}</p>
            <p>{`₹15000`}</p>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          Airlines
        </AccordionSummary>
        <AccordionDetails>
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={airlines}
              onChange={(e) => setAirlines(e.target.value)}
            >
              <FormControlLabel
                value="JetSpice"
                control={<Radio />}
                label="Jet Spice"
              />
              <FormControlLabel
                value="Air India"
                control={<Radio />}
                label="Air India"
              />
              <FormControlLabel
                value="indigo"
                control={<Radio />}
                label="Indigo"
              />
            </RadioGroup>
          </FormControl>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          // aria-controls="panel1-content"
          id="panel1-header"
        >
          Duration
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ width: 230 }}>
            <Slider
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              valueLabelDisplay="auto"
              min={1}
              max={11}
            />
          </Box>
          <div className={styles.rupee_div}>
            <p>{`${duration[0]} hours`}</p>
            <p>{`${duration[1]} hours`}</p>
          </div>
        </AccordionDetails>
      </Accordion>
      <button class={styles.apply_btn} onClick={handleFilters}>
        <span>Apply Filters</span>
      </button>
    </div>
  );
}

export default Filters;
