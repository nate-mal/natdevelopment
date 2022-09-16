import React, { useEffect } from "react";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import logo from "../../assets/logo.svg";
const Header = (props) => {
  const tabsStyle = (theme) => {
    return {
      ...theme.typography.tab,
      minWidth: 10,
      marginLeft: "25px",
    };
  };
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    if (window.location.pathname === "/" && value !== 0) setValue(0);
    else if (window.location.pathname === "/services" && value !== 1)
      setValue(1);
    else if (window.location.pathname === "/revolution" && value !== 2)
      setValue(2);
    else if (window.location.pathname === "/about" && value !== 3) setValue(3);
    else if (window.location.pathname === "/contact" && value !== 4)
      setValue(4);
  }, [value]);
  const services = [
    { name: "Custom Software Development", link: "/customsoftware" },
    { name: "Mobile App Development", link: "/mobileapps" },
    { name: "Website Development", link: "/websites" },
  ];

  return (
    <>
      <AppBar position="fixed">
        <Toolbar disableGutters>
          <Button
            component={Link}
            to="/"
            sx={{ padding: 0 }}
            onClick={() => setValue(0)}
            disableRipple
          >
            <Box
              component="img"
              alt="company logo"
              src={logo}
              sx={{ height: "6rem" }}
            />
          </Button>
          <Tabs
            value={value}
            onChange={(e, value) => {
              setValue(value);
            }}
            sx={{
              marginLeft: "auto",
              "&& .Mui-selected": {
                // && are used to increase the specificity
                color: "#fff",
              },
            }}
          >
            <Tab component={Link} to="/" sx={tabsStyle} label="Home" />
            <Tab
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onMouseEnter={handleMenuOpen}
              onClick={handleMenuOpen}
              component={Link}
              to="/services"
              sx={tabsStyle}
              label="Services"
            />

            <Tab
              component={Link}
              to="/revolution"
              sx={tabsStyle}
              label="The Revolution"
            />
            <Tab component={Link} to="/about" sx={tabsStyle} label="About Us" />
            <Tab
              component={Link}
              to="/contact"
              sx={tabsStyle}
              label="Contact Us"
            />
          </Tabs>
          <Button
            variant="contained"
            color="secondary"
            sx={(theme) => {
              return {
                ...theme.typography.estimate,
                borderRadius: "50px",
                marginLeft: "50px",
                marginRight: "50px",
                color: "white",
              };
            }}
          >
            Free Estimate
          </Button>
        </Toolbar>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleMenuClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
            onMouseLeave: handleMenuClose,
          }}
        >
          {services.map((option, index) => (
            <MenuItem
              component={Link}
              to={option.link}
              key={index}
              onClick={handleMenuClose}
            >
              {option.name}
            </MenuItem>
          ))}
        </Menu>
      </AppBar>
      <Box
        sx={(theme) => ({ ...theme.mixins.toolbar, marginBottom: "3rem" })}
      />
    </>
  );
};

export default Header;
