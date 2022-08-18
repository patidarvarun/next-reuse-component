import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";

function createData(monthName = "string", datee = "number") {
  return { monthName, datee };
}

const rows = [
  createData("Jul", 23),
  createData("Jul", 23),
  createData("Jul", 23),
  createData("Jul", 23),
  createData("Jul", 23),
  createData("Jul", 23),
  createData("Jul", 23),
];
export default function TableComponent(props) {
  return (
    <div style={{ padding: "22px" }}>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "600" }} align="left">
                {props.heading1}
              </TableCell>
              <TableCell
                sx={{ fontWeight: "600", textAlign: "left" }}
                align="right"
              >
                {props.heading2}
              </TableCell>
              <TableCell sx={{ fontWeight: "600", textAlign: "left" }}>
                {props.heading3}
              </TableCell>
              <TableCell sx={{ fontWeight: "600", textAlign: "left" }}>
                {props.heading4}
              </TableCell>
              <TableCell sx={{ fontWeight: "600", textAlign: "left" }}>
                {props.heading5}
              </TableCell>
              <TableCell sx={{ fontWeight: "600", textAlign: "left" }}>
                {props.heading6}
              </TableCell>
              <TableCell sx={{ fontWeight: "600", textAlign: "center" }}>
                {props.heading7}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.monthName}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                }}
              >
                <TableCell sx={{ fontWeight: "600" }}>{props.data1}</TableCell>
                <TableCell>{props.data2}</TableCell>
                <TableCell>{props.data3}</TableCell>
                <TableCell>{props.data4}</TableCell>
                <TableCell>{props.data5}</TableCell>
                <TableCell>{props.data6}</TableCell>
                <TableCell align="right" sx={{ color: "#b9b5b5" }}>
                  {props.data7}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
