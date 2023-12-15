import React, { useEffect, useState } from "react";

const AboutMe = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollValue =
      (window.scrollY + window.innerHeight) / document.body.offsetHeight;

    if (scrollValue > 0.3) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Nettoyer l'écouteur d'événement lors du démontage du composant
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Dépendance vide signifie que cela ne déclenchera qu'une seule fois au montage

  return (
    <div className="about-me">
      <h3
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translate(0)" : "translate(500px)",
        }}
      >
        A propos
      </h3>
      <p
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translate(0)" : "translate(-200px)",
        }}
      >
        En tant que développeur front-end, je m'immerge dans l'univers de React
        avec une énergie débordante. Chaque ligne de code est une opportunité
        d'apprendre et de grandir dans cet excitant domaine du développement
        web.
      </p>
      <br />
      <p
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translate(0)" : "translate(200px)",
        }}
      >
        je suis en constante quête d'amélioration, grace a l'apprentissage
        continu et la volonté de relever de nouveaux défis
      </p>
      <br />
      <p
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translate(0)" : "translate(-200px)",
        }}
      >
        Pour résumer, je me passionne un peu plus chaque jour dans le
        développement
      </p>
    </div>
  );
};

export default AboutMe;
