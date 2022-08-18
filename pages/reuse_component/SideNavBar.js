import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ButtonComponent from "./ButtonComponent";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Image from "next/image";
import TextField from "@mui/material/TextField";

export default function SideNavBar() {
  const handleChange = () => {
    window.location.replace("/");
  };
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={handleChange}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Good Afternoon
            </Typography>
            <ButtonComponent
              name="Sign In"
              color="white"
              type={"Submit"}
              // handleClick={handleSubmit}
            />
          </Toolbar>
        </AppBar>
      </Box>
      <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <nav aria-label="secondary mailbox folders">
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Account Page" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="#simple-list">
                <ListItemText primary="Grid List" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Form & Inputs" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="#simple-list">
                <ListItemText primary="Product Grid" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Cart" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component="a" href="#simple-list">
                <ListItemText primary="Checkout" />
              </ListItemButton>
            </ListItem>
          </List>
        </nav>
      </Box>
      <Image
        src="/navbarImage.png"
        width="400px"
        height="200px"
        alt="imagg"
      ></Image>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Summer Collection
      </Typography>
      <br />
      <Typography
        style={{ color: "grey" }}
        variant="body1"
        component="div"
        sx={{ flexGrow: 1 }}
      >
        Search
      </Typography>

      <TextField
        style={{
          borderBottom: "1px solid black !important",
          width: "23.5em !important",
          background: "none !important",
        }}
        id="filled-search"
        label="Search anything ...."
        type="search"
        variant="filled"
      />
    </div>
  );
}
