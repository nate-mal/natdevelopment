import { useRef, useEffect } from "react";
import Lottie from "lottie-react";
import animationData from "../../animations/drawerIcon/data";
const AnimDrawerIcon = (props) => {
  const lottieRef = useRef();
  const { open } = props;

  useEffect(() => {
    if (open) {
      lottieRef.current.playSegments([0, 50], true);
    } else {
      lottieRef.current.playSegments([50, 90], true);
    }
  }, [open]);
  return (
    <Lottie
      lottieRef={lottieRef}
      animationData={animationData}
      autoplay={false}
      loop={false}
    />
  );
};

export default AnimDrawerIcon;
