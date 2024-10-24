/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { MapContainer, Marker, TileLayer, useMapEvents } from "react-leaflet";

const Map = ({ setClickedLocation }) => {
  const [centerPosition, setCenterPosition] = useState({
    lat: "",
    lng: "",
  });

  const [clickLocation, setClickLocation] = useState(null);

  useEffect(() => {
    const getCurrectLocation = async () => {
      if ("geolocation" in navigator) {
        await navigator.geolocation.getCurrentPosition(showPosition, (e) => {
          throw Error(e);
        });
      }
    };
    getCurrectLocation();
  }, []);

  const showPosition = (position) => {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;

    setCenterPosition({
      lat,
      lng,
    });
  };

  const LoactionMarker = () => {
    useMapEvents({
      click(e) {
        setClickLocation(e.latlng);
        setClickedLocation(e.latlng);
      },
    });

    return clickLocation ? <Marker position={clickLocation}></Marker> : null;
  };

  return (
    <div className="map">
      <MapContainer
        style={{
          width: "100%",
          height: "100%",
        }}
        center={[centerPosition.lat, centerPosition.lng]}
        zoom={13}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LoactionMarker />
      </MapContainer>
    </div>
  );
};

export default Map;
