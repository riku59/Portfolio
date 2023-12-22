import React, { useEffect, useState } from "react";
import frenchFLag from "../images/drapeau-francais.png";
import englishFlag from "../images/drapeau-anglais.png";

const Nav = ({ darkMode, setDarkMode, setLanguage, language }) => {
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleToggleLanguage = () => {
    setLanguage(!language);
  };

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    const isScrollingDown = currentScrollPos > prevScrollPos;

    setPrevScrollPos(currentScrollPos);

    // Définir la visibilité en fonction de la direction de défilement
    setVisible(() => {
      if (isScrollingDown && currentScrollPos > 64) {
        return false; // Cacher la navigation lors du défilement vers le bas après 64 pixels
      } else {
        return true;
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]); // Corrected to use prevScrollPos here

  return (
    <div className={`nav ${visible ? "visible" : "hidden"}`}>
      <ul>
        <li id="accueil">
          <a href="#home">{language ? "Accueil" : "Home"}</a>
        </li>
        <li>
          <a href="#about">{language ? "A propos" : "About"}</a>
        </li>
        <li>
          <a href="#project">{language ? "Projets" : "Projects"}</a>
        </li>
        <li>
          <a href="#competence">{language ? "Compétences" : "skill"}</a>
        </li>
        <li id="contact-me">
          <a href="#contact"> Contact</a>
        </li>
      </ul>
      <div className="nav-translate">
        <button id="language" onClick={handleToggleLanguage}>
          <img
            src={language ? frenchFLag : englishFlag}
            alt={language ? "Français" : "English"}
          />
        </button>
      </div>
      <div className="nav-light-mode">
        <button onClick={toggleDarkMode}>{darkMode ? "☀️ " : "🌙 "}</button>
      </div>
    </div>
  );
};

export default Nav;
