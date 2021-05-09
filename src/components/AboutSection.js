import React from "react";
import home1 from "../img/home1.png";
export const AboutSection = () => {
  return (
    <div>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>We work to make</h2>
          </div>
          <div className="hide">
            <h2>
              your <span>dream</span> come{" "}
            </h2>
          </div>
          <div className="hide">
            <h2>true.</h2>
          </div>
        </div>
      </div>
      <p>
        Contatc us for any photography or videography ideas tha you have. We
        have professionalls with amazing skills.
      </p>
      <button>Contact Us</button>
      <div className="image">
        <img src={home1} alt="home1" />
      </div>
    </div>
  );
};
