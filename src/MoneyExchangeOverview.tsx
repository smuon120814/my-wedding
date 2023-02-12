import React from "react";

// components
import MoneyExchangeItem from "./MoneyExchangeItem";
import Navbar from "./Navbar";

// styles
import "./MoneyExchangeOverview.css";

const items: {
  name: string;
  city: string;
  url: string;
  address: string;
  star: boolean;
}[] = [
  {
    name: "Kim Hong Phuc Gold Shop",
    city: "Hoi An",
    url: "https://goo.gl/maps/6s561rJtLthfQNwF9",
    address: "V8GM+M4W, Hoàng Diệu, Old Town, Tp. Hội An, Quảng Nam, Vietnam",
    star: true,
  },

  {
    name: "VietBank ATM",
    city: "Hoi An",
    url: "https://www.google.com/maps/place/Vietbank+ATM/@15.879126,108.3289864,17.75z/data=!4m10!1m2!2m1!1shoi+an+vietbank!3m6!1s0x31420e7f4ce49951:0x77d9361127facd99!8m2!3d15.8793202!4d108.3318875!15sCg9ob2kgYW4gdmlldGJhbmsiA4gBAZIBA2F0beABAA!16s%2Fg%2F1pzr4qymz",
    address: "4, Đường Hoàng Diệu, Sơn Phong, Hội An, Quảng Nam, Vietnam",
    star: false,
  },
  {
    name: "VietBank ATM",
    city: "Hoi An",
    url: "https://www.google.com/maps/place/Vietbank+ATM/@15.879101,108.3275146,18.25z/data=!4m10!1m2!2m1!1shoi+an+vietbank!3m6!1s0x31420e7ecf399433:0xc3401751eb20c807!8m2!3d15.8790898!4d108.328773!15sCg9ob2kgYW4gdmlldGJhbmsiA4gBAZIBA2F0beABAA!16s%2Fg%2F1pzqbw7c8",
    address: "Đường Lê Lợi, Phường Minh An, Hội An, Quảng Nam, Vietnam",
    star: false,
  },

  {
    name: "Hiệu vàng Soạn Hà - Gold shop",
    city: "Da Nang",
    url: "https://www.google.com/maps/place//data=!4m2!3m1!1s0x3142199f8a17b091:0x5e4aa925c310d4ec",
    address: "121 Đ. Trần Phú, Hải Châu 1, Hải Châu, Đà Nẵng 550000, Vietnam",
    star: false,
  },
  {
    name: "KIM MỸ KIM",
    city: "Da Nang",
    url: "https://www.google.com/maps/place//data=!4m2!3m1!1s0x3142177c40eaea81:0x24ec4f98e77e0883",
    address: "142 Lê Lộ, Bắc Mỹ Phú, Ngũ Hành Sơn, Đà Nẵng 50507, Vietnam",
    star: false,
  },
  {
    name: "Vivyanne shop",
    city: "Da Nang",
    url: "https://www.google.com/maps/place//data=!4m2!3m1!1s0x3142192a512f9c47:0x2d149bf92c91c01c",
    address:
      "516 Đ. 2 Tháng 9, Hoà Cường Nam, Hải Châu, Đà Nẵng 552450, Vietnam",
    star: false,
  },
];

const FoodInformationOverview = () => {
  return (
    <div className="meo-main">
      <div className="meo-header">
        <Navbar />
        <div className="meo-title">
          <h1>
            Money <span>Ex</span>change
          </h1>
        </div>
        <p className="meo-description">
          Where to get <span>Vietnamese Dong (VND)</span> at a good rate
        </p>
      </div>

      {/* CONVERSION TO VND */}
      <div className="meo-convert">
        <h2>Currency Rate</h2>
        <ul>
          <li>EUR / VND&nbsp;&nbsp;&rarr;&nbsp;&nbsp;25,515.04</li>
          <li>USD / VND&nbsp;&nbsp;&rarr;&nbsp;&nbsp;23,467.50</li>
          <li>HKD / VND&nbsp;&nbsp;&rarr;&nbsp;&nbsp;2,997.03</li>
          <li>SGD / VND&nbsp;&nbsp;&rarr;&nbsp;&nbsp;17,866.39</li>
        </ul>
        <p>last update : 01/29/2023 - 00:26:00 CET</p>
      </div>
      {/* LOCATION */}
      <div className="meo-text-block">
        <p className="meo-text">
          In Hoi An and Da Nang, you can exchange money at any&nbsp;
          <span>banks ATMs</span>, and{" "}
          <span>many shops in Hoi An old city</span>
          &nbsp; propose money exchange service.
        </p>
        <p className="meo-gold-rule">
          "To get the best rates exchange your money in gold shops"
        </p>
        <p className="meo-text">
          In Da Nang, you can find gold shops around the <span>Han Market</span>
          &nbsp; and the <span>Con Market</span>.
        </p>
      </div>

      <div className="meo-location">
        {items.map(({ name, city, url, address, star }) => (
          <MoneyExchangeItem
            name={name}
            city={city}
            url={url}
            address={address}
            star={star}
          />
        ))}
      </div>
    </div>
  );
};

export default FoodInformationOverview;
