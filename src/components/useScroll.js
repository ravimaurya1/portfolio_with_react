import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

export const useScroll = () => {
  const controls = useAnimation(); // It let it control when we want to animtate
  const [element, view] = useInView({ threshold: 0.2 }); // It set true when our element is in view section
  if (view) {
    controls.start("show");
  } else {
    controls.start("hidden");
  }
  return [element, controls];
};
