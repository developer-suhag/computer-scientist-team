import React from "react";
import "./Hero.css";
import heroImg from "../../images/Scientists studying neural connections.jpg";

const Hero = () => {
  return (
    // hero section
    <div className="container hero-section">
      <div>
        <h3 className="section-title">Build a team of computer scientists</h3>
        <p>
          World technology is advancing rapidly. Having a team of computer
          scientists can boost your business to the next level.
        </p>
        <h4 className="total-budget">Total budget: 1 Million</h4>
      </div>
      <div>
        <img src={heroImg} alt="" />
      </div>
    </div>
  );
};

export default Hero;
