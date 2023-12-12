import React from "react";
import { Link } from "react-router-dom";
import homeFormula1 from "./Images/homeFormula1.png";

const LandingPage = () => {
  return (
    <div className="landing-container">
      <img src={homeFormula1} alt="Icon" className="responsive-image-full" />

      <div className="ExplanationContainer">
        <h2>"Welcome to Formula 1!"</h2>
        <p>
          <b style={{color:'#d12f1b', fontSize:'30px',background:'white'}}>Formula 1</b> is the premier category of global motorsport competition. In
          this discipline, teams and drivers compete in high-speed races using
          cars specifically designed for this purpose. Formula 1 is renowned for
          its advanced technology, extreme speed, and thrilling competitions
          held on circuits around the world. With a rich history and a
          passionate fan base, Formula 1 is a spectacle that blends technical
          skill, strategy, and bravery on the track.
        </p>

        <Link to="/home">
          <button className="ButtonHome">Continue</button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
