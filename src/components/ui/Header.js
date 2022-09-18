import logo from "../../assets/logo.svg";

import React, { useEffect, useMemo } from "react";
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
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import MenuIcon from "@mui/icons-material/Menu";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { IconButton, useMediaQuery } from "@mui/material";
import { useTheme } from "@emotion/react";
const Header = (props) => {
  const iOS =
    typeof navigator !== "undefined" &&
    /iPad|iPhone|iPod/.test(navigator.userAgent);

  const defaultTheme = useTheme();
  const matches = useMediaQuery(defaultTheme.breakpoints.down("md"));
  const [value, setValue] = useState(0);
  const [service, setService] = useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openDrawer, setOpenDrawer] = useState(false);
  const openMenu = Boolean(anchorEl);
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const services = useMemo(
    () => [
      { name: "Services", link: "/services", index: 0 },
      {
        name: "Custom Software Development",
        link: "/customsoftware",
        index: 1,
      },
      { name: "Mobile App Development", link: "/mobileapps", index: 2 },
      { name: "Website Development", link: "/websites", index: 3 },
    ],
    []
  );
  const tabsStyle = (theme) => {
    return {
      ...theme.typography.tab,
      minWidth: 7,
    };
  };
  const tabs = (
    <>
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
            opacity: 1,
          },
        }}
      >
        <Tab component={Link} to="/" sx={tabsStyle} label="Home" />
        <Tab
          id="basic-button"
          aria-controls={openMenu ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={openMenu ? "true" : undefined}
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
        <Tab component={Link} to="/contact" sx={tabsStyle} label="Contact Us" />
      </Tabs>
      <Button
        variant="contained"
        color="secondary"
        component={Link}
        to="/estimate"
        sx={(theme) => {
          return {
            ...theme.typography.estimate,
            borderRadius: "50px",
            marginLeft: "10px",
            marginRight: "15px",
            color: "white",
          };
        }}
      >
        Free Estimate
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleMenuClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
          onMouseLeave: handleMenuClose,
        }}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        sx={(theme) => {
          return {
            "& 	.MuiMenu-paper": {
              backgroundColor: theme.palette.common.blue,
            },
          };
        }}
        elevation={0}
      >
        {services.map((option, index) => (
          <MenuItem
            component={Link}
            to={option.link}
            key={index}
            onClick={() => {
              setValue(1);
              setService(option.link);
              handleMenuClose();
            }}
            sx={(theme) => {
              return option.link === service
                ? { ...theme.typography.tab, opacity: 1 }
                : { ...theme.typography.tab };
            }}
          >
            {option.name}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
  const drawer = (
    <>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        sx={(theme) => {
          return {
            "& .MuiPaper-root": { backgroundColor: theme.palette.common.blue },
          };
        }}
      >
        <List
          disablePadding
          sx={(theme) => {
            return {
              " & .MuiListItem-root": {
                ...theme.typography.tab,
                color: "white",
              },
              "&& .Mui-selected, & .MuiListItem-root:hover": {
                backgroundColor: theme.palette.primary.light,
              },
            };
          }}
        >
          <ListItem
            onClick={() => {
              setValue(0);
              setOpenDrawer(false);
            }}
            divider
            button
            component={Link}
            to="/"
            className={value === 0 ? " Mui-selected" : null}
          >
            <ListItemText disableTypography>Home</ListItemText>
          </ListItem>
          <ListItem
            onClick={() => {
              setValue(1);
              setOpenDrawer(false);
            }}
            divider
            button
            component={Link}
            to="/services"
            className={value === 1 ? "Mui-selected" : null}
          >
            <ListItemText disableTypography>Services</ListItemText>
          </ListItem>
          <ListItem
            onClick={() => {
              setValue(2);
              setOpenDrawer(false);
            }}
            divider
            button
            component={Link}
            to="/revolution"
            className={value === 2 ? "Mui-selected" : null}
          >
            <ListItemText disableTypography>The Revolution</ListItemText>
          </ListItem>
          <ListItem
            onClick={() => {
              setValue(3);
              setOpenDrawer(false);
            }}
            divider
            button
            component={Link}
            to="/about"
            className={value === 3 ? "Mui-selected" : null}
          >
            <ListItemText disableTypography>About Us</ListItemText>
          </ListItem>
          <ListItem
            onClick={() => {
              setValue(4);
              setOpenDrawer(false);
            }}
            divider
            button
            component={Link}
            to="/contact"
            className={value === 4 ? "Mui-selected" : null}
          >
            <ListItemText disableTypography>Contact Us</ListItemText>
          </ListItem>
          <ListItem
            onClick={() => {
              setValue(5);
              setOpenDrawer(false);
            }}
            divider
            button
            component={Link}
            to="/estimate"
            className={value === 5 ? "Mui-selected" : null}
            sx={(theme) => {
              return {
                backgroundColor: theme.palette.secondary.main,
                "&&:hover": { backgroundColor: theme.palette.secondary.main },
                "&&&.Mui-selected": {
                  backgroundColor: theme.palette.secondary.main,
                },
              };
            }}
          >
            <ListItemText disableTypography>Free Estimate</ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        sx={{ marginLeft: "auto", marginRight: "15px" }}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple
      >
        <MenuIcon sx={{ height: "50px", width: "50px" }} />
      </IconButton>
    </>
  );
  useEffect(() => {
    if (window.location.pathname === "/" && value !== 0) setValue(0);
    else if (
      services
        .map((service) => service.link)
        .includes(window.location.pathname) &&
      value !== 1
    ) {
      setValue(1);
      setService(window.location.pathname);
    } else if (window.location.pathname === "/revolution" && value !== 2)
      setValue(2);
    else if (window.location.pathname === "/about" && value !== 3) setValue(3);
    else if (window.location.pathname === "/contact" && value !== 4)
      setValue(4);
  }, [value, services]);

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
              sx={{
                [defaultTheme.breakpoints.down("md")]: {
                  height: "5em",
                },
                [defaultTheme.breakpoints.up("md")]: {
                  height: "5.5em",
                },
                [defaultTheme.breakpoints.up("lg")]: {
                  height: "6em",
                },
              }}
            />
          </Button>
          {matches ? drawer : tabs}
        </Toolbar>
      </AppBar>
      <Box
        sx={(theme) => ({
          ...theme.mixins.toolbar,
          [defaultTheme.breakpoints.up("md")]: { marginBottom: "2em" },
          [defaultTheme.breakpoints.down("md")]: { marginBottom: "1.5em" },
          [defaultTheme.breakpoints.down("sm")]: { marginBottom: "1em" },
        })}
      />
    </>
  );
};

export default Header;
