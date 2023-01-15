import React, { useState, useEffect, useCallback } from "react";
import Lottie from "lottie-react";
import { cloneDeep } from "lodash";
import axios from "axios";
import { useTheme } from "@emotion/react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import {
  Dialog,
  DialogContent,
  TextField,
  useMediaQuery,
  Hidden,
  Snackbar,
  Alert,
  CircularProgress,
} from "@mui/material";

import check from "../assets/check.svg";
import send from "../assets/send.svg";
import software from "../assets/software.svg";
import mobile from "../assets/mobile.svg";
import website from "../assets/website.svg";
import backArrow from "../assets/backArrow.svg";
import forwardArrow from "../assets/forwardArrow.svg";
import backArrowDisabled from "../assets/backArrowDisabled.svg";
import forwardArrowDisabled from "../assets/forwardArrowDisabled.svg";
import camera from "../assets/camera.svg";
import upload from "../assets/upload.svg";
import person from "../assets/person.svg";
import persons from "../assets/persons.svg";
import people from "../assets/people.svg";
import info from "../assets/info.svg";
import bell from "../assets/bell.svg";
import users from "../assets/users.svg";
import iphone from "../assets/iphone.svg";
import gps from "../assets/gps.svg";
import customized from "../assets/customized.svg";
import data from "../assets/data.svg";
import android from "../assets/android.svg";
import globe from "../assets/globe.svg";
import biometrics from "../assets/biometrics.svg";

import estimateAnimation from "../animations/estimateAnimation/data";

const defaultQuestions = [
  {
    id: 1,
    title: "Which service are you interested in?",
    subtitle: null,
    active: true,
    options: [
      {
        id: 1,
        title: "Custom Software Development",
        subtitle: null,
        icon: software,
        iconAlt: "three floating screens",
        selected: false,
        cost: 0,
      },
      {
        id: 2,
        title: "iOS/Android App Development",
        subtitle: null,
        icon: mobile,
        iconAlt: "phones and tablet outline",
        selected: false,
        cost: 0,
      },
      {
        id: 3,
        title: "Website Development",
        subtitle: null,
        icon: website,
        iconAlt: "website outline",
        selected: false,
        cost: 0,
      },
    ],
  },
];
const softwareQuestions = [
  { ...defaultQuestions[0], active: false },
  {
    id: 2,
    title: "Which platforms do you need supported?",
    subtitle: "Select all that apply.",
    options: [
      {
        id: 1,
        title: "Web Application",
        subtitle: null,
        icon: website,
        iconAlt: "computer outline",
        selected: false,
        cost: 100,
      },
      {
        id: 2,
        title: "iOS Application",
        subtitle: null,
        icon: iphone,
        iconAlt: "outline of iphone",
        selected: false,
        cost: 100,
      },
      {
        id: 3,
        title: "Android Application",
        subtitle: null,
        icon: android,
        iconAlt: "outlines of android phone",
        selected: false,
        cost: 100,
      },
    ],
    active: true,
  },
  {
    id: 3,
    title: "Which features do you expect to use?",
    subtitle: "Select all that apply.",
    options: [
      {
        id: 1,
        title: "Photo/Video",
        subtitle: null,
        icon: camera,
        iconAlt: "camera outline",
        selected: false,
        cost: 25,
      },
      {
        id: 2,
        title: "GPS",
        subtitle: null,
        icon: gps,
        iconAlt: "gps pin",
        selected: false,
        cost: 25,
      },
      {
        id: 3,
        title: "File Transfer",
        subtitle: null,
        icon: upload,
        iconAlt: "outline of cloud with arrow pointing up",
        selected: false,
        cost: 25,
      },
    ],
    active: false,
  },
  {
    id: 4,
    title: "Which features do you expect to use?",
    subtitle: "Select all that apply.",
    options: [
      {
        id: 1,
        title: "Users/Authentication",
        subtitle: null,
        icon: users,
        iconAlt: "outline of a person with a plus sign",
        selected: false,
        cost: 25,
      },
      {
        id: 2,
        title: "Biometrics",
        subtitle: null,
        icon: biometrics,
        iconAlt: "fingerprint",
        selected: false,
        cost: 25,
      },
      {
        id: 3,
        title: "Push Notifications",
        subtitle: null,
        icon: bell,
        iconAlt: "outline of a bell",
        selected: false,
        cost: 25,
      },
    ],
    active: false,
  },
  {
    id: 5,
    title: "What type of custom features do you expect to need?",
    subtitle: "Select one.",
    options: [
      {
        id: 1,
        title: "Low Complexity",
        subtitle: "(Informational)",
        icon: info,
        iconAlt: "'i' inside a circle",
        selected: false,
        cost: 25,
      },
      {
        id: 2,
        title: "Medium Complexity",
        subtitle: "(Interactive, Customizable, Realtime)",
        icon: customized,
        iconAlt: "two toggle switches",
        selected: false,
        cost: 50,
      },
      {
        id: 3,
        title: "High Complexity",
        subtitle: "(Data Modeling and Computation)",
        icon: data,
        iconAlt: "outline of line graph",
        selected: false,
        cost: 100,
      },
    ],
    active: false,
  },
  {
    id: 6,
    title: "How many users do you expect?",
    subtitle: "Select one.",
    options: [
      {
        id: 1,
        title: "0-10",
        subtitle: null,
        icon: person,
        iconAlt: "person outline",
        selected: false,
        cost: 1,
      },
      {
        id: 2,
        title: "10-100",
        subtitle: null,
        icon: persons,
        iconAlt: "outline of two people",
        selected: false,
        cost: 1.25,
      },
      {
        id: 3,
        title: "100+",
        subtitle: null,
        icon: people,
        iconAlt: "outline of three people",
        selected: false,
        cost: 1.5,
      },
    ],
    active: false,
  },
];

