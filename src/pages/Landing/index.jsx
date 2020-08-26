import React from "react";

import landingImg from "../../assets/images/landing-image.png";

import "./styles.css";
const Landing = () => {
  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={landingImg} alt="" className="logo" />
          <h3>Sua plataforma de estudos gratuita</h3>
        </div>
      </div>
    </div>
  );
};

export default Landing;
