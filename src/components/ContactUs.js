import { useTheme } from "@emotion/react";
// import useMediaQuery from "@mui/material/useMediaQuery";
import Grid from "@mui/material/Grid";
import { TextField, Typography, Button, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";

import background from "../assets/background.jpg";
import mobileBackground from "../assets/mobileBackground.jpg";
import phoneIcon from "../assets/phone.svg";
import emailIcon from "../assets/email.svg";
import RightArrow from "./ui/RightArrow";
import airplane from "../assets/send.svg";
import { useCallback, useEffect, useState } from "react";
const ContactUs = () => {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("lg"));

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);
  const [emailHelper, setEmailHelper] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneHelper, setPhoneHelper] = useState("");
  const [phoneTouched, setPhoneTouched] = useState(false);
  const [message, setMessage] = useState("");

  const onChange = useCallback(
    (event) => {
      let valid;
      switch (event.target.id) {
        case "email":
          setEmail(event.target.value);
          if (emailTouched) {
            valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
              event.target.value
            );
            if (!valid) {
              setEmailHelper("Invalid email");
            } else {
              setEmailHelper("");
            }
          }
          break;
        case "phone":
          setPhone(event.target.value);
          if (phoneTouched) {
            valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(
              event.target.value
            );
            if (!valid) {
              setPhoneHelper("Invalid phone number");
            } else {
              setPhoneHelper("");
            }
          }
          break;
        default:
          break;
      }
    },
    [emailTouched, phoneTouched]
  );
  useEffect(() => {
    if (emailTouched) onChange(emailTouched);
    if (phoneTouched) onChange(phoneTouched);
  }, [emailTouched, phoneTouched, onChange]);
  return (
    <Grid container direction="row" sx={{ marginTop: "-2em" }}>
      <Grid
        item
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        // md={4}
        lg={4}
        xl={3}
        sx={{
          marginTop: matchesSM ? "3em" : matchesMD ? "5em" : 0,
          marginBottom: matchesMD ? "5em" : 0,
        }}
        data-aos={matchesMD ? "fade-up" : "fade-right"}
      >
        <Grid item>
          <Grid item container direction="column">
            <Grid item sx={{ textAlign: matchesMD ? "center" : "inherit" }}>
              <Typography variant="h4" sx={{ lineHeight: 1 }}>
                Contact Us
              </Typography>
              <Typography
                variant="body1"
                sx={{ color: theme.palette.common.blue }}
              >
                We're waiting.
              </Typography>
            </Grid>
            <Grid item container alignItems="center" sx={{ marginTop: "2em" }}>
              <Grid item>
                <img
                  src={phoneIcon}
                  alt="phone"
                  style={{ marginRight: ".5em" }}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  href="tel:555555555"
                  component="a"
                  sx={{
                    color: theme.palette.common.blue,
                    fontSize: "1rem",
                    textDecoration: "none",
                  }}
                >
                  (555)-555-555
                </Typography>
              </Grid>
            </Grid>
            <Grid container alignItems="center" sx={{ marginBottom: "2em" }}>
              <Grid item>
                <img
                  src={emailIcon}
                  alt="email "
                  style={{ marginRight: ".5em" }}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  component="a"
                  href="mailto:artdev@gmail.com"
                  sx={{
                    color: theme.palette.common.blue,
                    fontSize: "1rem",
                    textDecoration: "none",
                  }}
                >
                  artdev@gmail.com
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              container
              direction="column"
              style={{ maxWidth: "20em" }}
            >
              <Grid item sx={{ marginBottom: ".5em" }}>
                <TextField
                  variant="standard"
                  label="Name"
                  id="name"
                  fullWidth
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </Grid>
              <Grid item sx={{ marginBottom: ".5em" }}>
                <TextField
                  variant="standard"
                  label="Email"
                  id="email"
                  helperText={emailHelper}
                  error={emailHelper !== ""}
                  fullWidth
                  value={email}
                  onChange={onChange}
                  onBlur={setEmailTouched}
                />
              </Grid>
              <Grid item sx={{ marginBottom: ".5em" }}>
                <TextField
                  variant="standard"
                  label="Phone"
                  id="phone"
                  fullWidth
                  value={phone}
                  onChange={onChange}
                  onBlur={setPhoneTouched}
                  error={phoneHelper.length !== 0}
                />
              </Grid>
            </Grid>
            <Grid item style={{ maxWidth: "20em", marginTop: "5em" }}>
              <TextField
                variant="standard"
                multiline
                rows={10}
                value={message}
                id={message}
                onChange={(event) => setMessage(event.target.value)}
              />
            </Grid>
            <Grid item container justifyContent="center">
              <Button
                variant="contained"
                disabled={
                  name.length === 0 ||
                  message.length === 0 ||
                  emailHelper.length !== 0 ||
                  phoneHelper.length !== 0
                }
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
                  marginTop: "2em",
                }}
              >
                Send Message{" "}
                <img
                  src={airplane}
                  alt="paper airplane"
                  style={{ marginLeft: "1em" }}
                />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        item
        container
        alignItems="center"
        justifyContent={matchesSM ? "center" : "space-around"}
        // md={8}
        lg={8}
        xl={9}
        sx={{
          backgroundImage: `url(${background})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "60em",
          [theme.breakpoints.down("md")]: {
            backgroundImage: `url(${mobileBackground})`,
          },
        }}
        data-aos="fade-zoom-in"
      >
        <Grid
          item
          sx={{
            color: theme.palette.primary.main,
            textAlign: matchesSM ? "center" : "inherit",
          }}
          data-aos="fade-left"
          data-aos-delay="100"
        >
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
              component={Link}
              to="/revolution"
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
        <Grid item data-aos="zoom-in">
          <Button
            variant="contained"
            component={Link}
            to="/estimate"
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
              marginTop: "2em",
            }}
          >
            Free extimate
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ContactUs;
