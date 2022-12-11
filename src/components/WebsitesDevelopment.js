import React from "react";
// import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import { useTheme } from "@emotion/react";
import useMediaQuery from "@mui/material/useMediaQuery";
import Grid from "@mui/material/Grid";
import { IconButton, Typography } from "@mui/material";

import backArrow from "../assets/backArrow.svg";
import forwardArrow from "../assets/forwardArrow.svg";
import analytics from "../assets/analytics.svg";
import outreach from "../assets/outreach.svg";
import seo from "../assets/seo.svg";
import ecommerce from "../assets/ecommerce.svg";

import CallToAction from "./ui/CallToAction";

const WebsitesDevelopmentPage = () => {
  const theme = useTheme();
  const matchesMd = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSm = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Grid
        container
        direciton="column"
        sx={{
          paddingLeft: matchesSm ? "1em" : matchesMd ? "2em" : "5em",
          paddingRight: matchesSm ? "1em" : matchesMd ? "2em" : "5em",
          paddingTop: "2em",
          paddingBottom: "10em",
        }}
      >
        <Grid
          item
          container
          direction="row"
          sx={{
            marginRight: "1em",
            marginLeft: matchesSm ? 0 : matchesMd ? "-1em" : "-3.5em",
            "& .arrowContainer": {
              marginTop: "0.5em",
            },
          }}
        >
          {!matchesMd && (
            <Grid item className="arrowContainer">
              <IconButton
                component={Link}
                to="/mobileapps"
                style={{ backgroundColor: "transparent" }}
              >
                <img
                  src={backArrow}
                  alt="Back to Ios/Android Development Page"
                ></img>
              </IconButton>
            </Grid>
          )}
          <Grid item container direction="column" sx={{ maxWidth: "40em" }}>
            <Grid item>
              <Typography
                variant="h4"
                component="h2"
                sx={{ fontSize: "2em", marginBottom: "1em" }}
              >
                Website Development
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2" paragraph>
                Having a website is a necessity in today’s business world. They
                give you one central, public location to let people know who you
                are, what you do, and why you’re the best at it.
              </Typography>
              <Typography variant="body2" paragraph>
                From simply having your hours posted to having a full fledged
                online store, making yourself as accessible as possible to users
                online drives growth and enables you to reach new customers.
              </Typography>
            </Grid>
          </Grid>
          {!matchesMd && (
            <Grid item className="arrowContainer" sx={{ marginLeft: "auto" }}>
              <IconButton
                component={Link}
                to="/services"
                style={{ backgroundColor: "transparent" }}
              >
                <img src={forwardArrow} alt="Forward to Services  page" />
              </IconButton>
            </Grid>
          )}
        </Grid>
        <Grid item container direction="column">
          <Grid item container sx={{ marginTop: "15em" }}>
            <Grid
              item
              container
              xs={matchesMd ? 12 : 6}
              direction="row"
              alignItems="center"
            >
              <Grid item sm container direction="column">
                <Grid item>
                  <Typography
                    variant="h4"
                    component="h2"
                    sx={{
                      fontSize: "1.5em",
                      marginBottom: "0.5em",
                      marginLeft: "2em",
                    }}
                  >
                    Analytics
                  </Typography>
                </Grid>
                <Grid item alignSelf="flex-start">
                  <img src={analytics} alt="analytics chart" />
                </Grid>
              </Grid>
              <Grid item sm>
                <Typography variant="body2" paragraph>
                  Knowledge is power, and data is 21st Century gold. Analyzing
                  this data can reveal hidden patterns and trends in your
                  business, empowering you to make smarter decisions with
                  measurable effects.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            container
            justifyContent="flex-end"
            sx={{ marginTop: "15em" }}
          >
            <Grid
              item
              container
              xs={matchesMd ? 12 : 6}
              direction="row"
              alignItems="center"
            >
              <Grid item sm container direction="column">
                <Grid item>
                  <Typography
                    variant="h4"
                    component="h2"
                    sx={{
                      fontSize: "1.5em",
                      marginBottom: "0.5em",
                      marginLeft: "2em",
                    }}
                  >
                    E-Commerce
                  </Typography>
                </Grid>
                <Grid item alignSelf="center">
                  <img src={ecommerce} alt="analytics chart" />
                </Grid>
              </Grid>
              <Grid item sm>
                <Typography variant="body2" paragraph>
                  It’s no secret that people like to shop online.
                </Typography>
                <Typography variant="body2" paragraph>
                  In 2017 over $2.3 trillion was spent in e-commerce, and it’s
                  time for your slice of that pie.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item container sx={{ marginTop: "15em" }}>
            <Grid
              item
              container
              xs={matchesMd ? 12 : 6}
              direction="row"
              alignItems="center"
            >
              <Grid item sm container direction="column">
                <Grid item>
                  <Typography
                    variant="h4"
                    component="h2"
                    sx={{
                      fontSize: "1.5em",
                      marginBottom: "0.5em",
                      marginLeft: "2em",
                    }}
                  >
                    Outreach
                  </Typography>
                </Grid>
                <Grid item alignSelf="center">
                  <img src={outreach} alt="analytics chart" />
                </Grid>
              </Grid>
              <Grid item sm>
                <Typography variant="body2" paragraph>
                  Draw people in with a dazzling website. Showing off your
                  products online is a great way to help customers decide what’s
                  right for them before visiting in person.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            container
            justifyContent="flex-end"
            sx={{ marginTop: "15em" }}
          >
            <Grid item container xs={matchesMd ? 12 : 6} direction="row">
              <Grid item sm container direction="column">
                <Grid item>
                  <Typography
                    variant="h4"
                    component="h2"
                    sx={{
                      fontSize: "1.5em",
                      marginBottom: "0.5em",
                      textAlign: "left",
                    }}
                  >
                    Search Engine Optimization
                  </Typography>
                </Grid>
                <Grid
                  item
                  sm
                  container
                  justifyContent={matchesSm ? "center" : "none"}
                >
                  <Grid item alignSelf="center">
                    <img src={seo} alt="analytics chart" />
                  </Grid>
                  <Grid item sm>
                    <Typography variant="body2" paragraph>
                      How often have you ever been to the second page of Google
                      results?
                    </Typography>
                    <Typography variant="body2" paragraph>
                      If you’re like us, probably never.
                    </Typography>{" "}
                    <Typography variant="body2" paragraph>
                      Customers don’t go there either, so we make sure your
                      website is designed to end up on top.
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <CallToAction />
    </>
  );
};
export default WebsitesDevelopmentPage;
