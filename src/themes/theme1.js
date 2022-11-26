import { AppRegistration } from "@mui/icons-material";
import { createTheme } from "@mui/material/styles";
// import { purple, green } from "@mui/material/colors";

// const primaryColor = purple[900];
// const secondaryColor = green[500];

const artBlue = "#0B72B9";
const artOrange = "#FFBA60";
const artGrey = "#868686";
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
    revTitle: {
      fontWeight: 300,
      color: `${artBlue}`,
      lineHeight: 1.5,
      textAlign: "center",
      fontSize: "3rem",
    },

    h3: {
      fontFamily: "Pacifico",
      fontSize: "2.5rem",
      color: artBlue,
    },
    h4: {
      fontFamily: "Raleway",
      fontSize: "1.75rem",
      color: artBlue,
      fontWeight: 700,
    },
    subtitle1: { fontSize: "1.25rem", fontWeight: 300, color: artGrey },
    body2: { color: artGrey },
    tab: {
      fontFamily: "Raleway",
      textTransform: "none",
      fontWeight: 700,
      fontSize: "1rem",
      color: "#fff",
      opacity: 0.7,
      "&&:hover, &&.Mui-selected": {
        opacity: 1,
      },
    },
    estimate: {
      fontFamily: "Pacifico",
      textTransform: "none",
      height: "45px",
      color: "white",
    },
    learnMore: {
      fontFamily: "Roboto",
      textTransform: "none",
      borderRadius: "50px",
      marginLeft: "10px",
      marginRight: "15px",
    },
  },
});
export default theme;
