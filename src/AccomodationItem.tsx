import React from "react";
import AccomodationItemInterface from "./AccomodationItemInterface";

// Styles
import "./AccomodationItem.css";
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

const AccomodationItem: React.FC<AccomodationItemInterface> = ({
  name,
  address,
  url,
  price,
  distance,
  comments,
}: AccomodationItemInterface) => {
  const classes = useStyles();
  return (
    <a className="aci-card" href={url}>
      <h1>
        {name}&nbsp;
        <PlaceIcon className={classes.placeIcon} />
      </h1>

      <p className="aci-card-details">
        <br />
        Price (for two persons): {price} VND
        <br />
        Distance from wedding venue: {distance}
        <br />
        {comments}
      </p>
    </a>
  );
};

export default AccomodationItem;
