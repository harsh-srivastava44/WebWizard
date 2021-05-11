
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

export const useScroll = () => {
  const [element, view] = useInView({ threshold: 0.3 });
  console.log("🚀 ~ useScroll ~ view", view);
  const controls = useAnimation();
  if (view) {
    controls.start("show");
    console.log("Started-------------");
     
  } else {
    controls.start("hidden");
  }
  return [element, controls];
};
