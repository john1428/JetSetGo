import React from "react";
import flight_logo from "../../assets/flight.svg";
import styles from "./Sidebar.module.css";
import FlightIcon from "@mui/icons-material/Flight";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import LocalHotelIcon from "@mui/icons-material/LocalHotel";
import Button from "@mui/material/Button";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { blue } from "@mui/material/colors";
import Filters from "../Filters/Filters";

const theme = createTheme({
  palette: {
    primary: {
      light: blue[400],
      main: blue[300],
      dark: blue[700],
      darker: blue[900],
    },
  },
});

function Sidebar() {
  return (
    <div className={styles.sideBarItems}>
      <ul className={styles.ulStyles}>
        <ThemeProvider theme={theme}>
          <li>
            <Button
              className={styles.flightItem}
              variant="contained"
              size="large"
              startIcon={<FlightIcon />}
            >
              Flights
            </Button>
          </li>
          <li>
            <Button
              className={styles.flightItem}
              variant="text"
              size="large"
              startIcon={<LocalOfferIcon />}
            >
              Offers
            </Button>
          </li>
          <li>
            <Button
              className={styles.flightItem}
              variant="text"
              size="large"
              startIcon={<LocalHotelIcon />}
            >
              Hotels
            </Button>
          </li>
        </ThemeProvider>
      </ul>
      {/* <div className={styles.filter_div}>
        <Filters />
      </div> */}
    </div>
  );
}

export default Sidebar;
