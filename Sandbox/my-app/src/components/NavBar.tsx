import React from "react";
import { AppBar, Toolbar, Typography, Link, Box } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const NavBar: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          My App
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Link
            component={RouterLink}
            to="/"
            sx={{ color: "white", textDecoration: "none", cursor: "pointer" }}
          >
            Home
          </Link>
          <Link
            component={RouterLink}
            to="/posts"
            sx={{ color: "white", textDecoration: "none", cursor: "pointer" }}
          >
            Posts
          </Link>
          <Link
            component={RouterLink}
            to="/about"
            sx={{ color: "white", textDecoration: "none", cursor: "pointer" }}
          >
            About
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;