import React from "react";
import { pageAnimation } from "../animation";
import { motion } from "framer-motion";

import { AboutSection } from "../components/AboutSection";
import { FaqSection } from "../components/FaqSection";
import { ServicesSection } from "../components/ServicesSection";

//Page components

export const AboutUs = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <AboutSection />
      <ServicesSection />
      <FaqSection />
    </motion.div>
  );
};
