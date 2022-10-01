import footerAdornment from "../../assets/Footer Adornment.svg";

import { useTheme } from "@emotion/react";
import Box from "@mui/material/Box";

const Footer = () => {
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
