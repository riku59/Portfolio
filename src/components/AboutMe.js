import React, { useEffect, useRef, useState } from "react";

const AboutMe = ({ language }) => {
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
      className={`about-me ${isVisible ? "visible" : ""} ${
        language ? "language" : ""
      }`}
      ref={aboutMeRef}
    >
      <h3
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translate(0)" : "translate(500px)",
        }}
      >
        {language ? "A propos" : "About Me"}
      </h3>
      <p
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translate(0)" : "translate(-200px)",
        }}
      >
        {language
          ? `En tant que développeur front-end, je m'immerge dans l'univers de React avec une énergie débordante. Chaque ligne de code est une opportunité
        d'apprendre et de grandir dans cet excitant domaine du développement web.`
          : "As a front-end developer, I immerse myself in the world of React with boundless energy. Every line of code is an opportunity to learn and grow in this exciting field of web development."}
      </p>
      <br />
      <p
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translate(0)" : "translate(200px)",
        }}
      >
        {language
          ? `Je suis en constante quête d'amélioration, grace a  l'apprentissage continu et la volonté de relever de nouveaux défis`
          : "I'm constantly on the lookout for ways to improve, thanks to continuous learning and a willingness to take on new challenges."}
      </p>
      <br />
      <p
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translate(0)" : "translate(-200px)",
        }}
      >
        {language
          ? `Pour résumer, je me passionne un peu plus chaque jour dans le développement.`
          : "To sum up, I'm becoming more and more passionate every day about development."}
      </p>
    </div>
  );
};

export default AboutMe;
