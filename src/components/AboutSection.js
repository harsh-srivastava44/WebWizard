import { motion } from "framer-motion";
import React from "react";
import { titleAnimation, fade, photoAnimation, scrollView } from "../animation";
import home1 from "../img/home1.png";
import { About, Hide, Image, Description } from "../styles";
import { Wave } from "./Wave";
import { useScroll } from "./UseScroll";

//Framer Motion

export const AboutSection = () => {
  const [element, controls] = useScroll();

  return (
    <About
      variants={scrollView}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <Description>
        <motion.div className="title">
          <Hide className="hide">
            <motion.h2 variants={titleAnimation}>We work to make</motion.h2>
          </Hide>
          <Hide className="hide">
            <motion.h2 variants={titleAnimation}>
              your <span>dream</span> come
            </motion.h2>
          </Hide>
          <Hide className="hide">
            <motion.h2 variants={titleAnimation}>true.</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for any website ideas that you have. We have professionalls
          with amazing skills.
        </motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </Description>
      <Image>
        <motion.img variants={photoAnimation} src={home1} alt="home1" />
      </Image>
      <Wave />
    </About>
  );
};
