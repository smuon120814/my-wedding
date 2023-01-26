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
    text: "Find a good place to eat",
    url: "/information/food",
    img_url: "/images/food.png",
  },
  {
    category: "Accomodation",
    text: "Where to stay",
    url: "https://www.google.com/maps/place/Phi+banh+mi/@15.8819428,108.3267453,15z/data=!4m2!3m1!1s0x0:0x2abea9e4b17f5371?sa=X&ved=2ahUKEwiN9v256Yr7AhUDz4UKHQdsCIcQ_BJ6BAh1EAU",
    img_url: "/images/hotel.jpg",
  },
  {
    category: "Transportation",
    text: "Taxi, motocycle, bicycle",
    url: "https://www.google.com/maps/place/Phi+banh+mi/@15.8819428,108.3267453,15z/data=!4m2!3m1!1s0x0:0x2abea9e4b17f5371?sa=X&ved=2ahUKEwiN9v256Yr7AhUDz4UKHQdsCIcQ_BJ6BAh1EAU",
    img_url: "/images/transportation.jpg",
  },
  {
    category: "Change Money",
    text: "Best place to change money",
    url: "https://www.google.com/maps/place/Phi+banh+mi/@15.8819428,108.3267453,15z/data=!4m2!3m1!1s0x0:0x2abea9e4b17f5371?sa=X&ved=2ahUKEwiN9v256Yr7AhUDz4UKHQdsCIcQ_BJ6BAh1EAU",
    img_url: "changemoney.jpg",
  },
];

const InformationOverview = () => {
  return (
    <div className="io-main">
      <div className="io-header">
        <Navbar />
        <h1 className="io-title">Information</h1>
        <p className="io-description">
          Quelque bonnes addresses et bon conseils pour bien pr&#233;parer votre
          s&#233;jour au Vietnam
        </p>
      </div>

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
