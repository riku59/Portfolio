import React from "react";

const Competences = () => {
  return (
    <div className="competence">
      <h3>Compétences</h3>
      <div className="competences">
        <div className="sass-logo">
          <img src="/Sass.png" alt="logo Sass" />
        </div>
        <div className="javascript-logo">
          <img src="/javascript.png" alt="logo JavaScript" />
        </div>
        <div className="react-logo">
          <img src="/react.png" alt="logo React" />
        </div>

        <div className="redux-logo">
          <img src="/Redux.png" alt="logo Redux" />
        </div>
      </div>
    </div>
  );
};

export default Competences;
