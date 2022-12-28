import React, { useState, useEffect } from "react";
import ImageChineseBorder from "./ChineseBorder";
import SVGChineseBorder from "./images/chinese-border.svg";

// style
import "./DateAndLocation.css";

function DateAndLocation() {
  return (
    <div className="block">
      <h1>08.08.23</h1>
      <h2>Hoi An, Vietnam</h2>
      {/* <ImageChineseBorder /> */}
    </div>
  );
}

export default DateAndLocation;
