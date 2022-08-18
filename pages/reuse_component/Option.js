import { Typography } from "@mui/material";
import React from "react";

const Cards = (props) => {
  return (
    <div className="cardHolder">
      <div className="contentHolder">
        <h4>Option:</h4>
        <Typography color="text.secondary">{props.title1}</Typography>
        <Typography color="text.secondary">{props.title2}</Typography>
        <Typography color="text.secondary">{props.title3}</Typography>
        <Typography color="text.secondary">{props.title4}</Typography>
        <Typography color="text.secondary">{props.title5}</Typography>
        <Typography color="text.secondary">{props.title6}</Typography>
      </div>
    </div>
  );
};

export default Cards;
