import React from "react";

// Components
import Navbar from "./Navbar";

// Style
import "./HomeBlock1.css";

function HomeBlock1() {
  return (
    <div className="hb1-main">
      <div className="top">
        <Navbar />
        <h1 className="title">
          Melody
          <span className="pink"> x </span>
          Sorasi
        </h1>
        <h1 className="wedding">Wedding</h1>
      </div>
      <div className="bottom">
        <h3 className="date">08.08.23 - Hội An, Vietnam</h3>
      </div>
    </div>
  );
}

export default HomeBlock1;
