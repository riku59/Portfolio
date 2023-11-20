import React from "react";
import Nav from "./Nav";

const Accueil = () => {
  return (
    <div className="accueil">
      <Nav />
      <div className="accueil-container">
        <div className="accueil-txt">
          <h2>Nicolas WILST</h2>
          <h3>Développeur Front-end.</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,
            natus?
          </p>
          <div className="contact-me">
            <a href="#">Me contacter</a>
          </div>
        </div>
        <div className="accueil-logo">
          <img src="logo1.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Accueil;
