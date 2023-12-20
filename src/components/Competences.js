import React, { useEffect, useRef, useState } from "react";

const Competences = ({ language }) => {
  const [isVisible, setIsVisible] = useState(false);
  const aboutMeRef = useRef(null);

  const handleScroll = () => {
    const element = aboutMeRef.current;

    if (element) {
      const bounding = element.getBoundingClientRect();
      const isVisible = bounding.top <= window.innerHeight * 0.7;
      setIsVisible(isVisible);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`competence ${isVisible ? "visible" : ""} ${
        language ? "language" : ""
      }`}
      ref={aboutMeRef}
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
