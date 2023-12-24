import React, { useEffect, useRef, useState } from "react";
import Nav from "./Nav";

const Accueil = ({ darkMode, setDarkMode, language, setLanguage }) => {
  const logoContainerRef = useRef(null);

  useEffect(() => {
    const logoContainer = logoContainerRef.current; // cible le logo
    const logos = Array.from(logoContainer.querySelectorAll(".logo"));
    
    const commonStyles = "transform 0.7s linear";

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

      logos.forEach((logo) => (logo.style.transition = commonStyles));

      // Calcul de l'angle entre la position actuelle de la souris et la position initiale du logo
      const angleX = ((clientY - centerY) / height) * 12; // gere l'angle pour ne pas déformer les images.
      const angleY = ((clientX - centerX) / width) * 12;

      const translateX = clientX - centerX; // position X lors du déplacement de la souris
      const translateY = clientY - centerY; // position Y lorsque lors du déplacement de la souris

      const rotate = `rotateX(${angleX}deg) rotateY(${angleY}deg)`;

      // Appliquer la rotation, la translation en X et Y, et l'échelle aux quatre images du logo

      logos[0].style.transform = `${rotate} translateX(${
        translateX * 0.15
      }px) translateY(${translateY * 0.15}px) scale(1)`;

      logos[1].style.transform = `${rotate} translateX(${
        translateX * 0.1
      }px) translateY(${translateY * 0.1}px) scale(0.9)`;
      logos[2].style.transform = `${rotate} translateX(${
        translateX * 0.07
      }px) translateY(${translateY * 0.07}px) scale(0.8)`;
      logos[3].style.transform = `${rotate} translateX(${
        translateX * 0.04
      }px) translateY(${translateY * 0.04}px) scale(0.7)`;
    };

    handleMouseMove({
      //met les 4 images a leur position.
      clientX: window.innerWidth / 1,
      clientY: window.innerHeight / 1,
    });

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [logoContainerRef]);

  return (
    <div className="accueil" id="home">
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
              <a href="#contact">{language ? "Me contacter" : "Contact Me"}</a>
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
