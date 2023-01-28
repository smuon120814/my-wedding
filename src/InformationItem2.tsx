import React from "react";
import InformationItemInterface from "./InformationItemInterface";

// Styles
import CSS from "csstype";
import "./InformationItem.css";

const informationItem2: React.FC<InformationItemInterface> = ({
  category,
  text,
  url,
  img_url,
}: InformationItemInterface) => {
  // Define inline css for background Item
  const selected_image = require("./images/food_images/phi_banh_mi.jpg");
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
    <a style={aStyles} className="ii-card" href={url}>
      <div className="ii-card-content">
        <h1 className="ii-card-content-title">{category}</h1>
        <p className="ii-card-content-text">{text}</p>
      </div>
    </a>
  );
};

export default informationItem2;
