import React from "react";
import { AboutSection } from "../components/AboutSection";
import { FaqSection } from "../components/FaqSection";
import { ServicesSection } from "../components/ServicesSection";

//Page components

export const AboutUs = () => {
  return (
    <React.Fragment>
      <AboutSection />
      <ServicesSection />
      <FaqSection />
    </React.Fragment>
  );
};
