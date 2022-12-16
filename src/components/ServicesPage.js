import { Button, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@emotion/react";
import Lottie from "lottie-react";

import RightArrow from "./ui/RightArrow";
import theme1 from "../themes/theme1";
import customSoftwareIcon from "../assets/Custom Software Icon.svg";
// import mobileAppsIcon from "../assets/mobileIcon.svg";
import websitesAnimationData from "../animations/websitesAnimation/data";
import mobileAnimationData from "../animations/mobileAnimation/data";
// import websitesIcon from "../assets/websiteIcon.svg";

const ServicesPage = ({ setValue, setSubValue: setService }) => {
  const theme = useTheme(theme1);
  const defaultTheme = useTheme();
  const matchesSM = useMediaQuery(defaultTheme.breakpoints.down("md"));
  // const matchesXS = useMediaQuery(defaultTheme.breakpoints.down("sm"));

  return (
    <Grid container direction="column">
      <Grid item>
        <Typography
          variant="h2"
          sx={{
            ...theme.typography.revTitle,
            textAlign: matchesSM ? "center" : "inherit",
            marginLeft: matchesSM ? "none" : "2em",
            marginBottom: matchesSM ? "2em" : "none",
          }}
        >
          Services
        </Typography>
      </Grid>
      <Grid
        item
        sx={{
          img: {
            marginLeft: "2em",
            [defaultTheme.breakpoints.down("sm")]: { marginLeft: 0 },
          },
        }}
      >
        {/*-----Mobile App develompent Block-----*/}
        <Grid
          item
          data-aos={matchesSM ? "fade-up" : "fade-left"}
          sx={{ marginTop: matchesSM ? "1em" : "5em" }}
        >
          <Grid
            container
            direction="row"
            justifyContent={matchesSM ? "center" : "flex-end"}
          >
            <Grid
              item
              sx={{
                textAlign: matchesSM ? "center" : "none",
                width: matchesSM ? "none" : "35em",
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
                width: "200px",
              }}
            >
              <Lottie
                animationData={mobileAnimationData}
                loop={true}
                height={"100%"}
                width={"100%"}
                rendererSettings={{ perserveAspectRatio: "XMidYMid slice" }}
              ></Lottie>
            </Grid>
          </Grid>
        </Grid>
        {/*-----Custom Software Block-----*/}
        <Grid
          item
          data-aos={matchesSM ? "fade-up" : "fade-right"}
          sx={{ marginTop: "12em" }}
        >
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

        {/*-----Websites Development Block-----*/}
        <Grid
          item
          data-aos={matchesSM ? "fade-up" : "fade-left"}
          sx={{ marginTop: "12em", marginBottom: "5em" }}
        >
          <Grid
            container
            direction="row"
            justifyContent={matchesSM ? "center" : "flex-end"}
          >
            <Grid
              item
              sx={{
                textAlign: matchesSM ? "center" : "none",
                width: matchesSM ? "none" : "35em",
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
                marginRight: matchesSM ? 0 : "5em",
                [defaultTheme.breakpoints.down("sm")]: { marginLeft: 0 },
                width: "200px",
              }}
            >
              <Lottie
                animationData={websitesAnimationData}
                loop={true}
                height={"100%"}
                width={"100%"}
                rendererSettings={{ perserveAspectRatio: "XMidYMid slice" }}
              ></Lottie>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ServicesPage;
