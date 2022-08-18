import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import React, { Component, Fragment } from "react";
import Option from "../reuse_component/Option";
import TableComponent from "../reuse_component/TableComponent";
import TransactionHistory from "../reuse_component/TransactionHistory";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Paper from "@mui/material/Paper";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import Image from "next/image";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ButtonComponent from "../reuse_component/ButtonComponent";
import Carousel from "react-material-ui-carousel";
import ImageSlider from "../reuse_component/ImageSlider";

const Page2 = () => {
  // const handleSubmit = (e) => {
  //   console.log("Okkk Clicked...");
  // };
  // const handleSave = (e) => {
  //   console.log("Okkk Saved.....");
  // };
  return (
    <div>
      <ImageSlider />
      {/* <ButtonComponent
        name="Almost There"
        color="#ff3405"
        border="1px solid #ff3405"
        padding="5px"
        background="#ffeded"
        width="16.5%"
        height="3em"
        fontWeight="600"
        margin="7px 1px 2px 4px"
        type={"Submit"}
        // handleClick={handleSubmit}
      />
      <ButtonComponent
        name="Almost There"
        color="#ff8100"
        border="1px solid black"
        padding="5px"
        background="#ffffeb"
        width="16.5%"
        height="3em"
        fontWeight="600"
        margin="7px 1px 2px 4px"
        type={"Submit"}
        // handleClick={handleSubmit}
      />
      <ButtonComponent
        name="Success"
        color="#26cf43"
        border="1px solid #7cef7c"
        padding="5px"
        background="rgb(227 253 238)"
        width="16.5%"
        height="3em"
        fontWeight="600"
        margin="7px 1px 2px 4px"
        type={"Submit"}
        //  handleClick={handleSave}
      /> */}
      <Typography variant="h6" id="tableTitle" component="span">
        Grid List Double Rows
      </Typography>
      <Option
        title1="Two Columns"
        title2="No Header"
        title3="Text Only"
        title4="Dotted Borders"
        title5="Custom Spacing Between Rows"
      />
      <TransactionHistory />

      <Option
        title1="Option Icon"
        title2="Image"
        title3="Four Columns"
        title4="Tabbed Header"
      />
      <TableComponent
        heading1="Category"
        heading2="Date"
        heading5="Status"
        heading7="Product"
        data1="Jacket"
        data2={<div style={{ color: "grey" }}>3.12.22</div>}
        data5={<div style={{ color: "grey" }}>Spread Collor</div>}
        data6={
          <Image
            alt="adf"
            src="/shirt.png"
            width="50px !important"
            height="60px !important"
          ></Image>
        }
        data7={<MoreVertIcon />}
      />

      <Option title1="Arrow Icon" title2="One Column" title3="Tabbed Header" />
      <TableComponent
        heading1="Shirt"
        heading2="Jacket"
        heading3="Trousers"
        heading4="Vest"
        heading7="Others"
        data1="Jacket"
        data7={<ArrowForwardIosIcon />}
      />
      <Option
        title1="Radio Button"
        title2="One Column"
        title3="Tabbed Header"
      />
      <TableComponent
        heading1="Default Sizes"
        heading2=""
        heading3=""
        heading4=""
        heading7="SAVED SIZES"
        data1="Jacket"
        data7={<RadioButtonUncheckedIcon style={{ color: "black" }} />}
      />
      <Option
        title1="Custom Icon (on every row)"
        title2="One Column"
        title3="No Header"
      />
      <TableComponent
        data1="Jacket"
        data7={
          <Image
            alt="adf"
            src="/filter.png"
            width="16px !important"
            height="16px !important"
          ></Image>
        }
      />
      <Option
        title1="Options"
        title2="One Column"
        title3="Static Header"
        title4="Secondary Header"
      />
      <TableContainer>
        <Table aria-label="collapsible table">
          <TableBody>
            <TableRow>
              <TableCell sx={{ color: "#c15d07" }}>
                Sizes Based On Your Measurements
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <TableComponent
        heading1={<div style={{ color: "grey" }}>Area</div>}
        heading7={<div style={{ color: "grey" }}>Adjust</div>}
        data1="Jacket"
        data7={<MoreVertIcon />}
      />
    </div>
  );
};

export default Page2;
