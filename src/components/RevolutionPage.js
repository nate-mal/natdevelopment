import React from "react";
import Lottie from "lottie-react";
import { useTheme } from "@emotion/react";
import useMediaQuery from "@mui/material/useMediaQuery";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

import vision from "../assets/vision.svg";
import technologyAnimaiton from "../animations/technologyAnimation/data";
import ProcessList from "./revolution/ProcessList";
import CallToAction from "./ui/CallToAction";
const RevolutionPage = () => {
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
        <Grid item data-aos="fade-up">
          <Typography
            variant="h2"
            sx={{
              ...theme.typography.revTitle,
              textAlign: matchesLg ? "center" : "inherit",
              marginLeft: matchesLg ? "none" : "2em",
              marginBottom: "1em",
            }}
          >
            The Revolution
          </Typography>
        </Grid>
        <Grid item container spacing={matchesMd ? 4 : 12}>
          <Grid data-aos="fade-up" item container justifyContent="center" lg>
            <img src={vision} width="100%" height="100%" alt="mountain " />
          </Grid>
          <Grid
            data-aos="fade-up"
            item
            lg
            sx={{ textAlign: matchesLg ? "inherit" : "right" }}
          >
            <Typography
              variant="h4"
              component="h2"
              sx={{
                fontSize: "1.5em",
                marginBottom: "0.5em",
                marginLeft: "2em",
              }}
            >
              Vision
            </Typography>
            <Typography variant="body2" paragraph>
              The rise of computers, and subsequently the Internet, has
              completely altered every aspect of human life. This has increased
              our comfort, broadened our connections, and reshaped how we view
              the world.
            </Typography>
            <Typography variant="body2" paragraph>
              What once was confined to huge rooms and teams of engineers now
              resides in every single one of our hands. Harnessing this
              unlimited potential by using it to solve problems and better lives
              is at the heart of everything we do.
            </Typography>
            <Typography variant="body2" paragraph>
              We want to help businesses capitalize on the latest and greatest
              technology. The best way to predict the future is to be the one
              building it, and we want to help guide the world into this next
              chapter of technological expansion, exploration, and innovation.
            </Typography>
            <Typography variant="body2" paragraph>
              By holding ourselves to rigorous standards and pristine quality,
              we can ensure you have the absolute best tools necessary to thrive
              in this new frontier.
            </Typography>
            <Typography variant="body2" paragraph>
              We see a future where every individual has personalized software
              custom tailored to their lifestyle, culture, and interests,
              helping them overcome life’s obstacles. Each project is a step
              towards that goal.
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          container
          spacing={matchesMd ? 4 : 12}
          flexWrap="wrap-reverse"
          sx={{ marginTop: "10em" }}
        >
          <Grid item lg data-aos="fade-up">
            <Typography
              variant="h4"
              component="h2"
              sx={{
                fontSize: "1.5em",
                marginBottom: "0.5em",
                marginLeft: ".5em",
              }}
            >
              Technology
            </Typography>
            <Typography variant="body2" paragraph>
              In 2013, Facebook invented a new way of building websites. This
              new system, React.js, completely revolutionizes the process and
              practice of website development.
            </Typography>
            <Typography variant="body2" paragraph>
              Instead of chaining together long individual pages, like
              traditional websites, React websites are built with little chunks
              of code called components. These components are faster, easier to
              maintain, and are easily reused and customized, each serving a
              singular purpose.
            </Typography>
            <Typography variant="body2" paragraph>
              Two years later they shocked the world by releasing a similar
              system, React Native, for producing iOS and Android apps. Instead
              of having to master two completely separate development platforms,
              you can leverage the knowledge you already possessed from building
              websites and reapply it directly! This was a huge leap forward.{" "}
            </Typography>
            <Typography variant="body2" paragraph>
              This technology is now being used by companies like AirBnB,
              Microsoft, Netflix, Pinterest, Skype, Tesla, UberEats, and when
              Facebook purchased Instagram large portions of it were even
              rebuilt using React.
            </Typography>
            <Typography variant="body2" paragraph>
              Developers have since built on top of these systems by automating
              project setup and deployment, allowing creators to focus as much
              as possible on their work itself.
            </Typography>
            <Typography variant="body2" paragraph>
              These technical advancements translate into savings by
              significantly reducing the workload and streamlining the workflow
              for developing new pieces of software, while also lowering the
              barrier to entry for mobile app development.
            </Typography>
            <Typography variant="body2" paragraph>
              This puts personalization in your pocket — faster, better, and
              more affordable than ever before.
            </Typography>
          </Grid>
          <Grid item lg data-aos="fade-up">
            <Lottie
              animationData={technologyAnimaiton}
              loop={true}
              rendererSettings={{ perserveAspectRatio: "XMidYMid slice" }}
              //   style={{ minHeight: 250, maxHeight: 275, maxWidth: 275 }}
              width="100%"
              height="100%"
            ></Lottie>
          </Grid>
        </Grid>
      </Grid>
      <ProcessList />
      <CallToAction />
    </>
  );
};

export default RevolutionPage;
