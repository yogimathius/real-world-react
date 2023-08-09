import * as React from "react";
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";
import { MenuIcon } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <div></div>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Link to="/">
            <Button sx={{ margin: "5px" }} variant="contained">
              Home
            </Button>
          </Link>
          <Link to="/about">
            <Button sx={{ margin: "5px" }} variant="contained">
              About
            </Button>
          </Link>
          <Link to="/products">
            <Button sx={{ margin: "5px" }} variant="contained">
              Products
            </Button>
          </Link>
          <Link to="/references">
            <Button sx={{ margin: "5px" }} variant="contained">
              References
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
