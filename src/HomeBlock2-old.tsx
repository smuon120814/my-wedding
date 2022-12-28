import React, { useState, useEffect } from "react";

// Components
import HKSkyline from "./HkSkyline";

//  style:
import "./HomeBlock2.css";

function HomeBlock2() {
  // to reveal the text when user scrolls it
  function reveal_text() {
    var reveals = document.querySelectorAll(".text");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  window.addEventListener("scroll", reveal_text);

  return (
    <div className="block2">
      <div className="block2_1">
        <p className="text">
          D'une belle rencontre &#224;{" "}
          <span className="redColor">Hong Kong</span> ...
        </p>
        {/* <HKSkyline /> */}
        <img src={require("./images/hk-skyline2.jpg")} alt="hk skyline" />
        <img
          className="boat"
          src={require("./images/aqualuna_boat.png")}
          alt="hk skyline"
        />
      </div>
      <div className="block2_2">
        <p className="text">A une visible paisible en France ...</p>
      </div>
    </div>
  );
}

export default HomeBlock2;
