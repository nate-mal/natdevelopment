import React from "react";
import { useTheme } from "@emotion/react";
import useMediaQuery from "@mui/material/useMediaQuery";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const ProcessItem = ({ title, paragraphs, color, img }) => {
  const theme = useTheme();
  const matchesMd = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Grid
      item
      container
      direciton="row"
      sx={{ minHeight: "100vh", backgroundColor: color }}
    >
      <Grid
        item
        xs={matchesMd ? 12 : 4}
        sx={{
          paddingLeft: "4em",
          paddingRight: "1em",
          paddingTop: "5em",
          marginTop: "2em",
          paddingBottom: "10em",
          "& p": { color: "#fff" },
        }}
      >
        <Typography
          variant="h5"
          component="h5"
          sx={{
            marginBottom: "0.5em",
          }}
        >
          {title}
        </Typography>
        {paragraphs.map((p, index) => {
          return (
            <Typography key={index} variant="body2" paragraph>
              {p}
            </Typography>
          );
        })}
      </Grid>
      <Grid
        item
        container
        xs={matchesMd ? 12 : 8}
        justifyContent="center"
        alignItems="center"
        sx={{ padding: "1em" }}
      >
        <Grid item sx={{ maxWidth: "40em" }}>
          <img width="100%" src={img} alt={`${title} icon`} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProcessItem;
