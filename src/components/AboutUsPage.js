import React from "react";
import { useTheme } from "@emotion/react";
import useMediaQuery from "@mui/material/useMediaQuery";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

import history from "../assets/history.svg";
import founder from "../assets/founder.jpg";
import CallToAction from "./ui/CallToAction";
import { Box } from "@mui/system";
const AboutUsPage = () => {
  const theme = useTheme();
  const matchesLg = useMediaQuery(theme.breakpoints.down("lg"));
  const matchesMd = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSm = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <Grid
        container
        direction="column"
        sx={{
          paddingLeft: matchesSm ? "1em" : matchesMd ? "5em" : "10em",
          paddingRight: matchesSm ? "1em" : matchesMd ? "5em" : "10em",
          paddingTop: "2em",
          paddingBottom: "10em",
        }}
      >
        <Grid item>
          <Typography
            variant="h2"
            sx={{
              ...theme.typography.revTitle,
              textAlign: matchesLg ? "center" : "inherit",
              marginLeft: matchesLg ? "none" : "2em",
              marginBottom: "1em",
            }}
          >
            About Us
          </Typography>
        </Grid>
        <Grid item container spacing={matchesMd ? 4 : 12}>
          <Grid item xs={matchesMd ? 12 : 8}>
            <Typography
              variant="h4"
              component="h2"
              sx={{
                fontSize: "1.5em",
                marginBottom: "0.5em",
                marginLeft: "2em",
              }}
            >
              History
            </Typography>
            <Typography variant="body2" paragraph>
              We’re the new kid on the block.
            </Typography>
            <Typography variant="body2" paragraph>
              Founded in 2019, we’re ready to get our hands on the world’s
              business problems.
            </Typography>
            <Typography variant="body2" paragraph>
              It all started with one question: Why aren’t all businesses using
              available technology? There are many different answers to that
              question: economic barriers, social barriers, educational
              barriers, and sometimes institutional barriers.
            </Typography>
            <Typography variant="body2" paragraph>
              We aim to be a powerful force in overcoming these obstacles.
              Recent developments in software engineering and computing power,
              compounded by the proliferation of smart phones, has opened up
              infinite worlds of possibility. Things that have always been done
              by hand can now be done digitally and automatically, and
              completely new methods of interaction are created daily. Taking
              full advantage of these advancements is the name of the game.
            </Typography>
            <Typography variant="body2" paragraph>
              All this change can be a lot to keep up with, and that’s where we
              come in.
            </Typography>
          </Grid>
          <Grid item container justifyContent="center" xs={matchesMd ? 12 : 4}>
            <img src={history} alt="history book " />
          </Grid>
        </Grid>
        <Grid
          item
          container
          justifyContent="center"
          sx={{
            marginTop: "10em",
            textAlign: "center",
          }}
        >
          <Grid item sx={{ p: { maxWidth: "500px" } }}>
            <Typography
              variant="h4"
              component="h2"
              sx={{
                fontSize: "1.5em",
                marginBottom: "0.5em",
                marginLeft: ".5em",
              }}
            >
              Team
            </Typography>
            <Typography variant="body2" paragraph>
              Rac Jay, Founder
            </Typography>
            <Box
              item
              sx={{
                img: {
                  width: "200px",
                  height: "200px",
                  verticalAlign: "middle",
                  borderRadius: "50%",
                  marginBottom: "2em",
                },
              }}
            >
              <img
                src={founder}
                alt="founder avatar"
                width="100px"
                height="100px"
              />
            </Box>
            <Typography variant="body2" paragraph>
              I taught myself basic coding from a library book in third grade,
              and ever since then my passion has solely been set on learning —
              learning about computers, learning mathematics and philosophy,
              studying design, always just learning.
            </Typography>
            <Typography variant="body2" paragraph>
              Now I’m ready to apply everything I’ve learned, and to help others
              with the intuition I have developed.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <CallToAction />
    </>
  );
};

export default AboutUsPage;
