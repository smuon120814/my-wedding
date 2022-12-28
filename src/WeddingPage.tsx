import React, { useState, useEffect, Fragment } from "react";
import { useNavigate } from "react-router-dom";

// Components
import Navbar from "./Navbar";

// Style
import "./WeddingPage.css";

const WeddingPage = () => {
  return (
    <div className="wp-main">
      <Navbar />
      <h1>Wedding Day</h1>
      <div className="wp-section">
        <h3 className="wp-time">10h</h3>
        <p className="wp-event-title">Traditional ceremonies</p>
        <p className="wp-event-description">Brides room - Ball Room</p>
      </div>
      <div className="wp-section">
        <h3 className="wp-time">12h</h3>
        <p className="wp-event-title">Lunch</p>
        <p className="wp-event-description">Restaurant</p>
      </div>
      <div className="wp-section">
        <h3 className="wp-time">13h-15h30</h3>
        <p className="wp-event-title">Break</p>
        <p className="wp-event-description">free time</p>
      </div>
      <div className="wp-section">
        <h3 className="wp-time">16h</h3>
        <p className="wp-event-title">Wedding ceremony</p>
        <p className="wp-event-description">Garden by the sea</p>
      </div>
    </div>
  );
};

export default WeddingPage;
