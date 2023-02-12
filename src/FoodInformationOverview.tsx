import React from "react";

// components
import FoodInformationItem from "./FoodInformationItem";
import Navbar from "./Navbar";

// styles
import "./FoodInformationOverview.css";
// import { ReactComponent as NoodleSoupLogo } from "./images/noodle-icon.svg";

// Data

const items: {
  city: string;
  content: {
    name: string;
    category: string;
    description: string;
    url: string;
  }[];
}[] = [
  {
    city: "Hoi An",
    content: [
      {
        name: "Phi Banh Mi",
        category: "Sandwich",
        description:
          "Our favourite banh mi sandwich in Hoi An. Take the one with avocado =)",
        url: "https://www.google.com/maps/place/Phi+banh+mi/@15.8819428,108.3267453,15z/data=!4m5!3m4!1s0x0:0x2abea9e4b17f5371!8m2!3d15.8819428!4d108.3267453",
      },
      {
        name: "Madam Khanh - The Banh Mi Queen",
        category: "Sandwich",
        description: "Another nice location for banh mi sandwich with paté",
        url: "https://www.google.com/maps/place/Madam+Khanh+-+The+Banh+Mi+Queen/@15.8800161,108.3282099,19.71z/data=!4m12!1m6!3m5!1s0x0:0x2abea9e4b17f5371!2sPhi+banh+mi!8m2!3d15.8819428!4d108.3267453!3m4!1s0x31420e7943de2173:0x4296bf40af5321a7!8m2!3d15.880618!4d108.327976",
      },
      {
        name: "Banh Mi Phuong",
        category: "Sandwich",
        description:
          "Another nice location for banh mi sandwich at the entrance of Hoi An old city",
        url: "https://www.google.com/maps/place/B%C3%A1nh+Mi%CC%80+Ph%C6%B0%E1%BB%A3ng/@15.878423,108.3317956,21z/data=!4m12!1m6!3m5!1s0x0:0x2abea9e4b17f5371!2sPhi+banh+mi!8m2!3d15.8819428!4d108.3267453!3m4!1s0x31420dd587dbb975:0xd214dd792e0869d7!8m2!3d15.8785061!4d108.3319229",
      },
      {
        name: "Cơm Gà Bà Buội",
        category: "Chicken Rice / Noodle",
        description:
          "They delicious chicken and noodles at the entrance of Hoi An old city",
        url: "https://goo.gl/maps/4RXAv9ESDYMSVaF26",
      },
      {
        name: "Tamy Coffee - The Rooftop Hoi An",
        category: "Coffee shop",
        description: "Nice coffee shop service vietnamese style coffee",
        url: "https://www.google.com/maps?q=Tamy+Coffee+-+The+Rooftop+Hoi+An&um=1&ie=UTF-8&sa=X&ved=2ahUKEwihqc6yp-v8AhUsVaQEHZSUAPwQ_AUoAXoECCoQAw",
      },
    ],
  },
  {
    city: "Danang",
    content: [
      {
        name: "Mỳ Quảng Cô Sáu",
        category: "Noodle Soup",
        description: "Nice place who serves the My Quang",
        url: "https://www.google.com/maps/place//data=!4m2!3m1!1s0x3142195f06b31c81:0x1fe1c46b146c5f24?entry=s&sa=X&ved=2ahUKEwjS5Prkp-v8AhUwTqQEHSrpC0EQ4kB6BAguEAI",
      },
      {
        name: "Bac My An Market",
        category: "Market",
        description:
          "Energetic hub for meat, fish & produce sellers, where are also served delicous local dishes",
        url: "https://www.google.com/maps/place/Bac+My+An+Market/@16.0415773,108.2422664,15z/data=!4m5!3m4!1s0x0:0xa5148e15ff526fe0!8m2!3d16.0415789!4d108.2422701",
      },
      {
        name: "Kem Bơ Cô Cúc",
        category: "Ice cream shop",
        description: "Their specialty is the avocado and coconut sundae",
        url: "https://goo.gl/maps/5xMMrurzpREEE8q6A",
      },
      {
        name: "Bánh Xèo Bà Dưỡng",
        category: "Ice cream shop",
        description:
          "Hidden place in a narrow street where they serve delicious banh xeo and nem nuong",
        url: "https://goo.gl/maps/VESNxwSZenKEB1bv9",
      },
      {
        name: "Dua Ben Tre 190",
        category: "Dessert",
        description: "Nice place to chill and eat local desserts",
        url: "https://goo.gl/maps/RJA4DtQMhR2PwQsG8",
      },
      {
        name: "Phương Bánh Canh Ruộng",
        category: "Noddle soup / Breakfast",
        description:
          "Local restaurant which serves banh canh. Perfect for breakfast",
        url: "https://www.google.com/maps/place/Ph%C6%B0%C6%A1ng+B%C3%A1nh+Canh+Ru%E1%BB%99ng/@16.0524542,108.2336696,16z/data=!4m14!1m7!3m6!1s0x314219d46ae983db:0xaf6e056f31e66869!2zUGjGsMahbmcgQsOhbmggQ2FuaCBSdeG7mW5n!8m2!3d16.0524584!4d108.2380454!16s%2Fg%2F11f101l9tj!3m5!1s0x314219d46ae983db:0xaf6e056f31e66869!8m2!3d16.0524584!4d108.2380454!16s%2Fg%2F11f101l9tj?authuser=0&hl=en",
      },
    ],
  },
];

const FoodInformationOverview = () => {
  return (
    <div className="fio-main">
      {/* HEADER */}
      <div className="fio-header">
        <Navbar />
        <div className="fio-title">
          <h1>
            <span>F</span>ood&nbsp;<span>x&nbsp;</span>
            {/* <NoodleSoupLogo /> */}
            <span>B</span>everage
          </h1>
        </div>
        <p className="fio-description">
          The authentic taste of <span>Vietnam</span>
        </p>
      </div>

      {/* BODY */}
      <div className="fio-btn-city city-1">
        <h2>Hoi An</h2>
        {items[0].content.map(({ name, category, description, url }, index) => (
          <FoodInformationItem
            name={name}
            category={category}
            description={description}
            url={url}
            key={index}
          ></FoodInformationItem>
        ))}
      </div>
      <div className="fio-btn-city">
        <h2>Da Nang</h2>
        {items[1].content.map(({ name, category, description, url }, index) => (
          <FoodInformationItem
            name={name}
            category={category}
            description={description}
            url={url}
            key={index}
          ></FoodInformationItem>
        ))}
      </div>
    </div>
  );
};

export default FoodInformationOverview;
