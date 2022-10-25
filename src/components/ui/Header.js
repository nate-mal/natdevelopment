import logo from "../../assets/logo.svg";
import AnimDrawerIcon from "./AnimDrawerIcon";

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
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { IconButton, useMediaQuery } from "@mui/material";
import { useTheme } from "@emotion/react";
import ListItemButton from "@mui/material/ListItemButton";
import Collapse from "@mui/material/Collapse";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ExpandLess from "@mui/icons-material/ExpandLess";

const Header = ({
  options,
  specialOption,
  value,
  setValue,
  subValue: service,
  setSubValue: setService,
}) => {
  const iOS =
    typeof navigator !== "undefined" &&
    /iPad|iPhone|iPod/.test(navigator.userAgent);

  const defaultTheme = useTheme();
  const matches = useMediaQuery(defaultTheme.breakpoints.down("md"));

  const [activeSubsIndex, setActiveSubsIndex] = useState(null);
  const [subs, setSubs] = useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openServiceCollapse, setOpenServiceCollapse] = useState(false);
  if (anchorEl) console.log(anchorEl.attributes.getNamedItem("href").value);
  const openMenu = Boolean(anchorEl);
  const handleMenuOpen = (event, subs) => {
    setSubs(subs);
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
    setSubs(null);
  };

  const estimate = specialOption
    ? {
        ...specialOption,
        index: options.length,
      }
    : undefined;
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
        {options.map((option, index) => {
          if (option.subs) {
            return (
              <Tab
                key={index}
                id={`${option.link}-tab`}
                aria-controls={openMenu ? `${option.link}-menu` : undefined}
                aria-haspopup="true"
                aria-expanded={openMenu ? "true" : undefined}
                onMouseEnter={(e) => handleMenuOpen(e, option.subs)}
                onClick={(e) => handleMenuOpen(e, option.subs)}
                component={Link}
                to={option.link}
                sx={tabsStyle}
                label={option.name}
              />
            );
          } else
            return (
              <Tab
                key={index}
                component={Link}
                to={option.link}
                sx={tabsStyle}
                label={option.name}
              />
            );
        })}
        {estimate && (
          <Tab
            // variant="contained"
            color="secondary"
            component={Link}
            to={estimate.link}
            onClick={() => setValue(estimate.index)}
            sx={(theme) => {
              return {
                ...theme.typography.estimate,
                backgroundColor: theme.palette.secondary.main,
                "&:hover": { backgroundColor: theme.palette.secondary.dark },
                borderRadius: "50px",
                marginLeft: "10px",
                marginRight: "15px",
                color: "white",
              };
            }}
            label={estimate.name}
          />
        )}
      </Tabs>

      {subs && (
        <Menu
          id={`${subs[0].link}-menu`}
          anchorEl={anchorEl}
          open={openMenu}
          onClose={handleMenuClose}
          MenuListProps={{
            "aria-labelledby": `${subs[0].link}-tab`,
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
          {subs.map((option, index) => (
            <MenuItem
              component={Link}
              to={option.link}
              key={index}
              onClick={() => {
                setValue(subs[0].index);
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
      )}
    </>
  );

  const drawer = (
    <>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        anchor="right"
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        sx={(theme) => {
          return {
            zIndex: defaultTheme.zIndex.appBar - 1,
            "& .MuiPaper-root": { backgroundColor: theme.palette.common.blue },
          };
        }}
      >
        <Box
          sx={(theme) => ({
            ...defaultTheme.mixins.toolbar,
            [defaultTheme.breakpoints.up("md")]: { marginBottom: "2em" },
            [defaultTheme.breakpoints.down("md")]: { marginBottom: "1.5em" },
            [defaultTheme.breakpoints.down("sm")]: { marginBottom: "1em" },
          })}
        />
        <List
          disablePadding
          sx={(theme) => {
            return {
              " & .MuiListItem-root, & .MuiButtonBase-root": {
                ...theme.typography.tab,
                color: "white",
              },
              "&& .Mui-selected, && .MuiListItem-root:hover,&& .MuiButtonBase-root:hover":
                {
                  backgroundColor: theme.palette.primary.light,
                },
            };
          }}
        >
          {options.map((option, optionIndex) => {
            if (option.subs) {
              return (
                <Box key={optionIndex}>
                  <ListItemButton
                    divider
                    onClick={() => {
                      setActiveSubsIndex((prev) => {
                        if (prev === optionIndex) return null;
                        return optionIndex;
                      });
                      setOpenServiceCollapse(!openServiceCollapse);
                    }}
                    className={value === optionIndex ? " Mui-selected" : null}
                  >
                    <ListItemText primary={option.name} />
                    {optionIndex === activeSubsIndex ? (
                      <ExpandLess />
                    ) : (
                      <ExpandMore />
                    )}
                  </ListItemButton>
                  <Collapse
                    in={optionIndex === activeSubsIndex}
                    timeout="auto"
                    unmountOnExit
                  >
                    <List component="div" disablePadding>
                      {option.subs.map((sub, index) => {
                        return (
                          <ListItemButton
                            divider
                            component={Link}
                            to={sub.link}
                            key={index}
                            onClick={() => {
                              setValue(optionIndex);
                              setService(sub.link);
                              setOpenServiceCollapse(!openServiceCollapse);
                              setOpenDrawer(false);
                            }}
                            className={
                              sub.link === service ? " Mui-selected" : null
                            }
                            sx={(theme) => {
                              return option.link === service
                                ? { ...theme.typography.tab, pl: 4, opacity: 1 }
                                : { ...theme.typography.tab, pl: 4 };
                            }}
                          >
                            <ListItemText primary={sub.name} />
                          </ListItemButton>
                        );
                      })}
                    </List>
                  </Collapse>
                </Box>
              );
            } else
              return (
                <ListItem
                  key={optionIndex}
                  onClick={() => {
                    setValue(optionIndex);
                    setService(null);
                    setOpenDrawer(false);
                    setOpenServiceCollapse(false);
                  }}
                  divider
                  button
                  component={Link}
                  to={option.link}
                  className={value === optionIndex ? " Mui-selected" : null}
                >
                  <ListItemText disableTypography>{option.name}</ListItemText>
                </ListItem>
              );
          })}
          {estimate && (
            <ListItem
              onClick={() => {
                setValue(estimate.index);
                setService(null);
                setOpenDrawer(false);
                setOpenServiceCollapse(false);
              }}
              divider
              button
              component={Link}
              to={estimate.link}
              className={value === estimate.index ? "Mui-selected" : null}
              sx={(theme) => {
                return {
                  backgroundColor: theme.palette.secondary.main,
                  "&&&:hover": {
                    backgroundColor: theme.palette.secondary.main,
                    opacity: 1,
                  },
                  "&&&.Mui-selected": {
                    backgroundColor: theme.palette.secondary.main,
                    opacity: 1,
                  },
                };
              }}
            >
              <ListItemText disableTypography>{estimate.name}</ListItemText>
            </ListItem>
          )}
        </List>
      </SwipeableDrawer>
      <IconButton
        sx={{
          marginLeft: "auto",
          marginRight: "15px",
          height: "50px",
          width: "50px",
        }}
        onClick={() => setOpenDrawer((prev) => !prev)}
        disableRipple
      >
        {/* {openDrawer ? (
          <CloseIcon sx={{ height: "50px", width: "50px" }} />
        ) : (
          <MenuIcon sx={{ height: "50px", width: "50px" }} />
        )} */}
        <AnimDrawerIcon open={openDrawer} mountIsSet={Boolean(value)} />
      </IconButton>
    </>
  );

  useEffect(() => {
    options.forEach((option, index) => {
      if (window.location.pathname === option.link && value !== index)
        setValue(index);

      if (option.subs) {
        option.subs.forEach((sub) => {
          if (
            window.location.pathname === sub.link &&
            (value !== index || service !== sub.link)
          ) {
            setValue(1);
            setService(window.location.pathname);
          }
        });
      }
    });
  }, [value, service, options, setService, setValue]);

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
          ...defaultTheme.mixins.toolbar,
          [defaultTheme.breakpoints.up("md")]: { marginBottom: "2em" },
          [defaultTheme.breakpoints.down("md")]: { marginBottom: "1.5em" },
          [defaultTheme.breakpoints.down("sm")]: { marginBottom: "1em" },
        })}
      />
    </>
  );
};

export default Header;
