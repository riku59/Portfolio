import React, { useEffect, useRef, useState } from "react";
import Nav from "./Nav";

const Accueil = ({ darkMode, setDarkMode, language, setLanguage }) => {
  const logoContainerRef = useRef(null);

  useEffect(() => {
    const logoContainer = logoContainerRef.current;

    // Positions initiales des logos
    const initialPositions = [
      { translateX: -600, translateY: -350 },
      { translateX: -600, translateY: 380 },
      { translateX: 380, translateY: 380 },
      { translateX: 380, translateY: -350 },
    ];
    logoContainer.querySelectorAll(".logo").forEach((logo, index) => {
      const { translateX, translateY } = initialPositions[index];
      logo.style.transform = `translate(${translateX}px, ${translateY}px) scale(2)`;
    });

    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const { left, top, width, height } =
        logoContainer.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;

      // Calcul de l'angle entre la position actuelle de la souris et la position initiale du logo
      const angleX = (clientY - centerY) / height;
      const angleY = (clientX - centerX) / width;

      const translateX1 = (clientX - centerX) * 0.15;
      const translateY1 = (clientY - centerY) * 0.15;

      const translateX2 = (clientX - centerX) * 0.1;
      const translateY2 = (clientY - centerY) * 0.1;

      const translateX3 = (clientX - centerX) * 0.07;
      const translateY3 = (clientY - centerY) * 0.07;

      const translateX4 = (clientX - centerX) * 0.04;
      const translateY4 = (clientY - centerY) * 0.04;

      // Appliquer la rotation, la translation en X et Y, et l'échelle aux quatre images du logo

      logoContainer.querySelector("#logo1").style.transition =
        "transform 0.7s linear";
      logoContainer.querySelector("#logo2").style.transition =
        "transform 0.7s linear";
      logoContainer.querySelector("#logo3").style.transition =
        "transform 0.7s  linear";
      logoContainer.querySelector("#logo4").style.transition =
        "transform 0.7s linear";

      logoContainer.querySelector("#logo1").style.transform = `rotateX(${
        angleX * 12
      }deg) rotateY(${
        angleY * 12
      }deg) translateX(${translateX1}px) translateY(${translateY1}px) scale(1)`;
      logoContainer.querySelector("#logo2").style.transform = `rotateX(${
        angleX * 12
      }deg) rotateY(${
        angleY * 12
      }deg) translateX(${translateX2}px) translateY(${translateY2}px) scale(0.9)`;
      logoContainer.querySelector("#logo3").style.transform = `rotateX(${
        angleX * 12
      }deg) rotateY(${
        angleY * 12
      }deg) translateX(${translateX3}px) translateY(${translateY3}px) scale(0.8)`;
      logoContainer.querySelector("#logo4").style.transform = `rotateX(${
        angleX * 12
      }deg) rotateY(${
        angleY * 12
      }deg) translateX(${translateX4}px) translateY(${translateY4}px) scale(0.7)`;
    };

    handleMouseMove({
      clientX: window.innerWidth / 2,
      clientY: window.innerHeight / 2,
    });

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [logoContainerRef]);

  return (
    <div className="accueil">
      <Nav
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        setLanguage={setLanguage}
        language={language}
      />
      <div className="accueil-container">
        <div className="accueil-txt">
          <h2>Nicolas WILST</h2>
          <h3>{language ? "Développeur Front end" : "front end developer"}</h3>
          <p>
            {language
              ? "Passionné par le développement"
              : "A passion for development"}
          </p>
          <div className="contact-me">
            <button>
              <a href="#">{language ? "Me contacter" : "Contact Me"}</a>
            </button>
          </div>
        </div>
        <div className="accueil-logo" ref={logoContainerRef}>
          <img src="logo1.png" alt="" id="logo1" className="logo" />
          <img src="logo1.png" alt="" id="logo2" className="logo" />
          <img src="logo1.png" alt="" id="logo3" className="logo" />
          <img src="logo1.png" alt="" id="logo4" className="logo" />
        </div>
      </div>
    </div>
  );
};

export default Accueil;
