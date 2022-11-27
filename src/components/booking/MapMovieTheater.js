import React from "react";
import { Map, Marker } from "pigeon-maps";
import { useNavigate } from "react-router-dom";

const MapMovieTheater = () => {
  const navigate = useNavigate();
  return (
    <Map
      height={300}
      defaultCenter={[40.74081488402601, -73.98799908235267]}
      defaultZoom={10}
    >
      <Marker
        onClick={() => navigate("/lastpage")}
        color={"black"}
        width={30}
        anchor={[40.74081488402601, -73.98799908235267]}
      />
    </Map>
  );
};

export default MapMovieTheater;
