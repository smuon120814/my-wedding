import React from "react";
import FoodInformationItemInterface from "./FoodInformationItemInterface";

// Styles
import CSS from "csstype";
import "./FoodInformationItem.css";
import PlaceIcon from "@mui/icons-material/Place";

const FoodInformationItem: React.FC<FoodInformationItemInterface> = ({
  name,
  category,
  url,
  img_url,
}: FoodInformationItemInterface) => {
  return (
    // <a className="fii-card" href={url}>
    //   <h1>{name}&nbsp;</h1>
    //   <p>
    //     &nbsp;
    //     <PlaceIcon />
    //     &nbsp;({category})
    //   </p>
    // </a>
    <a className="fii-card" href={url}>
      <h1>
        {name}&nbsp;
        <PlaceIcon />
      </h1>
      <p>{category}</p>
      <p className="fii-card-price">
        <span>$</span>$$
      </p>
    </a>
  );
};

export default FoodInformationItem;
