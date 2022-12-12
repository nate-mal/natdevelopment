import Lottie from "lottie-react";

import { Button, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import animationData from "../animations/landinganimation/data";
import { useTheme } from "@emotion/react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import RightArrow from "./ui/RightArrow";
import theme1 from "../themes/theme1";
import customSoftwareIcon from "../assets/Custom Software Icon.svg";
import mobileAppsIcon from "../assets/mobileIcon.svg";
import websitesIcon from "../assets/websiteIcon.svg";
import revolutionBackground from "../assets/repeatingBackground.svg";
import infoBackground from "../assets/infoBackground.svg";
import CallToAction from "./ui/CallToAction";

const LandingPage = ({ setValue, setSubValue: setService }) => {
  const theme = useTheme(theme1);
  const defaultTheme = useTheme();
  const matchesSM = useMediaQuery(defaultTheme.breakpoints.down("md"));
  const matchesXS = useMediaQuery(defaultTheme.breakpoints.down("sm"));
  return (
    <Grid container flexDirection="column">
      <Grid item>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          direction="row"
          data-aos="fade-up"
        >
          {/*-----Hero Section-----*/}
          <Grid sm item sx={{ margin: "2em" }}>
            <Typography
              component="h2"
              sx={(theme) => ({
                ...theme.typography.revTitle,
                marginBottom: "10px",
              })}
            >
              Bringing Technology and innovation
              <br /> closer to everyone
            </Typography>
            <Grid
              container
              justifyContent="center"
              sx={{
                minWidth: "280px",
                marginRight: "2em",
                [defaultTheme.breakpoints.down("sm")]: { marginRight: 0 },
              }}
            >
              <Grid item>
                <Button
                  variant="contained"
                  component={Link}
                  to="/estimate"
                  onClick={setValue.bind(5)}
                  sx={(theme) => {
                    return {
                      ...theme.typography.estimate,
                      backgroundColor: theme.palette.secondary.main,
                      "&:hover": {
                        backgroundColor: theme.palette.secondary.light,
                      },
                      borderRadius: "50px",
                      marginLeft: "10px",
                      marginRight: "15px",
                      marginBottom: matchesXS ? "15px" : 0,
                      color: "white",
                    };
                  }}
                >
                  Free Estimate
                </Button>
              </Grid>
              <Grid item>
                <Button
                  variant="outlined"
                  component={Link}
                  onClick={setValue.bind(1)}
                  to="/services"
                  sx={(theme) => ({
                    ...theme.typography.learnMore,
                    height: "45px",
                  })}
                >
                  <span style={{ marginRight: "5px" }}>Learn More</span>
                  <RightArrow
                    width={20}
                    height={15}
                    fill={theme.palette.primary.main}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid sm item>
            <Lottie
              animationData={animationData}
              loop={true}
              height={"100%"}
              width={"100%"}
              rendererSettings={{ perserveAspectRatio: "XMidYMid slice" }}
            ></Lottie>
          </Grid>
        </Grid>
      </Grid>
      {/*-----Services  Block-------------------------------------------------*/}

      <Grid
        item
        sx={{
          img: {
            marginLeft: "2em",
            [defaultTheme.breakpoints.down("sm")]: { marginLeft: 0 },
          },
        }}
        data-aos="fade-up"
      >
        {/*-----Custom Software Block-----*/}
        <Grid item sx={{ marginTop: "12em" }}>
          <Grid
            container
            direction="row"
            justifyContent={matchesSM ? "center" : undefined}
            data-aos="fade-up"
          >
            <Grid
              item
              sx={{
                marginLeft: matchesSM ? 0 : "5em",
                textAlign: matchesSM ? "center" : "none",
              }}
            >
              <Typography variant="h4">Custom Software Development</Typography>{" "}
              <Typography variant="subtitle1" sx={{ marginBottom: "1em" }}>
                Save Energy. Save Time. Save Money.
              </Typography>
              <Typography variant="subtitle1">
                Complete digital solution, from investigation to{" "}
                <span
                  style={{
                    color: theme.palette.common.orange,
                    fontFamily: "Pacifico",
                  }}
                >
                  celebration
                </span>
              </Typography>
              <Button
                variant="outlined"
                component={Link}
                onClick={() => {
                  setValue(1);
                  setService("/customsoftware");
                }}
                to="/customsoftware"
                sx={(theme) => ({ ...theme.typography.learnMore })}
              >
                <span style={{ marginRight: 10 }}>Learn More</span>
                <RightArrow
                  width={10}
                  height={10}
                  fill={theme.palette.common.blue}
                />
              </Button>
            </Grid>
            <Grid
              item
              sx={{
                marginLeft: "2em",
                marginTop: matchesSM ? "1em" : 0,
                [defaultTheme.breakpoints.down("sm")]: { marginLeft: 0 },
              }}
            >
              <img alt="custom sofware icon" src={customSoftwareIcon} />
            </Grid>
          </Grid>
        </Grid>
        {/*-----Mobile App develompent Block-----*/}
        <Grid item sx={{ marginTop: "12em" }} data-aos="fade-up">
          <Grid
            container
            direction="row"
            justifyContent={matchesSM ? "center" : "flex-end"}
          >
            <Grid
              item
              sx={{
                textAlign: matchesSM ? "center" : "none",
              }}
            >
              <Typography variant="h4">IOS/Androied App Development</Typography>{" "}
              <Typography variant="subtitle1" sx={{ marginBottom: "1em" }}>
                Extend FUnctionality. Extend Access. Increase Engagement.
              </Typography>
              <Typography variant="subtitle1">
                Integrate your web experience or create a standalone app
                {matchesSM ? null : <br />} with either mobile platform
              </Typography>
              <Button
                variant="outlined"
                component={Link}
                onClick={() => {
                  setValue(1);
                  setService("/mobileapps");
                }}
                to="/mobileapps"
                sx={(theme) => ({ ...theme.typography.learnMore })}
              >
                <span style={{ marginRight: 10 }}>Learn More</span>
                <RightArrow
                  width={10}
                  height={10}
                  fill={theme.palette.common.blue}
                />
              </Button>
            </Grid>
            <Grid
              item
              sx={{
                marginLeft: "2em",
                marginTop: matchesSM ? "1em" : 0,
                [defaultTheme.breakpoints.down("sm")]: { marginLeft: 0 },
              }}
            >
              <img
                style={{ marginRight: matchesSM ? 0 : "5em", width: "200px" }}
                alt="mobile app development icon"
                src={mobileAppsIcon}
              />
            </Grid>
          </Grid>
        </Grid>
        {/*-----Websites Development Block-----*/}
        <Grid item sx={{ marginTop: "12em" }} data-aos="fade-up">
          <Grid
            container
            direction="row"
            justifyContent={matchesSM ? "center" : undefined}
          >
            <Grid
              item
              sx={{
                marginLeft: matchesSM ? 0 : "5em",
                textAlign: matchesSM ? "center" : "none",
              }}
            >
              <Typography variant="h4">Website Development</Typography>{" "}
              <Typography variant="subtitle1" sx={{ marginBottom: "1em" }}>
                Reach More. Discover More. Sell More.
              </Typography>
              <Typography variant="subtitle1">
                Optimized for Search Engines, built for speed.{" "}
              </Typography>
              <Button
                variant="outlined"
                component={Link}
                onClick={() => {
                  setValue(1);
                  setService("/websites");
                }}
                to="/websites"
                sx={(theme) => ({ ...theme.typography.learnMore })}
              >
                <span style={{ marginRight: 10 }}>Learn More</span>
                <RightArrow
                  width={10}
                  height={10}
                  fill={theme.palette.common.blue}
                />
              </Button>
            </Grid>
            <Grid
              item
              sx={{
                marginLeft: "2em",
                marginTop: matchesSM ? "1em" : 0,
                [defaultTheme.breakpoints.down("sm")]: { marginLeft: 0 },
              }}
            >
              <img alt="websites development icon" src={websitesIcon} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* The Revolution Block */}
      <Grid item data-aos="fade-zoom-in">
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          sx={{ height: "100em", marginTop: "12em" }}
        >
          <Card
            sx={{
              position: "absolute",
              boxShadow: defaultTheme.shadows[20],
              borderRadius: 5,
              padding: "8em",
              [defaultTheme.breakpoints.down("md")]: {
                paddingTop: "8em",
                paddingBottom: "8em",
                paddingLeft: 0,
                paddingRight: 0,
                borderRadius: 0,
                width: "100%",
              },
            }}
          >
            <CardContent>
              <Grid
                container
                direction="column"
                sx={{ textAlign: "center" }}
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <Grid item>
                  <Typography variant="h3" gutterBottom>
                    The Revolution
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1">
                    Visionary insights coupled with cutting-edge technology is a
                    recepe for revolution.
                  </Typography>
                  <Button
                    variant="outlined"
                    component={Link}
                    onClick={setValue.bind(2)}
                    to="/revolution"
                    sx={(theme) => ({ ...theme.typography.learnMore })}
                  >
                    <span style={{ marginRight: 10 }}>Learn More</span>
                    <RightArrow
                      width={10}
                      height={10}
                      fill={theme.palette.common.blue}
                    />
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          <div
            style={{
              backgroundImage: `url(${revolutionBackground})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              height: "100%",
              width: "100%",
            }}
          ></div>
        </Grid>
      </Grid>
      {/* Information Block */}
      <Grid item data-aos="face-zoom-in">
        <Grid
          container
          style={{ height: "80em" }}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid
            item
            sx={{
              position: "absolute",
              width: "100%",
              textAlign: matchesXS ? "center" : "inherit",
            }}
          >
            <Grid
              container
              direction={matchesXS ? "column" : "row"}
              spacing={matchesXS ? 10 : 0}
            >
              <Grid
                item
                sm
                sx={{ marginLeft: matchesXS ? 0 : matchesSM ? "2em" : "5em" }}
              >
                <Grid
                  container
                  direction="column"
                  sx={{ color: "white" }}
                  data-aos="fade-right"
                >
                  <Typography variant="h2">About Us</Typography>
                  <Typography variant="subtitle2">
                    Let's get personal.
                  </Typography>
                  <Grid item>
                    <Button
                      variant="outlined"
                      component={Link}
                      to="/about"
                      sx={(theme) => ({
                        ...theme.typography.learnMore,
                        height: "45px",
                        color: "white",
                        borderColor: "white",
                      })}
                    >
                      <span style={{ marginRight: "5px" }}>Learn More</span>
                      <RightArrow width={20} height={15} fill={"white"} />
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                item
                sm
                sx={{
                  marginRight: matchesXS ? 0 : matchesSM ? "2em" : "5em",
                  textAlign: matchesXS ? "center" : "right",
                }}
              >
                <Grid
                  container
                  direction="column"
                  sx={{ color: "white" }}
                  data-aos="fade-left"
                >
                  <Typography variant="h2">Contact Us</Typography>
                  <Typography variant="subtitle2">
                    Say hello!
                    <span role="img" aria-label="waving-hand">
                      🙌
                    </span>
                  </Typography>
                  <Grid item>
                    <Button
                      variant="outlined"
                      component={Link}
                      to="/contact"
                      sx={(theme) => ({
                        ...theme.typography.learnMore,
                        height: "45px",
                        color: "white",
                        borderColor: "white",
                      })}
                    >
                      <span style={{ marginRight: "5px" }}>Learn More</span>
                      <RightArrow width={20} height={15} fill={"white"} />
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <div
            style={{
              backgroundImage: `url(${infoBackground})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              height: "100%",
              width: "100%",
            }}
          />
        </Grid>
      </Grid>
      <CallToAction />
    </Grid>
  );
};
export default LandingPage;
