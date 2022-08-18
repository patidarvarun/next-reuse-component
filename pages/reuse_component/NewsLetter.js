import React, { Component } from "react";
import { TextField, Typography } from "@mui/material";
const NewsLetter = (props) => {
  return (
    <div>
      <Typography variant="h5" gutterBottom component="div">
        {props.heading}
      </Typography>
      <Typography variant="subtitle1" gutterBottom style={{ color: "grey" }}>
        {props.body.slice(0, 48)}
        <br />
        &nbsp;{props.body.slice(48, 100)}
      </Typography>
      <TextField
        hiddenLabel
        id="filled-hidden-label-normal"
        defaultValue={props.inputField}
        variant="filled"
        style={{ width: "25em", color: "grey !important" }}
      />
    </div>
  );
};

export default NewsLetter;