const websiteQuestions = [
  { ...defaultQuestions[0], active: false },
  {
    id: 2,
    title: "Which type of website are you wanting?",
    subtitle: "Select one.",
    options: [
      {
        id: 1,
        title: "Basic",
        subtitle: "(Informational)",
        icon: info,
        iconAlt: "person outline",
        selected: false,
        cost: 100,
      },
      {
        id: 2,
        title: "Interactive",
        subtitle: "(Users, API's, Messaging)",
        icon: customized,
        iconAlt: "outline of two people",
        selected: false,
        cost: 200,
      },
      {
        id: 3,
        title: "E-Commerce",
        subtitle: "(Sales)",
        icon: globe,
        iconAlt: "outline of three people",
        selected: false,
        cost: 250,
      },
    ],
    active: true,
  },
];

const EstimatePage = () => {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("XS"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesLG = useMediaQuery(theme.breakpoints.down("lg"));
  const [questions, setQuestions] = useState(defaultQuestions);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);
  const [emailHelper, setEmailHelper] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneHelper, setPhoneHelper] = useState("");
  const [phoneTouched, setPhoneTouched] = useState(false);
  const [message, setMessage] = useState("");
  const [total, setTotal] = useState(0);
  const [dialogOpen, setDialogOpen] = useState(false);

  const [service, setService] = useState([]);
  const [platforms, setPlatforms] = useState([]);
  const [features, setFeatures] = useState([]);
  const [customFeatures, setCustomFeatures] = useState("");
  const [category, setCategory] = useState("");
  const [users, setUsers] = useState("");
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState(false);
  const nextQuestion = () => {
    const newQuestions = cloneDeep(questions);
    const currentlyActive = newQuestions.filter((question) => question.active);
    const activeIndex = currentlyActive[0].id - 1;
    const nextIndex = activeIndex + 1;

    newQuestions[activeIndex] = { ...currentlyActive[0], active: false };
    newQuestions[nextIndex] = { ...newQuestions[nextIndex], active: true };
    setQuestions(newQuestions);
  };
  const prevQuestion = () => {
    const newQuestions = cloneDeep(questions);
    const currentlyActive = newQuestions.filter((question) => question.active);
    const activeIndex = currentlyActive[0].id - 1;
    const prevIndex = activeIndex - 1;

    newQuestions[activeIndex] = { ...currentlyActive[0], active: false };
    newQuestions[prevIndex] = { ...newQuestions[prevIndex], active: true };
    setQuestions(newQuestions);
  };
  const navigationPrevDisabled = () => {
    const currentlyActive = questions.filter((question) => question.active);
    if (currentlyActive[0].id === 1) {
      return true;
    } else {
      return false;
    }
  };
  const navigationNextDisabled = () => {
    const currentlyActive = questions.filter((question) => question.active);
    if (currentlyActive[0].id === questions[questions.length - 1].id) {
      return true;
    } else {
      return false;
    }
  };

  const handleSelect = (id) => {
    const newQuestions = cloneDeep(questions);
    const currentlyActive = newQuestions.filter((question) => question.active);
    const activeIndex = currentlyActive[0].id - 1;
    const newSelected = newQuestions[activeIndex].options[id - 1];

    const previousSelected = currentlyActive[0].options.filter(
      (option) => option.selected
    );
    switch (currentlyActive[0].subtitle) {
      case "Select one.":
        if (previousSelected[0]) {
          previousSelected[0].selected = !previousSelected[0].selected;
        }
        newSelected.selected = !newSelected.selected;
        break;
      default:
        newSelected.selected = !newSelected.selected;
        break;
    }
    switch (newSelected.title) {
      case "Custom Software Development":
        setQuestions(softwareQuestions);
        setService(newSelected.title);
        setPlatforms([]);
        setFeatures([]);
        setCustomFeatures("");
        setUsers("");
        break;
      case "iOS/Android App Development":
        setQuestions(softwareQuestions);
        setService(newSelected.title);
        setService(newSelected.title);
        setPlatforms([]);
        setFeatures([]);
        setCustomFeatures("");
        setUsers("");
        break;
      case "Website Development":
        setQuestions(websiteQuestions);
        setService(newSelected.title);
        setService(newSelected.title);
        setPlatforms([]);
        setFeatures([]);
        setCustomFeatures("");
        setUsers("");
        break;

      default:
        setQuestions(newQuestions);

        break;
    }
  };
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

  const getTotal = () => {
    let cost = 0;

    const selections = questions
      .map((question) => question.options.filter((option) => option.selected))
      .filter((question) => question.length > 0);

    selections.map((options) => options.map((option) => (cost += option.cost)));

    if (questions.length > 2) {
      const userCost = questions
        .filter(
          (question) => question.title === "How many users do you expect?"
        )
        .map((question) =>
          question.options.filter((option) => option.selected)
        )[0][0];
      setUsers(userCost.title);
      cost -= userCost.cost;
      cost *= userCost.cost;
    }
    setTotal(cost);
  };
  const getPlatforms = () => {
    let newPlatforms = [];
    if (questions.length > 2) {
      questions
        .filter(
          (question) =>
            question.title === "Which platforms do you need supported?"
        )
        .map((question) =>
          question.options.filter((option) => option.selected)
        )[0]
        .map((option) => newPlatforms.push(option.title));
    }
    setPlatforms(newPlatforms);
  };
  const getFeatures = () => {
    let newFeatures = [];
    if (questions.length > 2) {
      questions
        .filter(
          (question) =>
            question.title === "Which features do you expect to use?"
        )
        .map((question) => question.options.filter((option) => option.selected))
        .map((options) =>
          options.map((option) => newFeatures.push(option.title))
        );
    }
    setFeatures(newFeatures);
  };
  const getCustomFeatures = () => {
    if (questions.length > 2) {
      const newCustomFeatures = questions
        .filter(
          (question) =>
            question.title ===
            "What type of custom features do you expect to need?"
        )
        .map((question) =>
          question.options.filter((option) => option.selected)
        )[0][0].title;
      setCustomFeatures(newCustomFeatures);
    }
  };
  const softwareSelection = (
    <>
      <Grid item>
        <Grid container direction="column">
          <Grid
            item
            container
            alignItems="center"
            sx={{ marginBottom: "1.25em" }}
          >
            <Grid item xs={2}>
              <img src={check} alt="checkmark" />
            </Grid>
            <Grid item xs={10}>
              <Typography variant="body1">
                You want {service}
                {platforms.length > 0
                  ? ` for ${
                      //if only web application is selected...
                      platforms.indexOf("Web Application") > -1 &&
                      platforms.length === 1
                        ? //then finish sentence here
                          "a Web   Application."
                        : //otherwise, if web application and another platform is selected...
                        platforms.indexOf("Web Application") > -1 &&
                          platforms.length === 2
                        ? //then finish the sentence here
                          `a Web Application and an ${platforms[1]}.`
                        : //otherwise, if only one platform is selected which isn't web application...
                        platforms.length === 1
                        ? //then finish the sentence here
                          `an ${platforms[0]}`
                        : //otherwise, if other two options are selected...
                        platforms.length === 2
                        ? //then finish the sentence here
                          "an iOS Application and an Android Application."
                        : //otherwise if all three are selected...
                        platforms.length === 3
                        ? //then finish the sentence here
                          "a Web Application, an iOS Application, and an Android Application."
                        : null
                    }`
                  : null}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container direction="column">
          <Grid
            item
            container
            alignItems="center"
            sx={{ marginBottom: "1.25em" }}
          >
            <Grid item xs={2}>
              <img src={check} alt="checkmark" />
            </Grid>
            <Grid item xs={10}>
              <Typography variant="body1">
                {"with "}
                {/* if we have features... */}
                {features.length > 0
                  ? //...and there's only 1...
                    features.length === 1
                    ? //then end the sentence here
                      `${features[0]}.`
                    : //otherwise, if there are two features...
                    features.length === 2
                    ? //...then end the sentence here
                      `${features[0]} and ${features[1]}.`
                    : //otherwise, if there are three or more features...
                      features
                        //filter out the very last feature...
                        .filter(
                          (feature, index) => index !== features.length - 1
                        )
                        //and for those features return their name...
                        .map((feature, index) => (
                          <span key={index}>{`${feature}, `}</span>
                        ))
                  : null}
                {features.length > 2
                  ? //...and then finally add the last feature with 'and' in front of it
                    ` and ${features[features.length - 1]}.`
                  : null}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container direction="column">
          <Grid
            item
            container
            alignItems="center"
            sx={{ marginBottom: "1.25em" }}
          >
            <Grid item xs={2}>
              <img src={check} alt="checkmark" />
            </Grid>
            <Grid item xs={10}>
              <Typography variant="body1">
                The custom features will be of {customFeatures.toLowerCase()}
                {`, and the project will be used by about ${users} users`}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
  const websiteSelection = (
    <Grid item sx={{ marginTop: matchesMD ? 0 : "14em" }}>
      <Grid container direction="column">
        <Grid
          item
          container
          alignItems="center"
          sx={{ marginBottom: "1.25em" }}
        >
          <Grid item xs={2}>
            <img src={check} alt="checkmark" />
          </Grid>
          <Grid item xs={10}>
            {
              <Typography variant="body1">
                You want{" "}
                {category === "Basic"
                  ? "a Basic Website."
                  : `an ${category} Website. `}
              </Typography>
            }
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
  const getCategory = () => {
    if (questions.length === 2) {
      const newCategory = questions
        .filter(
          (question) =>
            question.title === "Which type of website are you wanting?"
        )[0]
        .options.filter((option) => option.selected)[0].title;
      setCategory(newCategory);
    }
  };
  const sendEstimate = () => {
    setLoading(true);
    axios
      .get("https://us-central1-nat-development.cloudfunctions.net/sendMail", {
        params: {
          name,
          email,
          phone,
          message,
          total,
          category,
          service,
          platforms,
          features,
          customFeatures,
          users,
        },
      })
      .then((response) => {
        console.log(response);
        setLoading(false);
        setName("");
        setEmail("");
        setEmailTouched(false);
        setPhone("");
        setPhoneTouched(false);
        setMessage("");
        setQuestions(defaultQuestions);
        setService("");
        setPlatforms([]);
        setFeatures([]);
        setCustomFeatures("");
        setUsers("");
        setDialogOpen(false);
        setFeedback({
          open: true,
          severity: "success",
          message: "Your message was sent succesfully",
        });
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setFeedback({
          open: true,
          severity: "error",
          message: "Something went wrong, please try again!",
        });
      })
      .finally(() => {
        console.log("request fulfilled");
      });
  };
  const estimateDisabled = () => {
    let disabled = true;
    const emptySelection = questions
      .map((question) => question.options.filter((option) => option.selected))
      .filter((question) => question.length === 0);

    if (questions.length === 2) {
      if (emptySelection.length === 1) {
        disabled = false;
      }
    } else if (questions.length === 1) {
      disabled = true;
    } else if (
      emptySelection.length < 3 &&
      questions[questions.length - 1].options.filter(
        (option) => option.selected
      ).length > 0
    ) {
      disabled = false;
    }
    return disabled;
  };

  return (
    <Grid container jdirection="row">
      <Grid
        item
        container
        direction="column"
        lg
        alignItems={matchesMD ? "center" : undefined}
      >
        <Grid item sx={{ marginTop: "2em", marginLeft: matchesMD ? 0 : "5em" }}>
          <Typography variant="h2" align={matchesLG ? "center" : undefined}>
            Estimate
          </Typography>
        </Grid>
        <Grid
          item
          sx={{
            marginRight: matchesLG ? 0 : "10em",
            maxWidth: "50em",
            marginTop: "7.5em",
          }}
        >
          <Lottie
            animationData={estimateAnimation}
            loop={true}
            rendererSettings={{ perserveAspectRatio: "XMidYMid slice" }}
            style={{ height: "100%", width: "100%" }}
          ></Lottie>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="column"
        alignItems="center"
        lg
        sx={{
          marginRight: matchesLG ? 0 : "2em",

          marginBottom: "25em",
        }}
      >
        {questions
          .filter((question) => question.active)
          .map((question, index) => (
            <React.Fragment key={index}>
              <Grid item>
                <Typography
                  variant="h2"
                  align="center"
                  sx={{
                    fontWeight: 300,
                    fontSize: "2.5rem",
                    marginBottom: "1.5em",
                    marginTop: "5em",
                    lineHeight: 1.25,
                  }}
                  gutterBottom
                >
                  {question.title}
                </Typography>
                <Typography
                  variant="subtitle1"
                  align="center"
                  sx={{ marginBottom: "1.5em" }}
                  gutterBottom
                >
                  {question.subtitle}
                </Typography>
              </Grid>
              <Grid
                item
                container
                sx={{ img: { width: "14em", height: "10em" } }}
              >
                {question.options.map((option) => (
                  <Grid
                    key={option.id}
                    item
                    container
                    direction="column"
                    alignItems="center"
                    component={Button}
                    onClick={() => handleSelect(option.id)}
                    md
                    sx={{
                      backgroundColor: option.selected
                        ? theme.palette.secondary.main
                        : null,
                      borderRadius: 0,
                      marginBottom: matchesSM ? "1.5em" : 0,
                      "&:hover": {
                        backgroundColor: option.selected
                          ? theme.palette.secondary.main
                          : null,
                      },
                    }}
                  >
                    <Grid item sx={{ maxWidth: "12em" }}>
                      <Typography
                        variant="h6"
                        align="center"
                        sx={{ marginBottom: "1em", fontSize: "1rem" }}
                      >
                        {option.title}
                      </Typography>
                      <Typography variant="caption" align="center">
                        {option.subtitle}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <img src={option.icon} alt={option.iconAlt} />
                    </Grid>
                  </Grid>
                ))}
              </Grid>
            </React.Fragment>
          ))}

        <Grid
          item
          container
          justifyContent="space-between"
          sx={{ width: "18em", marginTop: "3em" }}
        >
          <Grid item>
            <IconButton
              disabled={navigationPrevDisabled()}
              onClick={prevQuestion}
            >
              <img
                src={navigationPrevDisabled() ? backArrowDisabled : backArrow}
                alt="Previous question"
              ></img>
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton
              disabled={navigationNextDisabled()}
              onClick={nextQuestion}
            >
              <img
                src={
                  navigationNextDisabled() ? forwardArrowDisabled : forwardArrow
                }
                alt="Next question"
              ></img>
            </IconButton>
          </Grid>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            sx={{
              ...theme.typography.estimate,
              borderRadius: 50,
              backgroundColor: theme.palette.common.orange,
              height: 50,
              width: 225,
              fontSize: "1.25rem",
              marginTop: "5em",
              "&:hover": { backgroundColor: theme.palette.secondary.light },
            }}
            disabled={estimateDisabled()}
            onClick={() => {
              setDialogOpen(true);
              getTotal();
              getPlatforms();
              getFeatures();
              getCustomFeatures();
              getCategory();
            }}
          >
            Get Estimate
          </Button>
        </Grid>
      </Grid>
      <Dialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        fullWidth
        maxWidth="lg"
        fullScreen={matchesSM}
      >
        <Grid container justifyContent="center">
          <Grid item sx={{ marginTop: "1em", marginBottom: "1em" }}>
            <Typography variant="h2" align="center">
              Estimate
            </Typography>
          </Grid>
        </Grid>
        <DialogContent>
          <Grid container justifyContent="space-around">
            <Grid
              item
              container
              direction="column"
              md={7}
              style={{ maxWidth: "20em" }}
            >
              <Grid item sx={{ marginBottom: ".5em", width: "100%" }}>
                <TextField
                  variant="standard"
                  label="Name"
                  id="name"
                  fullWidth
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </Grid>
              <Grid item sx={{ marginBottom: ".5em", width: "100%" }}>
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
              <Grid item sx={{ marginBottom: ".5em", width: "100%" }}>
                <TextField
                  variant="standard"
                  label="Phone"
                  id="phone"
                  helperText={phoneHelper}
                  fullWidth
                  value={phone}
                  onChange={onChange}
                  onBlur={setPhoneTouched}
                  error={phoneHelper.length !== 0}
                />
              </Grid>

              <Grid
                item
                sx={{
                  width: "100%",
                  maxWidth: "20em",
                  marginTop: "3em",
                  marginBottom: "2em",
                }}
              >
                <TextField
                  variant="standard"
                  multiline
                  fullWidth
                  placeholder="Tell us more about your project"
                  rows={10}
                  value={message}
                  id={message}
                  onChange={(event) => setMessage(event.target.value)}
                />
              </Grid>
              <Grid item sx={{ textAlign: matchesMD ? "center" : "inherit" }}>
                <Typography variant="body1" paragraph>
                  We can create this digital solution for an estimated
                  <span
                    style={{
                      fontFamily: "Raleway",
                      fontWeight: 700,
                      fontSize: "1.5rem",
                      color: theme.palette.common.orange,
                      lineHeight: 1.25,
                    }}
                  >
                    {" "}
                    ${total.toFixed(2)}
                  </span>
                </Typography>
                <Typography varinat="body1" paragraph>
                  Fill out your name, phone number, and email, place your
                  request, and we'll get back to you with details moving forward
                  and a final price.
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              container
              direction="column"
              md={5}
              style={{ maxWidth: "30em" }}
              alignItems={matchesMD ? "center" : undefined}
            >
              <Hidden smDown>
                {questions.length > 2 ? softwareSelection : websiteSelection}
              </Hidden>

              <Grid
                item
                container
                alignItems="center"
                justifyContent={matchesMD ? "space-around" : undefined}
                sx={{ marginTop: "5em" }}
              >
                {matchesMD && (
                  <Grid item>
                    <Button
                      color="primary"
                      onClick={() => setDialogOpen(false)}
                    >
                      Cancel
                    </Button>
                  </Grid>
                )}
                <Button
                  variant="contained"
                  sx={{
                    ...theme.typography.estimate,
                    borderRadius: 50,
                    backgroundColor: theme.palette.common.orange,
                    height: 50,
                    width: 225,
                    fontSize: "1.25rem",

                    "&:hover": {
                      backgroundColor: theme.palette.secondary.light,
                    },
                  }}
                  onClick={() => sendEstimate()}
                  disabled={
                    name.length === 0 ||
                    message.length === 0 ||
                    emailHelper.length !== 0 ||
                    phoneHelper.length !== 0
                  }
                >
                  {loading ? (
                    <CircularProgress />
                  ) : (
                    <>
                      Place Request
                      <img
                        src={send}
                        alt="paper airplane"
                        style={{ marginLeft: "0.5em" }}
                      />
                    </>
                  )}
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
      {/* snackbar alet feedbak */}

      <Snackbar
        open={feedback.open}
        autoHideDuration={6000}
        onClose={() => setFeedback((prev) => ({ ...prev, open: false }))}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={() => setFeedback((prev) => ({ ...prev, open: false }))}
          severity={feedback.severity}
          sx={{ width: "100%" }}
        >
          {feedback.message}
        </Alert>
      </Snackbar>
    </Grid>
  );
};

export default EstimatePage;
