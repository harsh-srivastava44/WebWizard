import React from "react";
import home1 from "../img/home1.png";
import {About,Hide,Image,Description} from '../styles'

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
 
