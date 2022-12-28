import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// components
import InformationItem from "./InformationItem";
import Navbar from "./Navbar";

// styles
import "./FoodInformationOverview.css";

// Data

const items: {
  city: string;
  content: { name: string; category: string; url: string; img_url: string }[];
}[] = [
  {
    city: "Hoi An",
    content: [
      {
        name: "Phi Banh Mi",
        category: "Sandwich",
        url: "https://www.google.com/maps/place/Phi+banh+mi/@15.8819428,108.3267453,15z/data=!4m5!3m4!1s0x0:0x2abea9e4b17f5371!8m2!3d15.8819428!4d108.3267453",
        img_url: "./images/food_images/phi_banh_mi.jpg",
      },
      {
        name: "Madam Khanh - The Banh Mi Queen",
        category: "Sandwich",
        url: "https://www.google.com/maps/place/Madam+Khanh+-+The+Banh+Mi+Queen/@15.8800161,108.3282099,19.71z/data=!4m12!1m6!3m5!1s0x0:0x2abea9e4b17f5371!2sPhi+banh+mi!8m2!3d15.8819428!4d108.3267453!3m4!1s0x31420e7943de2173:0x4296bf40af5321a7!8m2!3d15.880618!4d108.327976",
        img_url: "./images/food_images/madam_khanh_banh_mi.jpg",
      },
      {
        name: "Banh Mi Phuong",
        category: "Sandwich",
        url: "https://www.google.com/maps/place/B%C3%A1nh+Mi%CC%80+Ph%C6%B0%E1%BB%A3ng/@15.878423,108.3317956,21z/data=!4m12!1m6!3m5!1s0x0:0x2abea9e4b17f5371!2sPhi+banh+mi!8m2!3d15.8819428!4d108.3267453!3m4!1s0x31420dd587dbb975:0xd214dd792e0869d7!8m2!3d15.8785061!4d108.3319229",
        img_url: "./images/food_images/banh_mi_phuong.jpg",
      },
    ],
  },
  {
    city: "Danang",
    content: [
      {
        name: "Frog My Quang",
        category: "Noodle Soup",
        url: "https://www.google.com/maps/place/Phi+banh+mi/@15.8819428,108.3267453,15z/data=!4m5!3m4!1s0x0:0x2abea9e4b17f5371!8m2!3d15.8819428!4d108.3267453",
        img_url: "./images/food_images/phi_banh_mi.jpg",
      },
      {
        name: "Banh Xeo",
        category: "Banh Xeo",
        url: "https://www.google.com/maps/place/Madam+Khanh+-+The+Banh+Mi+Queen/@15.8800161,108.3282099,19.71z/data=!4m12!1m6!3m5!1s0x0:0x2abea9e4b17f5371!2sPhi+banh+mi!8m2!3d15.8819428!4d108.3267453!3m4!1s0x31420e7943de2173:0x4296bf40af5321a7!8m2!3d15.880618!4d108.327976",
        img_url: "./images/food_images/madam_khanh_banh_mi.jpg",
      },
      {
        name: "Banh Mi Nem Nuong",
        category: "Sandwich",
        url: "https://www.google.com/maps/place/B%C3%A1nh+Mi%CC%80+Ph%C6%B0%E1%BB%A3ng/@15.878423,108.3317956,21z/data=!4m12!1m6!3m5!1s0x0:0x2abea9e4b17f5371!2sPhi+banh+mi!8m2!3d15.8819428!4d108.3267453!3m4!1s0x31420dd587dbb975:0xd214dd792e0869d7!8m2!3d15.8785061!4d108.3319229",
        img_url: "./images/food_images/banh_mi_phuong.jpg",
      },
    ],
  },
];

const FoodInformationOverview = () => {
  const navigate = useNavigate();

  const handleSwitchCity = (e: React.MouseEvent<HTMLElement>) => {};

  return (
    <div className="fio-main">
      <div className="fio-header">
        <Navbar />
        <h1 className="fio-title">
          <span className="green">Food &#38; Beverages</span>
        </h1>
        <p className="gi-description">The good taste of Vietnam</p>
      </div>
      <div className="fio-btn-city1">
        <h1 className="fio-title">Hoi An</h1>
        {items[0].content.map(({ name, category, url, img_url }, index) => (
          <InformationItem
            category={name}
            text={category}
            url={url}
            img_url={img_url}
            key={index}
          ></InformationItem>
        ))}
      </div>
      <div className="fio-btn-city1">
        <h1 className="fio-title">Danang</h1>
        {items[1].content.map(({ name, category, url, img_url }, index) => (
          <InformationItem
            category={name}
            text={category}
            url={url}
            img_url={img_url}
            key={index}
          ></InformationItem>
        ))}
      </div>
    </div>
  );
};

export default FoodInformationOverview;