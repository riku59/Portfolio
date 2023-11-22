import React from "react";
import Accueil from "./components/Accueil";
import AboutMe from "./components/AboutMe";
import Projets from "./components/Projets";
import Competences from "./components/Competences";
import ContactMe from "./components/ContactMe";

const App = () => {
  return (
    <div>
      <Accueil />
      <AboutMe />
      <Projets />
      <Competences />
      <ContactMe />
    </div>
  );
};

export default App;
