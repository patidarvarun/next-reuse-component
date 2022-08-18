import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";

function createData(
  monthName = "string",
  datee = "number",
  message1 = string,
  messageText = "string",
  price = "string",
  point = "string"
) {
  return { monthName, datee, message1, messageText, price, point };
}

const rows = [
  createData("Jul", 23, "Transfer", "from gift card", "+$2,000,00", "4 Points"),
  createData("Jul", 23, "Transfer", "from gift card", "+$2,000,00", "4 Points"),
  createData("Jul", 23, "Transfer", "from gift card", "+$2,000,00", "4 Points"),
  createData("Jul", 23, "Transfer", "from gift card", "+$2,000,00", "4 Points"),
  createData("Jul", 23, "Transfer", "from gift card", "+$2,000,00", "4 Points"),
];
export default function TransactionHistory() {
  return (
    <div style={{ padding: "22px" }}>
      <TableContainer
        component={Paper}
        sx={{
          border: " 1px solid skyblue",
          padding: "10px",
          maxWidth: "30%",
          margin: "0 auto",
          border: "1px solid #0d8af5",
        }}
      >
        <div>
          <Typography
            sx={{ flex: "1 1 100%" }}
            variant="caption"
            id="tableTitle"
            component="span"
          >
            All
          </Typography>
          <Typography
            sx={{ flex: "1 1 100%", ml: "3px" }}
            variant="caption"
            id="tableTitle"
            component="span"
          >
            Debits
          </Typography>
          <Typography
            sx={{ flex: "1 1 100%", ml: "3px" }}
            variant="caption"
            id="tableTitle"
            component="span"
          >
            Credit
          </Typography>
        </div>
        <Typography
          variant="h6"
          id="tableTitle"
          component="span"
          sx={{ background: "grey" }}
        >
          Latest Transaction
        </Typography>

        <div>
          <Table sx={{ maxWidth: 650 }} aria-label="simple table">
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.monthName}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>
                    {row.monthName}
                    <Typography variant="body1" sx={{ fontSize: "16px" }}>
                      {row.datee}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    {row.message1}
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{ fontSize: "13px" }}
                    >
                      {row.messageText}
                    </Typography>
                  </TableCell>
                  <TableCell align="right" sx={{ color: "green" }}>
                    {row.price}
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{ fontSize: "13px" }}
                    >
                      {row.point}
                    </Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </TableContainer>
    </div>
  );
}
