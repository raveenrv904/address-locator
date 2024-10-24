import { useState } from "react";
import "./App.css";
import MapContainer from "./components/MapContainer";
import Navbar from "./components/Navbar";

const App = () => {
  const [address, setAddress] = useState("");

  const [clickedLocation, setClickedLocation] = useState({
    lat: "",
    lng: "",
  });

  const handleClick = () => {
    const getAddress = async (lat, lng) => {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
      );

      const data = await response.json();

      if (data && data.display_name) {
        setAddress(data.display_name);
      } else {
        setAddress("Address Not Found");
      }
    };
    getAddress(clickedLocation.lat, clickedLocation.lng);
  };

  return (
    <div className="app">
      <Navbar />
      <div className="app_mapContainer">
        <div className="app_mapContainer_left">
          <MapContainer setClickedLocation={setClickedLocation} />
          <div className="">
            <button onClick={handleClick} className="btn">
              Get My Address
            </button>
          </div>
        </div>
        <div className="app_mapContainer_right">
          {address && (
            <>
              <h2>Selected Address</h2>
              <p>{address}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
