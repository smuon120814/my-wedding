import React from "react";
import { useEffect, useState, useRef } from "react";
import InformationItemInterface from "./InformationItemInterface";
import food_image from "./images/food.png";
import accomodation_image from "./images/hotel.jpg";
import transportation_image from "./images/transportation.jpg";
import changemoney_image from "./images/changemoney.jpg";

// Styles
import CSS from "csstype";
import "./InformationItem.css";

const informationItem: React.FC<InformationItemInterface> = ({
  category,
  text,
  url,
  img_url,
  key,
}: InformationItemInterface) => {
  // Select the right image for the component
  let selected_image;

  switch (category) {
    case "Food":
      selected_image = food_image;
      break;
    case "Accomodation":
      selected_image = accomodation_image;
      break;
    case "Transportation":
      selected_image = transportation_image;
      break;
    case "Change Money":
      selected_image = changemoney_image;
      break;
  }
  // Define inline css for background Item
  // const selected_image = require("../../" + img_url);
  const aStyles: CSS.Properties = {
    backgroundImage: `linear-gradient(to right,rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.1)),url(${selected_image})`,
  };

  function reveal_text() {
    let reveals = document.querySelectorAll(".ii-card");
    for (let i = 0; i < reveals.length; i++) {
      let windowHeight = window.innerHeight;
      let elementTop = reveals[i].getBoundingClientRect().top;
      let elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  window.addEventListener("scroll", reveal_text);

  return (
    <a key={key} style={aStyles} className="ii-card" href={url}>
      <div className="ii-card-content">
        <h1 className="ii-card-content-title">{category}</h1>
        <p className="ii-card-content-text">{text}</p>
      </div>
    </a>
  );
};

export default informationItem;
