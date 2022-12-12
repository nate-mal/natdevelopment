import { Typography } from "@mui/material";
import { Box } from "@mui/system";

import consultationIcon from "../../assets/consultationIcon.svg";
import mockupIcon from "../../assets/mockupIcon.svg";
import reviewIcon from "../../assets/reviewIcon.svg";
import designIcon from "../../assets/designIcon.svg";
import buildIcon from "../../assets/buildIcon.svg";
import launchIcon from "../../assets/launchIcon.svg";
import maintainIcon from "../../assets/maintainIcon.svg";
import iterateIcon from "../../assets/iterateIcon.svg";
import ProcessItem from "./ProcessItem";

const data = [
  {
    title: "Consultation",
    paragraphs: [
      `Our process begins the moment you realize you need a piece of
   technology for your business. Whether you already have an idea for
  where to start and what to do, or if you just know you want to step
  things up, our initial consultation will help you examine your
  business holistically to find the best solutions.`,
      `Detailed notes will be taken on your requirements and constraints,
  while taking care to identify other potential areas for consideration.`,
      `Cutting-edge advancements in machine learning like object detection
  and natural language processing allow computers to do things
  previously unimaginable, and our expertise and intuition will help
  usher you into this new future of possibilities.`,
    ],
    color: "#B3B3B3",
    img: consultationIcon,
  },
  {
    title: "Mockup",
    paragraphs: [
      `After we settle on the best path forward and decide on a solution to pursue, details like the cost and timeline will be finalize.`,

      `Then it’s time for us to start on your minimum viable product. That’s just a fancy term for a mockup, which doesn’t include colors, images, or any other polished design elements, but captures the essential layout structure and functionality.`,

      `This helps us understand and refine the solution itself before getting distracted by specifics and looks.`,
    ],
    color: "#FF7373",
    img: mockupIcon,
  },
  {
    title: "Review",
    paragraphs: [
      ` Before moving any farther we come back to you with our progress. This gives you the freedom to discuss any changes you may want or any ideas you may have come up with before any heavy lifting has been done.`,

      ` We give you an interactive demonstration of the mockups, thoroughly explaining the thought process that went into each screen and every anticipated feature.`,

      ` Once you’re completely satisfied with the vision for our solution we get down to the nitty gritty, fine-details of design.`,
    ],
    color: "#39B54A",
    img: reviewIcon,
  },
  {
    title: "Design",
    paragraphs: [
      " Using the mockups and notes taken during the consultation as guides, we will start ironing out what the final product will look like. This also involves using any brand material like fonts, colors, and logos to extend the experience you’re already familiar with.",
      "No aspect is superfluous, and care will be taken with every decision.",
    ],
    color: "#A67C52",
    img: designIcon,
  },
  {
    title: "Review",
    paragraphs: [
      " A second round of review is essential to our goal of creating exactly what you want, exactly how you want it.",
      "This time we’ll be going over the finalized designs in another fully interactive demonstration. Again this gives you an opportunity to tweak things and make sure we get everything right the first time.",
    ],
    color: "#39B54A",
    img: reviewIcon,
  },

  {
    title: "Build",
    paragraphs: [
      " Here’s where we get down to business.",
      "Engineering begins after your approval on the final designs. We start by scaffolding out the project on a high level, prioritizing some areas over others.",

      "Each area is then developed in order of importance until ready to be connected to the next piece.",

      "Typically the backend, behind the scenes operations are completed first. Once all the services are in place we can then create the front end, user side of things.",

      "Finishing the application doesn’t mean we’re done though, because we use extensive testing to guarantee compatibility with all intended devices.",

      "Only after our rigorous examinations will we accept a product as finished, then pushing it through the production pipeline. This produces an optimized, compressed, consumer version of the code and assets ready for deployment.",
    ],
    color: "#FFA633",
    img: buildIcon,
  },
  {
    title: "Launch",
    paragraphs: [
      "The moment we’ve all been waiting for.",

      "When construction comes to a close you’re the first one to know. We’ll give our final demonstration to show off your shiny new software in the wild so you know exactly how it will look to your users.",

      "When you say the word, we press the button and launch your project out to the public. We’re there to ensure everything goes to plan so you can start reaping the rewards of your technological investment immediately.",
    ],
    color: "#C1272D",
    img: launchIcon,
  },
  {
    title: "Maintain",
    paragraphs: [
      "Our work doesn’t end there.",

      "After a successful launch we keep in close contact to listen to feedback and hear how the project is being received.",

      "From there on out we make sure your application is kept up to date and taking advantage of the best features and practices available. When new developments arise or new techniques are discovered in future projects, we will implement those advancements in your project as part of our routine maintenance.",
    ],
    color: "#8E45CE",
    img: maintainIcon,
  },
  {
    title: "Iterate",
    paragraphs: [
      "The cycle repeats whenever you come up with a new idea for extending your current project, or come up with a brand new system entirely.",

      "By planning for future features and changes we can build and evolve your application over time. As new use cases and customer needs develop we can respond with continuous integration of new content.",

      "Our iterative process will keep you current and competitive, allowing you to quickly implement changes instead of waiting months for a single update.",
    ],
    color: "#29ABE2",
    img: iterateIcon,
  },
];
//
//
const ProcessList = () => {
  return (
    <Box>
      <Typography
        variant="h4"
        component="h2"
        sx={{
          fontSize: "1.5em",
          marginBottom: "0.5em",
          marginLeft: ".5em",
          textAlign: "center",
        }}
        data-aos="zoom-in"
      >
        Process
      </Typography>
      {data.map((item, index) => (
        <ProcessItem
          key={index}
          title={item.title}
          paragraphs={item.paragraphs}
          color={item.color}
          img={item.img}
        />
      ))}
    </Box>
  );
};

export default ProcessList;
