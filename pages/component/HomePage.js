import React, { Component } from "react";
import { Typography } from "@mui/material";
import Header from "../reuse_component/Header";
import ImageSlider from "../reuse_component/ImageSlider";
import ButtonComponent from "../reuse_component/ButtonComponent";
import ProductDetailBlock from "../reuse_component/ProductDetailBlock";
import NewsLetter from "../reuse_component/NewsLetter";

const HomePage = (props) => {
  const handleSubmit = () => {
    console.log("OkkkClicked");
  };
  return (
    <div style={{ textAlign: "center !important" }}>
      <Header />
      <ImageSlider
        price="$175"
        name="Check White Blue Double Ply Dress Shirt"
        priceColor="blue"
      />
      <ButtonComponent
        name="SELECT SHIRT SIZE"
        color="white"
        padding="5px"
        background="#0060f1"
        width="22.5%"
        height="4.2em"
        fontWeight="600"
        margin="7px 1px 2px 4px"
        type={"Submit"}
        // handleClick={handleSubmit}
      />
      <ButtonComponent
        name=" ADD TO CART"
        color="white"
        padding="5px"
        background="rgb(194 199 209)"
        width="22.5%"
        height="4.2em"
        fontWeight="600"
        margin="7px 1px 2px 4px"
        type={"Submit"}
      />
      <br />
      <br />
      <Typography variant="caption" display="block" gutterBottom>
        Order by 5 p.m. delevers to 22554
      </Typography>
      <Typography variant="caption" display="block" gutterBottom>
        Change Location
      </Typography>
      ------------------------------------------------
      <Typography variant="caption" display="block" gutterBottom>
        Thrusday April 14th
      </Typography>
      <Typography variant="caption" display="block" gutterBottom>
        Free
      </Typography>
      <br />
      <br />
      <ProductDetailBlock handleIconClick={handleSubmit} />
      <br />
      <br />
      <ImageSlider
        heading="You Might Like This"
        name="Blue Twill Long Sleeve"
        price="$175"
        priceColor="grey"
      />
      <br />
      <Typography variant="h6" gutterBottom component="div">
        View All
      </Typography>
      <br />
      <br />
      <ImageSlider heading=" Summer Style Inspiration From The Collection" />
      <br />
      <br />
      <NewsLetter
        heading="Newsletter Sign Up"
        body="Sign up to our newsletter and be the first know what we're up to.And receive exclusive deals."
        inputField="Help text here*"
      />
      <ButtonComponent
        name="JOIN THE NEWSLETTER"
        color="white"
        padding="5px"
        background="#c5c5c5"
        width="22.5%"
        height="3.7em"
        fontWeight="600"
        margin="7px 1px 2px 4px"
        type={"Submit"}
      />
    </div>
  );
};

export default HomePage;
