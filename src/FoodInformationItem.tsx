import React from "react";
import FoodInformationItemInterface from "./FoodInformationItemInterface";

// Styles
import "./FoodInformationItem.css";
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

const FoodInformationItem: React.FC<FoodInformationItemInterface> = ({
  name,
  category,
  description,
  url,
}: FoodInformationItemInterface) => {
  const classes = useStyles();
  return (
    <a className="fii-card" href={url}>
      <h1>
        {name}&nbsp;
        <PlaceIcon className={classes.placeIcon} />
      </h1>
      <p className="fii-card-category">{category}</p>
      <p className="fii-card-description">{description}</p>
      <p className="fii-card-price">
        <span>$</span>$$
      </p>
    </a>
  );
};

export default FoodInformationItem;
