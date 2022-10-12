import Lottie from "lottie-react";

import animationData from "../animations/landinganimation/data";

const LandingPage = () => {
  return (
    <Lottie animationData={animationData} style={{ height: 720 }} loop={true} />
  );
};

export default LandingPage;
