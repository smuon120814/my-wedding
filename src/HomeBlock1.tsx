import React, { useState, useEffect } from "react";

// Components
import Navbar from "./Navbar";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";

// Style
import "./HomeBlock1.css";

function HomeBlock1() {
  return (
    <div className="main">
      <div className="top">
        <Navbar />
        <h1 className="title">
          Melody
          <span className="red"> &#38; </span>
          Sorasi
        </h1>
        <h1 className="wedding">Wedding</h1>
      </div>
      <div className="bottom">
        <h3 className="date">08.08.23 - Hoi An, Vietnam</h3>
        <KeyboardDoubleArrowDownIcon fontSize="large" />
      </div>
    </div>
  );
}

export default HomeBlock1;