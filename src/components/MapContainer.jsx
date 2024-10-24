/* eslint-disable react/prop-types */
import Map from "./Map";

const MapContainer = ({ setClickedLocation }) => {
  return (
    <div className="mapContainer">
      <Map setClickedLocation={setClickedLocation} />
    </div>
  );
};

export default MapContainer;
