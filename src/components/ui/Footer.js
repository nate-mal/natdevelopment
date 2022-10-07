import footerAdornment from "../../assets/Footer Adornment.svg";

import { useTheme } from "@emotion/react";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";

const Footer = ({ options }) => {
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
      <Grid
        container
        justifyContent="center"
        sx={{ position: "absolute", color: "#fff" }}
      >
        {options.map((option) => {
          if (option.subs) {
            <Grid item>
              <Grid container direction="column" spacing={2}>
                {option.subs.map((sub) => {
                  return <Grid item>{sub.name}</Grid>;
                })}
              </Grid>
            </Grid>;
          } else return <Grid item>{option.name}</Grid>;
        })}
      </Grid>
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
    </Box>
  );
};

export default Footer;
