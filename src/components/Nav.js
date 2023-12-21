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
        <li id="accueil">{language ? "Accueil" : "Home"}</li>
        <li>{language ? "A propos" : "About"}</li>
        <li>{language ? "Projets" : "Projects"}</li>
        <li>{language ? "Compétences" : "skill"}</li>
        <li id="contact"> Contact</li>
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
