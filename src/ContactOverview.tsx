import React from "react";

// components
import Navbar from "./Navbar";

// styles
import "./ContactOverview.css";

const contacts: {
  name: string;
  number: string;
  email: string;
}[] = [
  {
    name: "Melody Lam",
    number: "+33 6 11 78 19 27",
    email: "melody.yy.lam@gmail.com",
  },
  {
    name: "Sorasi Muon",
    number: "+33 6 09 45 95 30",
    email: "sorasi.muon@gmail.com",
  },
];

const FoodInformationOverview = () => {
  return (
    <div className="co-main">
      <div className="co-header">
        <Navbar />
        <div className="co-title">
          <h1>Contact</h1>
        </div>
        <p className="co-description">Need to talk ?</p>
      </div>
      <div className="co-text-block">
        <p className="co-text">
          Do not hesitate to contact us anytime if you have any questions or if
          you just want to have a beer together &#128540;
        </p>
      </div>

      <div className="co-contact-block">
        {contacts.map(({ name, number, email }) => (
          <div className="co-contact">
            <p>
              <span>{name}</span>
              <br />
              <br />
              {number}
              <br />
              {email}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodInformationOverview;
