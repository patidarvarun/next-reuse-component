import React, { Component } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";
import TuneIcon from "@mui/icons-material/Tune";
import TaskIcon from "@mui/icons-material/Task";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import RefreshIcon from "@mui/icons-material/Refresh";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

function createData(name, icons) {
  return { name, icons };
}
const ProductDetailBlock = (props) => {
  const rows = [
    createData("Customize This", <CreateIcon style={{ color: "grey" }} />),
    createData("Product Details", <TuneIcon style={{ color: "grey" }} />),
    createData("Buy Later", <TaskIcon style={{ color: "grey" }} />),
    createData(
      "Shipping & Returns",
      <CheckBoxIcon style={{ color: "grey" }} />
    ),
    createData("Product Care", <RefreshIcon style={{ color: "grey" }} />),
    createData("Get Help", <DeleteOutlineIcon style={{ color: "grey" }} />),
  ];
  return (
    <div>
      <Box sx={{ width: "25%", margin: "0 auto" }}>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell onClick={props.handleIconClick}>
                    {row.icons}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  );
};

export default ProductDetailBlock;
