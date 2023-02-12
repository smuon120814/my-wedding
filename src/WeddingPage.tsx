import React from "react";

// Components
import Navbar from "./Navbar";

// Style
import "./WeddingPage.css";
import VenueLocation from "./images/venue-location.jpg";
import PlaceIcon from "@mui/icons-material/Place";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  placeIcon: {
    color: "rgb(190, 0, 0)",
    "&:hover": {
      color: "rgb(250, 0, 0)",
    },
    [theme.breakpoints.up(599)]: {
      display: "none",
    },
  },
}));

const WeddingPage = () => {
  // declare classes for makeStyles Material UI
  const classes = useStyles();
  return (
    <div className="wp-main">
      <header className="wp-header">
        <Navbar />
        <h1>Wedding Day</h1>
        <h1>08.08.2023</h1>
        <p>Celebrate this special day with us</p>
      </header>

      <body>
        {/* LOCATION VENUE */}

        <div className="wp-venue-block">
          <h2>Location Venue</h2>
          <p className="wp-venue-location-name">
            The Palm Garden Beach Resort Hoi An
          </p>
          <a
            className="wp-venue-location-address"
            href="https://www.google.com/maps?q=the+palm+resort+hoi+an&um=1&ie=UTF-8&sa=X&ved=2ahUKEwik4v3uheX8AhVoVKQEHS0QAJYQ_AUoAXoECAEQAw"
          >
            <PlaceIcon className={classes.placeIcon} /> Lac Long Quan, Cua Dai
            Beach, Cam An, Hội An
          </a>
          <a href="https://www.google.com/maps?q=the+palm+resort+hoi+an&um=1&ie=UTF-8&sa=X&ved=2ahUKEwik4v3uheX8AhVoVKQEHS0QAJYQ_AUoAXoECAEQAw">
            <img
              className="wp-venue-image"
              src={VenueLocation}
              alt="Venue google map link"
            />
          </a>
          <ul className="wp-venue-location-description">
            The Palm Garden is a beach front resort which is located:
            <li>- At 15 minutes from Hoi An city center</li>
            <li>- At 40 minutes from Da Nang International Airport</li>
          </ul>
        </div>

        {/* TIMELINE */}
        <div className="wp-timeline-block">
          <h2>Timeline </h2>
          <div className="wp-event" data-date="10:00 - 10:30">
            <p className="wp-event-title">Wedding door games</p>
            <p className="wp-event-description">
              Let's start with some challenges from the bridesmaids to the groom
            </p>
          </div>
          <div className="wp-event" data-date="10:30 - 12:30">
            <p className="wp-event-title">Traditional ceremonies</p>
            <p className="wp-event-description">
              Chinese and Cambodian ceremonies to illustrate the union of two
              cultures
            </p>
          </div>
          <div className="wp-event" data-date="12:30 - 14:00">
            <p className="wp-event-title">Lunch</p>
            <p className="wp-event-description">
              Enjoy yourself with some vietnamese delicacies
            </p>
          </div>
          <div className="wp-event" data-date="14:00 - 16:30">
            <p className="wp-event-title">Break</p>
            <p className="wp-event-description">
              Get some rest and come back fresh and full of energy
            </p>
          </div>
          <div className="wp-event" data-date="16:30 - 17:30">
            <p className="wp-event-title">Laic Ceremony</p>
            <p className="wp-event-description">
              The best part, for what we reunited
            </p>
          </div>
          <div className="wp-event" data-date="17:30 - 22:00">
            <p className="wp-event-title">Cocktail and Dinner</p>
            <p className="wp-event-description">
              Relax, Chill, this is time to enjoy and have fun
            </p>
          </div>
          <div className="wp-event" data-date="22:00">
            <p className="wp-event-title">Party</p>
            <p className="wp-event-description">&#127881;&#127882;&#129313;</p>
          </div>
        </div>
      </body>
    </div>
  );
};

export default WeddingPage;
