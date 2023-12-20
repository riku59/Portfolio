import React from "react";
import frenchFLag from "../images/drapeau-francais.png";
import englishFlag from "../images/drapeau-anglais.png";
const Nav = ({ darkMode, setDarkMode, setLanguage, language }) => {
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  const handleToggleLanguage = () => {
    setLanguage(!language); // Appeler la fonction reçue en prop pour changer la langue
  };
  return (
    <div className="nav">
      <ul>
        <li id="accueil">{language ? "Accueil" : "Home"}</li>
        <li>{language ? "A propos" : "About"}</li>
        <li>{language ? "Projets" : "Projects"}</li>
        <li>{language ? "Compétences" : "skill"}</li>
        <li> Contact</li>
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
