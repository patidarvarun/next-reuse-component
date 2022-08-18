import { Button } from "@mui/material";
import React, { Component } from "react";
const ButtonComponent = (props) => {
  return (
    <div>
      <Button
        style={{
          color: props.color,
          border: props.border,
          padding: props.padding,
          background: props.background,
          width: props.width,
          fontSize: props.fontSize,
          margin: props.margin,
          fontWeight: props.fontWeight,

          borderRadius: props.borderRadius,
          textAlign: props.textAlign,
          height: props.height,
        }}
        disabled={props.disabled}
        type={props.type}
        onClick={props.handleClick}
      >
        {props.name}
      </Button>
    </div>
  );
};

export default ButtonComponent;
