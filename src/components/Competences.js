import React, { useRef } from "react";

import useScrollVisibility from "../data/useScrollVisibility";

const Competences = ({ language }) => {
  const skillRef = useRef(null);
  const isVisible = useScrollVisibility(skillRef);
  return (
    <div
      id="competence"
      className={`competence ${isVisible ? "visible" : ""} ${
        language ? "language" : ""
      }`}
      ref={skillRef}
    >
      <h3 className={isVisible ? "visible" : ""}>
        {language ? "Compétences" : "Skills"}
      </h3>
      <div className="competences">
        <div className={`sass-logo ${isVisible ? "visible" : ""}`}>
          <img src="/Sass.png" alt="logo Sass" />
        </div>
        <div className={`javascript-logo ${isVisible ? "visible" : ""}`}>
          <img src="/javascript.png" alt="logo JavaScript" />
        </div>
        <div className={`react-logo ${isVisible ? "visible" : ""}`}>
          <img src="/react.png" alt="logo React" />
        </div>

        <div className={`redux-logo ${isVisible ? "visible" : ""}`}>
          <img src="/Redux.png" alt="logo Redux" />
        </div>
      </div>
    </div>
  );
};

export default Competences;
