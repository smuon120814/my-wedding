import React from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";

// COmponents

import Map from "./Map";
import Marker from "./Marker";

// Styles
import "./GoogleMapsWrapper.css";

const GoogleMapsWrapper = () => {
  const wedding_venue_location = {
    lat: 15.901034897781463,
    lng: 108.3590304124178,
  };
  const render = (status: Status) => {
    console.log(status);
    return <h1>{status}</h1>;
  };
  return (
    <div className="gmw-main">
      <Wrapper
        apiKey={"AIzaSyA9-iFPmdnZM9Cc0rWExiEb1xvTZvCy_wE"}
        render={render}
      >
        <Map
          style={{ width: "100%", height: "100%" }}
          position={{ lat: 15.9003849, lng: 108.3582089 }}
        >
          {/* Weddign Venue */}
          <Marker position={wedding_venue_location} />
        </Map>
      </Wrapper>
    </div>
  );
};

export default GoogleMapsWrapper;
