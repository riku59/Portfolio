import React, { useState } from "react";
import Accueil from "./components/Accueil";
import AboutMe from "./components/AboutMe";
import Projets from "./components/Projets";
import Competences from "./components/Competences";
import ContactMe from "./components/ContactMe";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  // const toggleDarkMode = () => {
  //   setDarkMode(!darkMode);
  // };

  return (
    <div className={`app ${darkMode ? "dark-mode" : ""}`}>
      <Accueil darkMode={darkMode} setDarkMode={setDarkMode} />
      <AboutMe />
      <Projets />
      <Competences />
      <ContactMe />
    </div>
  );
};

export default App;
