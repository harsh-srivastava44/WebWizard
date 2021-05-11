import React from "react";
import { pageAnimation, titleAnimation } from "../animation";
import { motion } from "framer-motion";
import styled from "styled-components";
import ScrollTop from "../components/ScrollTop";
export const ContactUs = () => {
  return (
    <ContactStyle
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "#fff" }}
    >
      <Title>
        <Hide>
          <motion.h2 variants={titleAnimation}>
            Get in touch with our wizards.
          </motion.h2>
        </Hide>
      </Title>
      <Hide>
        <Social variants={titleAnimation}>
          <Circle />
          <h2>Send us a message</h2>
        </Social>
      </Hide>
      <Hide>
        <Social variants={titleAnimation}>
          <Circle />
          <h2>Send us a message</h2>
        </Social>
      </Hide>
      <Hide>
        <Social variants={titleAnimation}>
          <Circle />
          <h2>Follow us on Twitter</h2>
        </Social>
      </Hide>
    </ContactStyle>
  );
};
const ContactStyle = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
  @media (max-width: 1500px) {
    padding: 2rem;
    h2 {
      font-size: 2rem !important;
    }
  }
`;
const Title = styled(motion.div)`
  overflow: hidden;
  @media (max-width: 1500px) {
   margin-top: 5rem;
  }
`;

const Hide = styled.div``;
const Circle = styled(motion.div)`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background: #353535;
  @media (max-width: 1300px) {
    width: 2rem;
    height: 2rem;
  }
`;
const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
  }
`;
