import { useRef, useEffect, useState } from "react";
import Lottie from "lottie-react";
import animationData from "../../animations/drawerIcon/data";
const AnimDrawerIcon = (props) => {
  const isInitialMount = useRef(true);
  const lottieRef = useRef();
  const [drawerIsClose, setDrawerIsClose] = useState(true);
  const { open } = props;

  useEffect(() => {
    if (open && drawerIsClose) {
      setDrawerIsClose(false);
      lottieRef.current.playSegments([0, 50], true);
    } else if (!drawerIsClose) {
      setDrawerIsClose(true);
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
