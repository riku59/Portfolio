import React, { useState } from "react";
import Accueil from "./components/Accueil";
import AboutMe from "./components/AboutMe";
import Projets from "./components/Projets";
import Competences from "./components/Competences";
import ContactMe from "./components/ContactMe";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState(true);

  return (
    <div
      className={`app ${darkMode ? "dark-mode" : ""} ${
        language ? "language" : ""
      } `}
    >
      <Accueil
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        language={language}
        setLanguage={setLanguage}
      />
      <AboutMe language={language} />
      <Projets language={language} />
      <Competences language={language} />
      <ContactMe language={language} />
    </div>
  );
};

export default App;
