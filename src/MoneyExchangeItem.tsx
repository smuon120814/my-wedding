import React from "react";
import MoneyExchangeItemInterface from "./MoneyExchangeItemInterface";

// Styles
import "./MoneyExchangeItem.css";
import PlaceIcon from "@mui/icons-material/Place";
import StarIcon from "@mui/icons-material/Star";
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

const MoneyExchangeItem: React.FC<MoneyExchangeItemInterface> = ({
  name,
  city,
  url,
  address,
  star,
}: MoneyExchangeItemInterface) => {
  const classes = useStyles();
  return (
    <a className="mei-card" href={url}>
      <h1>
        {name}&nbsp;
        <PlaceIcon className={classes.placeIcon} />
        {star ? <StarIcon /> : ""}
      </h1>
      <p className="mei-card-city">{city}</p>
      <p className="mei-card-address">{address}</p>
    </a>
  );
};

export default MoneyExchangeItem;
