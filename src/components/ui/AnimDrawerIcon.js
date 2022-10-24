import { useRef, useEffect } from "react";
import Lottie from "lottie-react";
import animationData from "../../animations/drawerIcon/data";
const AnimDrawerIcon = (props) => {
  const isInitialMount = useRef(true);
  const lottieRef = useRef();
  const { open } = props;

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      //  useEffect code here to be run on update
      if (open) {
        lottieRef.current.playSegments([0, 50], true);
      } else {
        lottieRef.current.playSegments([50, 90], true);
      }
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
