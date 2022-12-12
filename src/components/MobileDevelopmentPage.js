import React from "react";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import { useTheme } from "@emotion/react";
import useMediaQuery from "@mui/material/useMediaQuery";
import Grid from "@mui/material/Grid";
import { IconButton, Typography } from "@mui/material";

import backArrow from "../assets/backArrow.svg";
import forwardArrow from "../assets/forwardArrow.svg";
import swiss from "../assets/swissKnife.svg";
import access from "../assets/extendAccess.svg";
import engagement from "../assets/increaseEngagement.svg";
import CallToAction from "./ui/CallToAction";
import integrationAnimationData from "../animations/integrationAnimation/data";

const MobileDevelopmentPage = () => {
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
          data-aos="fade-up"
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
                to="/customsoftware"
                style={{ backgroundColor: "transparent" }}
              >
                <img
                  src={backArrow}
                  alt="Back to Custom Software Development Page"
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
                iOS/Android App Development
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2" paragraph>
                Mobile apps allow you to take your tools on the go.
              </Typography>
              <Typography variant="body2" paragraph>
                Whether you want an app for your customers, employees, or
                yourself, we can build cross-platform native solutions for any
                part of your business process. This opens you up to a whole new
                world of possibilities by taking advantage of phone features
                like the camera, GPS, push notifications, and more.
              </Typography>
              <Typography variant="body2" paragraph>
                Convenience. Connection.
              </Typography>
            </Grid>
          </Grid>
          {!matchesMd && (
            <Grid item className="arrowContainer" sx={{ marginLeft: "auto" }}>
              <IconButton
                component={Link}
                to="/websites"
                style={{ backgroundColor: "transparent" }}
              >
                <img
                  src={forwardArrow}
                  alt="Forward to Websites Development page"
                />
              </IconButton>
            </Grid>
          )}
        </Grid>

        {/* Integration animation */}
        <Grid item container sx={{ marginTop: "5em" }}>
          <Grid data-aos="fade-up" item container md>
            <Grid item container direction="column" md>
              <Grid item>
                <Typography
                  variant="h4"
                  component="h2"
                  sx={{ fontSize: "1.5em", marginBottom: "1em" }}
                >
                  Integration
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" paragraph>
                  Our technology enables an innate interconnection between web
                  and mobile applications, putting everything you need right in
                  one convenient place.
                </Typography>
                <Typography variant="body2" paragraph>
                  This allows you to extend your reach, reinvent interactions,
                  and develop a stronger relationship with your users than ever
                  before.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid data-aos="fade-up" item container md justifyContent="center">
            <Grid item>
              <Lottie
                animationData={integrationAnimationData}
                loop={true}
                rendererSettings={{ perserveAspectRatio: "XMidYMid slice" }}
                style={{ minHeight: 250, maxHeight: 275, maxWidth: 275 }}
              ></Lottie>
            </Grid>
          </Grid>
          <Grid data-aos="fade-up" item container md>
            <Grid
              item
              container
              direction="column"
              md
              sx={{
                textAlign: matchesSm ? "inherit" : "right",
                marginTop: matchesMd ? "10em" : 0,
              }}
            >
              <Grid item>
                <Typography
                  variant="h4"
                  component="h2"
                  sx={{ fontSize: "1.5em", marginBottom: "1em" }}
                >
                  Simultaneous Platform Support
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" paragraph>
                  Our cutting-edge development process allows us to create apps
                  for iPhone, Android, and tablets — all at the same time.
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" paragraph>
                  This significantly reduces costs and creates a more unified
                  brand experience across all devices.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          item
          container
          alignItems="flex-start"
          sx={{ marginTop: "15em", textAlign: "center" }}
        >
          <Grid data-aos="fade-up" item md container direction="column">
            <Grid item>
              <Typography
                variant="h4"
                component="h2"
                sx={{ fontSize: "1.5em", marginBottom: "1em" }}
              >
                Extend Functionality
              </Typography>
            </Grid>
            <Grid item container justifyContent="center">
              <img src={swiss} alt="swiss army knife" />
            </Grid>
          </Grid>

          <Grid
            data-aos="fade-up"
            item
            md
            container
            direction="column"
            sx={{ marginTop: matchesSm ? "5em" : 0 }}
          >
            <Grid item>
              <Typography
                variant="h4"
                component="h2"
                sx={{ fontSize: "1.5em", marginBottom: "1em" }}
              >
                Extend Access
              </Typography>
            </Grid>
            <Grid item>
              <img width="300px" src={access} alt="tear one off" />
            </Grid>
          </Grid>
          <Grid
            data-aos="fade-up"
            item
            md
            container
            direction="column"
            sx={{ marginTop: matchesSm ? "5em" : 0 }}
          >
            <Grid item>
              <Typography
                variant="h4"
                component="h2"
                sx={{ fontSize: "1.5em", marginBottom: "1em" }}
              >
                Increase Engagement
              </Typography>
            </Grid>
            <Grid item>
              <img src={engagement} alt="swiss army knife" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <CallToAction />
    </>
  );
};
export default MobileDevelopmentPage;
