import React from "react";

// components
import AccomodationItem from "./AccomodationItem";
import Navbar from "./Navbar";

// styles
import "./AccomodationOverview.css";

const price_rooms: {
  name: string;
  price: string;
}[] = [
  {
    name: "Superior Garden View",
    price: "2,300,000",
  },
  {
    name: "Superior Ocean View",
    price: "2,400,000",
  },
  {
    name: "Deluxe Garden View",
    price: "2,500,000",
  },
  {
    name: "Deluxe Ocean View",
    price: "2,835,000",
  },
  {
    name: "Bungalow Pool View",
    price: "3,825,000",
  },
  {
    name: "Bungalow Beach View",
    price: "4,320,000",
  },
  {
    name: "Palm Suite",
    price: "7,000,000",
  },
  {
    name: "Family Suite (2 bedrooms) with private pool",
    price: "14,500,000",
  },
];

const hotels: {
  name: string;
  address: string;
  url: string;
  price: string;
  distance: string;
  comments: string;
}[] = [
  {
    name: "Victoria Hoi An Beach Resort & Spa",
    address: "Biển, Âu Cơ, Cửa Đại, Hội An, Quảng Nam 51353, Vietnam",
    url: "https://www.booking.com/hotel/vn/victoria-hoi-an-beach-resort-and-spa.fr.html",
    price: "2,526,000",
    distance: "15 min walk - 3 min taxi",
    comments: "Near Beach and wedding venue",
  },
  {
    name: "Koi Resort & Spa",
    address: "Beach, Âu Cơ, Street, Hội An, Quảng Nam 56000, Vietnam",
    url: "https://www.booking.com/hotel/vn/koi-resort-amp-spa-hoi-an.fr.html",
    price: "1,530,900",
    distance: "15 min walk - 3 min taxi",
    comments: "Near Beach and wedding venue",
  },
  {
    name: "Hoi An Beach Resort",
    address: "1 Cửa Đại, Hội An, Quảng Nam, Vietnam",
    url: "https://www.booking.com/hotel/vn/hoi-an-beach-resort.fr.html",
    price: "1,530,900",
    distance: "15 min walk - 3 min taxi",
    comments: "Near Beach and wedding venue",
  },
  {
    name: "Fivitel Hoi An Hotel",
    address: "Lô 19 - 01 KĐT, Phước Trạch, Hội An, Quảng Nam 560000, Vietnam",
    url: "https://www.booking.com/hotel/vn/fivitel-hoi-an.fr.html",
    price: "766,000",
    distance: "20 min walk - 4 min taxi",
    comments: "Near Beach and wedding venue",
  },
  {
    name: "Hoi An Memority Villas & Spa",
    address: "250/7 Nguyễn Duy Hiệu, Cẩm Châu, Hội An, Quảng Nam, Vietnam",
    url: "https://www.booking.com/hotel/vn/hoi-an-memority-villas-amp-spa-thanh-pho-hoi-an.en-gb.html",
    price: "511,000",
    distance: "10 min taxi",
    comments: "In Ancien town",
  },
  {
    name: "Lantana Riverside Hoi An Boutique Hotel & Spa",
    address:
      "52 Huyền Trân Công Chúa, Cẩm Châu, Hội An, Quảng Nam 560000, Vietnam",
    url: "https://www.booking.com/hotel/vn/laelia-hoi-an-riverside-boutique-amp-spa.en-gb.html",
    price: "1,276,000",
    distance: "10 min taxi",
    comments: "In Ancien town",
  },
  {
    name: "Cozy Savvy Boutique Hotel Hoi An",
    address:
      "116 Đào Duy Từ, Phường Cẩm Phổ, Hội An, Quảng Nam 560000, Vietnam",
    url: "https://www.booking.com/hotel/vn/cozy-savvy-boutique-hoi-an.fr.html",
    price: "1,276,000",
    distance: "15 min taxi",
    comments: "In Ancien town",
  },
  {
    name: "Mulberry Collection Silk Village",
    address: "41 Phạm Văn Đồng, Tân An, Hội An, Quảng Nam, Vietnam",
    url: "https://www.booking.com/hotel/vn/hoi-an-silk-village-resort-amp-spa.fr.html",
    price: "1,150,000",
    distance: "15 min taxi",
    comments: "Near Ancien town",
  },
  {
    name: "Blooms Boutique Village",
    address: "85 Lê Hồng Phong, Cẩm Hà, Hội An, Quảng Nam, Vietnam",
    url: "https://www.booking.com/hotel/vn/the-cliff-boutique-village.fr.html",
    price: "638,000",
    distance: "10 min taxi",
    comments: "Near Ancien town",
  },
];

const AccomodationOverview = () => {
  return (
    <div className="ac-main">
      <div className="ac-header">
        <Navbar />
        <div className="ac-title">
          <h1>
            <span>H</span>otels x <span>A</span>ccomodations
          </h1>
        </div>
        <p className="ac-description">Sleep well and enjoy</p>
      </div>

      {/* Special Price */}
      <div className="ac-special-price">
        <h2>Special Price at the Palm</h2>
        <p>
          The Palm Garden Resort offers a <span>special discount</span> for the
          rooms to the guests who come for the wedding:
        </p>
        <table>
          <tr>
            <th>Room Type</th>
            <th>Price&nbsp;(VND)</th>
          </tr>
          {price_rooms.map(({ name, price }) => (
            <tr>
              <td>{name}</td>
              <td>{price}</td>
            </tr>
          ))}
        </table>
        <p>The room price includes the breakfast</p>
        <p>
          If you want to book at the Palm Garden, you must book the room by
          sending an email to <span>saleshoian@pgr.com.vn</span> and indicate
          this is with the wedding of Melody and Sorasi.
        </p>
      </div>
      {/* LOCATION */}
      <div className="ac-text">
        <p>
          In Hoi An and Da Nang, you will easily{" "}
          <span>find nice hotels at very affordable prices</span>. Below are
          some suggestions.
        </p>
      </div>
      <div className="ac-location">
        {hotels.map(({ name, address, url, price, distance, comments }) => (
          <AccomodationItem
            name={name}
            address={address}
            url={url}
            price={price}
            distance={distance}
            comments={comments}
          />
        ))}
      </div>
    </div>
  );
};

export default AccomodationOverview;
