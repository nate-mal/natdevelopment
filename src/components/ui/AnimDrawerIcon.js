import Lottie from "lottie-react";
import animationData from "../../animations/drawerIcon/data";
const AnimDrawerIcon = (props) => {
  const { onOpen, onClose } = props;
  return <Lottie animationData={animationData} loop={true} />;
};

export default AnimDrawerIcon;
