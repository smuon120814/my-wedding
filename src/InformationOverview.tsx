import React from "react";

// Components
import InformationItem from "./InformationItem";
import Navbar from "./Navbar";

// Style
import "./InformationOverview.css";

const info_content: {
  category: string;
  text: string;
  img_url: string;
  url: string;
}[] = [
  {
    category: "Food",
    text: "The authentic taste of Vietnam",
    url: "/information/food",
    img_url: "/images/food.png",
  },
  {
    category: "Accomodation",
    text: "Sleep well and enjoy",
    url: "information/accomodations",
    img_url: "/images/hotel.jpg",
  },
  {
    category: "Transportation",
    text: "Taxi, motorbike, bicycle",
    url: "information/transportation",
    img_url: "/images/transportation.jpg",
  },
  {
    category: "Exchange Money",
    text: "Exchange to vietnamese Dong (VND)",
    url: "information/moneyexchange",
    img_url: "/images/changemoney.jpg",
  },
];

const InformationOverview = () => {
  return (
    <div className="io-main">
      <div className="io-header">
        <Navbar />
        <h1 className="io-title">Information</h1>
        <p className="io-description">Prepare your trip</p>
      </div>

      <p className="io-description">
        Some good tips to help you enjoy your stay in Hội An and Da Nang
      </p>

      <div className="io-body">
        {info_content.map((info_item, index) => (
          <InformationItem
            category={info_item.category}
            text={info_item.text}
            url={info_item.url}
            img_url={info_item.img_url}
            key={index}
          ></InformationItem>
        ))}
      </div>
    </div>
  );
};

export default InformationOverview;
