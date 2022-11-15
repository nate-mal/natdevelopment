import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import RightArrow from "./RightArrow";
import { useTheme } from "@emotion/react";
import theme1 from "../../themes/theme1";
import { Box } from "@mui/system";
import background from "../../assets/background.jpg";
import mobileBackground from "../../assets/mobileBackground.jpg";
import useMediaQuery from "@mui/material/useMediaQuery";
const CallToAction = () => {
  const theme = useTheme(theme1);
  const defaultTheme = useTheme();
  const matchesSM = useMediaQuery(defaultTheme.breakpoints.down("md"));
  return (
    <Grid container sx={{ height: "60em" }}>
      <Grid item>
        <Grid
          container
          direction={matchesSM ? "column" : "row"}
          sx={{
            position: "absolute",
            justifyContent: matchesSM ? "center" : "space-around",
            alignItems: "center",
            height: "100%",
            width: "100%",
            textAlign: matchesSM ? "center" : "inherit",
          }}
        >
          <Grid item sx={{ color: theme.palette.primary.main }}>
            <Typography variant="h2">
              Simple software.
              <br /> Revolutionary Results.
            </Typography>
            <Typography variant="subtitle1" sx={{ color: "white" }}>
              Take advantage of the 21st century
            </Typography>
            <Grid item>
              <Button
                variant="outlined"
                sx={(theme) => ({
                  ...theme.typography.learnMore,
                  height: "45px",
                })}
              >
                <span style={{ marginRight: 5 }}>Learn More</span>
                <RightArrow
                  width={20}
                  height={15}
                  fill={theme.palette.primary.main}
                />
              </Button>
            </Grid>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              sx={{
                ...theme.typography.estimate,
                borderRadius: 50,
                hieght: 80,
                width: 205,
                backgroundColor: theme.palette.secondary.main,
                "&:hover": {
                  backgroundColor: theme.palette.secondary.light,
                },
                fontsize: "1.5rem",
                marginTop: matchesSM ? "3em" : 0,
              }}
            >
              Free extimate
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Box
        sx={{
          backgroundImage: `url(${background})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "100%",
          width: "100%",
          [defaultTheme.breakpoints.down("md")]: {
            backgroundImage: `url(${mobileBackground})`,
          },
        }}
      />
    </Grid>
  );
};
export default CallToAction;
