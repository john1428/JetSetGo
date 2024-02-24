import React, { useContext, createContext, useState } from "react";

export const FlightContext = createContext(null);

const FlightProvider = ({ children }) => {
  const [flightData, setFlightData] = useState([]);
  const [recentFlights, setRecentFlights] = useState([]);

  let sourcecities = flightData.map(
    (element) => element.displayData.source.airport.cityName
  );

  let displaysource = flightData.map(
    (element) =>
      element.displayData.source.airport.cityName +
      " " +
      "( " +
      element.displayData.source.airport.cityCode +
      ")"
  );

  let sourceSet = new Set(sourcecities);
  sourcecities = Array.from(sourceSet);

  const source = sourcecities;

  let destinationCities = (sourcecities = flightData.map(
    (element) => element.displayData.destination.airport.cityName
  ));

  let displayDestination = flightData.map(
    (element) =>
      element.displayData.destination.airport.cityName +
      " " +
      "( " +
      element.displayData.destination.airport.cityCode +
      ")"
  );

  let destinationSet = new Set(destinationCities);
  destinationCities = Array.from(destinationSet);

  const destination = destinationCities;
  return (
    <FlightContext.Provider
      value={{
        flightData,
        setFlightData,
        displaysource,
        source,
        destination,
        displayDestination,
        recentFlights,
        setRecentFlights,
      }}
    >
      {children}
    </FlightContext.Provider>
  );
};

export default FlightProvider;
