import React from "react";

const Nav = ({ darkMode, setDarkMode }) => {
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className="nav">
      <div className="nav-home">
        <h5>Home</h5>
      </div>
      <div className="nav-section">
        <ul>
          <li>About</li>
          <li>Projets</li>
          <li>Compétences</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="nav-language">
        <h5>Francais</h5>
      </div>
      <div className="nav-light-mode">
        <button onClick={toggleDarkMode}>{darkMode ? "☀️ " : "🌙 "}</button>
      </div>
    </div>
  );
};

export default Nav;
