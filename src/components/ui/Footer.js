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
          img: { width: "3em", height: "3rem", marginRight: "10px" },
        }}
      >
        <Grid item component="img" src={facebookIcon} />
        <Grid item component="img" src={instagramIcon} />
        <Grid item component="img" src={twitterIcon} />
      </Grid>
    </Box>
  );
};

export default Footer;
