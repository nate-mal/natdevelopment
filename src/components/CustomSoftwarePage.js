import React from "react";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import { useTheme } from "@emotion/react";
import useMediaQuery from "@mui/material/useMediaQuery";

import Grid from "@mui/material/Grid";
import { IconButton, Typography } from "@mui/material";

import backArrow from "../assets/backArrow.svg";
import forwardArrow from "../assets/forwardArrow.svg";
import lightbulb from "../assets/bulb.svg";
import cash from "../assets/cash.svg";
import stopwatch from "../assets/stopwatch.svg";
import documentsAnimationData from "../animations/documentsAnimation/data";
import automationAnimation from "../animations/automationAnimation/data";
import uxAnimation from "../animations/uxAnimation/data";
import rootsImage from "../assets/root.svg";
import CallToAction from "./ui/CallToAction";
const CustomSoftware = () => {
  const theme = useTheme();
  const matchesMd = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSm = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Grid
        container
        direction="column"
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
                to="/services"
                style={{ backgroundColor: "transparent" }}
              >
                <img src={backArrow} alt="Back to Services Page"></img>
              </IconButton>
            </Grid>
          )}
          <Grid
            data-aos="fade-up"
            item
            container
            direction="column"
            sx={{ maxWidth: "40em" }}
          >
            <Grid item>
              <Typography
                variant="h4"
                component="h2"
                sx={{ fontSize: "2em", marginBottom: "1em" }}
              >
                Custom Software Development
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2" paragraph>
                Whether we’re replacing old software or inventing new solutions,
                Arc Development is here to help your business tackle technology.
              </Typography>
              <Typography variant="body2" paragraph>
                Using regular commercial software leaves you with a lot of stuff
                you don’t need, without some of the stuff you do need, and
                ultimately controls the way you work. Without using any software
                at all you risk falling behind competitors and missing out on
                huge savings from increased efficiency.
              </Typography>
              <Typography variant="body2" paragraph>
                Our custom solutions are designed from the ground up with your
                needs, wants, and goals at the core. This collaborative process
                produces finely tuned software that is much more effective at
                improving your workflow and reducing costs than generalized
                options.
              </Typography>
              <Typography variant="body2" paragraph>
                We create exactly what you what, exactly how you want it.
              </Typography>
            </Grid>
          </Grid>
          {!matchesMd && (
            <Grid item className="arrowContainer" sx={{ marginLeft: "auto" }}>
              <IconButton
                component={Link}
                to="/mobileapps"
                style={{ backgroundColor: "transparent" }}
              >
                <img
                  src={forwardArrow}
                  alt="Forward to IOS/Android Development page"
                />
              </IconButton>
            </Grid>
          )}
        </Grid>
        <Grid
          item
          data-aos="fade-up"
          container
          direction="row"
          justify="center"
        >
          <Grid
            item
            container
            direction="column"
            sm
            alignItems="center"
            sx={{ maxWidth: "40em" }}
          >
            <Grid item>
              <Typography variant="h4">Save Energy</Typography>
            </Grid>
            <Grid item>
              <img src={lightbulb} alt="lightbulb" />
            </Grid>
          </Grid>
          <Grid
            item
            container
            direction="column"
            sm
            alignItems="center"
            sx={{ maxWidth: "40em" }}
          >
            <Grid item>
              <Typography variant="h4">Save Time</Typography>
            </Grid>
            <Grid item>
              <img src={stopwatch} alt="stopwatch icon" />
            </Grid>
          </Grid>
          <Grid
            item
            container
            direction="column"
            sm
            alignItems="center"
            sx={{ maxWidth: "40em" }}
          >
            <Grid item>
              <Typography variant="h4">Save Money</Typography>
            </Grid>
            <Grid item>
              <img src={cash} alt="cash icon" />
            </Grid>
          </Grid>
        </Grid>
        {/* Digital Documents & Data */}

        <Grid item container sx={{ maxWidth: "40em", marginTop: "5em" }}>
          <Grid item container md>
            <Grid item data-aos="fade-up" container direction="column" md>
              <Grid item>
                <Typography
                  variant="h4"
                  component="h2"
                  sx={{ fontSize: "1.5em", marginBottom: "1em" }}
                >
                  Digital Documents & Data
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" paragraph>
                  Reduce Errors. Reduce Waste. Reduce Costs.
                </Typography>
                <Typography variant="body2" paragraph>
                  Billions are spent annually on the purchasing, printing, and
                  distribution of paper. On top of the massive environmental
                  impact this has, it causes harm to your bottom line as well.
                </Typography>
                <Typography variant="body2" paragraph>
                  By utilizing digital forms and documents you can remove these
                  obsolete expenses, accelerate your communication, and help the
                  Earth. options.
                </Typography>
              </Grid>
            </Grid>
            <Grid data-aos="fade-up" item md alignSelf="flex-end">
              <Lottie
                animationData={documentsAnimationData}
                loop={true}
                rendererSettings={{ perserveAspectRatio: "XMidYMid slice" }}
                style={{ minHeight: 250, maxHeight: 275, maxWidth: 275 }}
              ></Lottie>
            </Grid>
          </Grid>
          <Grid item container md>
            <Grid item md></Grid>
            <Grid
              data-aos="fade-up"
              item
              container
              direction="column"
              md
              sx={{ textAlign: matchesSm ? "inherit" : "right" }}
            >
              <Grid item>
                <Typography
                  variant="h4"
                  component="h2"
                  sx={{ fontSize: "1.5em", marginBottom: "1em" }}
                >
                  Scale
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" paragraph>
                  Whether you’re a large brand, just getting started, or taking
                  off right now, our application architecture ensures pain-free
                  growth and reliability.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          data-aos="fade-up"
          container
          sx={{ marginTop: "10em" }}
          direction="column"
          alignContent="center"
          justifyContent="center"
        >
          <Grid item>
            <Grid item container justifyContent="center">
              <img
                src={rootsImage}
                alt="tree with the roots extending out"
                height="300em"
                width="300em"
              ></img>
            </Grid>
            <Grid
              item
              container
              direction="column"
              alignContent="center"
              sx={{ textAlign: "center", maxWidth: "40em" }}
            >
              <Grid item>
                <Typography
                  variant="h4"
                  component="h2"
                  sx={{
                    fontSize: "1.5em",
                    marginBottom: "1em",
                  }}
                >
                  Root-Cause Analysis
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" paragraph align="center">
                  Many problems are merely symptoms of larger, underlying
                  issues.
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" paragraph align="center">
                  We can help you thoroughly examine all areas of your business
                  to develop a holistic plan for the most effective
                  implementation of technology.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {/* Automation */}

        <Grid item container sx={{ maxWidth: "40em", marginTop: "5em" }}>
          <Grid data-aos="fade-up" item container md>
            <Grid item container direction="column" sm>
              <Grid item>
                <Typography
                  variant="h4"
                  component="h2"
                  sx={{ fontSize: "1.5em", marginBottom: "1em" }}
                >
                  Automation
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" paragraph>
                  Why waste time when you don’t have to?
                </Typography>
                <Typography variant="body2" paragraph>
                  We can help you identify processes with time or event based
                  actions which can now easily be automated.
                </Typography>
                <Typography variant="body2" paragraph>
                  Increasing efficiency increases profits, leaving you more time
                  to focus on your business, not busywork
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              container
              sm
              alignSelf="center"
              justifyContent="flex-end"
            >
              <Lottie
                animationData={automationAnimation}
                loop={true}
                rendererSettings={{ perserveAspectRatio: "XMidYMid slice" }}
                style={{ minHeight: 250, maxHeight: 275, maxWidth: 275 }}
              ></Lottie>
            </Grid>
          </Grid>
          <Grid
            data-aos="fade-up"
            item
            container
            md
            sx={{ flexWrap: "wrap-reverse" }}
          >
            <Grid
              item
              container
              sm
              justifyContent={
                matchesSm ? "center" : matchesMd ? "flex-start" : "flex-end"
              }
            >
              <Lottie
                animationData={uxAnimation}
                loop={true}
                rendererSettings={{ perserveAspectRatio: "XMidYMid slice" }}
                style={{ minHeight: 250, maxHeight: 275, maxWidth: 275 }}
              ></Lottie>
            </Grid>
            <Grid
              item
              container
              direction="column"
              sm
              sx={{ textAlign: matchesSm ? "inherit" : "right" }}
            >
              <Grid item>
                <Typography
                  variant="h4"
                  component="h2"
                  sx={{ fontSize: "1.5em", marginBottom: "1em" }}
                >
                  User Experience Design
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" paragraph>
                  A good design that isn’t usable isn’t a good design.
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" paragraph>
                  So why are so many pieces of software complicated, confusing,
                  and frustrating?
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" paragraph>
                  By prioritizing users and the real ways they interact with
                  technology we’re able to develop unique, personable
                  experiences that solve problems rather than create new ones.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <CallToAction />
    </>
  );
};

export default CustomSoftware;
