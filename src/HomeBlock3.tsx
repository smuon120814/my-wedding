import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// style
import { IconButton } from "@material-ui/core";
import "./HomeBlock3.css";

const HomeBlock3 = () => {
  const navigate = useNavigate();

  // switch to another page
  const handleClose = (e: React.MouseEvent<HTMLElement>, path: string) => {
    navigate(path);
  };

  return (
    <div className="hb3-main">
      <button
        className="item"
        onClick={(e) => handleClose(e, "/wedding-information")}
      >
        Jour du Mariage
      </button>
      <button className="item" onClick={(e) => handleClose(e, "/road-trip")}>
        Voyage
      </button>
      <button className="item" onClick={(e) => handleClose(e, "/information")}>
        Hoi An / Danang
      </button>
      <button className="item" onClick={(e) => handleClose(e, "/contacts")}>
        Contacts
      </button>
    </div>
  );
};

export default HomeBlock3;
