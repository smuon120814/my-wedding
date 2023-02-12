import React from "react";

// components
import Navbar from "./Navbar";

// styles
import "./TransportationOverview.css";
import AirportImage from "./images/AirporttoPalm.jpg";

const TransportationOverview = () => {
  return (
    <div className="tr-main">
      <div className="tr-header">
        <Navbar />
        <div className="tr-title">
          <h1>Transportation</h1>
        </div>
        <p className="tr-description">Taxi, motorbike, bicyle</p>
      </div>
      {/* From Airport */}
      <div className="tr-block">
        <h2>From Airport</h2>
        <p>
          The Da Nang International airport is located at{" "}
          <span>35 minutes in taxi</span>&nbsp;from the Palm Garden Resort. It
          should cost around <span>15 EUR if you book from Booking.com.</span>
        </p>

        <a href="https://www.google.com/maps/dir/Da+Nang+International+Airport,+Nguy%E1%BB%85n+V%C4%83n+Linh,+H%C3%B2a+Thu%E1%BA%ADn+T%C3%A2y,+H%E1%BA%A3i+Ch%C3%A2u+District,+Da+Nang,+Vietnam/Palm+Garden+Resort+Hoi+An,+C%E1%BA%A9m+An,+H%E1%BB%99i+An,+Qu%E1%BA%A3ng+Nam,+Vietnam/@15.9874353,108.2591435,13z/data=!4m14!4m13!1m5!1m1!1s0x314219bab9b63451:0xd7a9441e697a048c!2m2!1d108.2023592!2d16.0554407!1m5!1m1!1s0x31420d9373446877:0x4fb17970e7e8b160!2m2!1d108.359024!2d15.9007997!3e0">
          <img
            className="tr-airport-image"
            src={AirportImage}
            alt="Way from airport to the Palm Garden"
          />
        </a>
      </div>
      <div className="tr-block">
        <h2>Taxi</h2>
        <p>
          The easiest way to book the taxi:
          <br />
          - Use Grab application
          <br />- Order from the reception of your hotel
        </p>
      </div>
      <div className="tr-block">
        <h2>Motorbike</h2>
        <p>
          The motorbike is the most convenient way to move in the cities and
          easy to park anywhere.
          <br />
          <br />
          But you cannot go with your motorbike into Hoi An ancient city. There
          are many parking spots at the entrance that will cost nothing for the
          entire day (usually close at 22h).
          <br />
          <br />
          There are many shops to rent a motorbike. This costs around{" "}
          <span>5-6 EUR per day</span>.
          <br />
          <br />
          You can easily book from your hotel (ask the reception). They will
          bring the motorbike to your hotel.
        </p>
      </div>
      <div className="tr-block">
        <h2>Bicycle</h2>
        <p>
          Very convenient in Hoi An, most of the hotels lends bicyles for their
          guests for free. This is the only one that you can bring in the
          ancient town.
        </p>
      </div>
    </div>
  );
};

export default TransportationOverview;
