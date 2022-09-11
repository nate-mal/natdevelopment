import { createTheme } from "@mui/material/styles";
import { purple, green } from "@mui/material/colors";

const primaryColor = purple[900];
const secondaryColor = green[500];

const artBlue = "#0B72B9";
const artOrange = "#FFBA60";

const theme = createTheme({
  palette: {
    common: {
      blue: artBlue,
      orange: artOrange,
    },
    primary: {
      main: artBlue,
    },
    secondary: {
      main: artOrange,
    },
  },
  typography: {
    h3: {
      fontWeight: 300,
    },
    tab: {
      fontFamily: "Raleway",
      textTransform: "none",
      fontWeight: 700,
      fontSize: "1rem",
      color: "#d1d1d1",
      "&:hover": {
        color: "#fff",
      },
    },
    estimate: {
      fontFamily: "Pacifico",
      textTransform: "none",
      height: "45px",
      color: "white",
    },
  },
});
export default theme;
