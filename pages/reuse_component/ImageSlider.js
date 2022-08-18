import Image from "next/image";
import React, { Component } from "react";
import Carousel from "react-material-ui-carousel";
import { Typography } from "@mui/material";

const ImageSlider = (props) => {
  var items = [
    {
      name: "/image.png",
    },
    {
      name: "/image1.png",
    },
    {
      name: "/image2.png",
    },
  ];
  return (
    <div>
      <Typography variant="h5" gutterBottom component="div">
        {props.heading}
      </Typography>
      <br />
      <Carousel navButtonsAlwaysInvisible="false">
        {items.map((item, i) => (
          <>
            <div style={{ textAlign: "center !important" }}>
              <Image
                alt="adf"
                src={item.name}
                width="200px !important"
                height="350px !important"
              ></Image>
            </div>
          </>
        ))}
      </Carousel>
      <div className="" style={{ textAlign: "center" }}>
        <p style={{ color: props.priceColor }}>{props.price}</p>
        <p style={{ color: props.nameColor }}>{props.name}</p>
      </div>
    </div>
  );
};

export default ImageSlider;
