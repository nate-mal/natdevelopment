import footerAdornment from "../../assets/Footer Adornment.svg";
import facebookIcon from "../../assets/facebook.svg";
import instagramIcon from "../../assets/instagram.svg";
import twitterIcon from "../../assets/twitter.svg";
import { useTheme } from "@emotion/react";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import Hidden from "@mui/material/Hidden";
const Footer = ({ options, value, setValue, subValue, setSubValue }) => {
  const defaultTheme = useTheme();
  return (
    <Box
      component="footer"
      sx={(theme) => {
        return {
          backgroundColor: theme.palette.primary.main,
          marginTop: "auto",
          zIndex: defaultTheme.zIndex.appBar,
          position: "relative",
        };
      }}
    >
      <Hidden mdDown>
        <Grid
          container
          justifyContent="center"
          sx={{
            position: "absolute",
          }}
        >
          {options.map((option, index) => {
            const createItem = (name, link) => {
              return (
                <Grid
                  component={Link}
                  to={link}
                  item
                  key={link}
                  sx={{
                    textDecoration: "none",
                    color: "#fff",
                  }}
                  onClick={() => {
                    setValue(index);
                    setSubValue(link);
                  }}
                >
                  {name}
                </Grid>
              );
            };
            return (
              <Grid item key={index} sx={{ margin: "3rem" }}>
                <Grid container direction="column" spacing={2}>
                  {option.subs &&
                    option.subs.map((sub) => {
                      return createItem(sub.name, sub.link);
                    })}
                  {!option.subs && createItem(option.name, option.link)}
                </Grid>
              </Grid>
            );
          })}
        </Grid>
      </Hidden>
      <Box
        component="img"
        src={footerAdornment}
        sx={{
          width: "25rem",
          [defaultTheme.breakpoints.down("md")]: { width: "20rem" },
          [defaultTheme.breakpoints.down("sm")]: { width: "10rem" },
          verticalAlign: "bottom",
        }}
      />
      <Grid
        container
        spacing={2}
        sx={{
          position: "absolute",
          marginTop: "-5em",
          justifyContent: "flex-end",
          right: "1.5em",
          img: {
            width: "3em",
            height: "3rem",
            [defaultTheme.breakpoints.down("md")]: {
              width: "2rem",
              height: "2rem",
            },
          },
        }}
      >
        <Grid
          item
          component="a"
          href="https://www.facebook.com"
          rel="noopener norefferer"
          target="_blank"
        >
          <img alt="facebook-icon" src={facebookIcon} />
        </Grid>
        <Grid
          item
          component="a"
          href="https://www.instagram.com"
          rel="noopener norefferer"
          target="_blank"
        >
          <img alt="instagram-icon" src={instagramIcon} />
        </Grid>
        <Grid
          item
          component="a"
          href="https://www.twitter.com"
          rel="noopener norefferer"
          target="_blank"
        >
          <img alt="twitter-icon" src={twitterIcon} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
