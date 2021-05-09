import React from "react";
import home1 from "../img/home1.png";
import styled from "styled-components";

export const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide className="hide">
            <h2>We work to make</h2>
          </Hide>
          <Hide className="hide">
            <h2>
              your <span>dream</span> come
            </h2>
          </Hide>
          <Hide className="hide">
            <h2>true.</h2>
          </Hide>
        </div>
        <p>
          Contact us for any website ideas that you have. We have professionalls
          with amazing skills.
        </p>
        <button>Contact Us</button>
      </Description>
      <Image>
        <img src={home1} alt="home1" />
      </Image>
    </About>
  );
};
//Styled Components
const About = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
`;
const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  h2 { 
    font-weight: lighter;
  }
`;
const Image = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    height: 80vh;
    object-fit : cover;
  }
`;
 
const Hide = styled.div`

`;