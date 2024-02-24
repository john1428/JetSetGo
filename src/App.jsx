import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useEffect } from "react";
import CustomButton from "./components/CustomButton";
import AppNavBar from "./components/AppNavBar/AppNavBar.jsx";
import Sidebar from "./components/Sidebar/Sidebar";
import FlightMain from "./components/FlightMain/FlightMain";
import { useContext } from "react";
import { FlightContext } from "./context/FlightContext";
import RecentSearch from "./components/RecentSearch/RecentSearch.jsx";

function App() {
  const [count, setCount] = useState(0);
  const BASE_URL = "https://api.npoint.io/4829d4ab0e96bfab50e7";
  const { flightData, setFlightData } = useContext(FlightContext);

  useEffect(() => {
    async function fetchAPI() {
      const res = await fetch(BASE_URL);
      const json_data = await res.json();
      console.log(json_data);
      setFlightData(json_data.data.result);
      console.log("typeof json_data", typeof json_data.data.result);
    }

    fetchAPI();
  }, []);

  return (
    <>
      <AppNavBar />
      <div class="mainBody-div">
        <Sidebar className="side-div" />
        <FlightMain className="flight-div" />

        <RecentSearch />
      </div>
    </>
  );
}

export default App;
