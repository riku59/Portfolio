import React, { useEffect, useRef } from "react";
import Nav from "./Nav";

const Accueil = ({ darkMode, setDarkMode }) => {
  const logoContainerRef = useRef(null);

  useEffect(() => {
    const logoContainer = logoContainerRef.current;

    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const { left, top, width, height } =
        logoContainer.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;

      // Calcul de l'angle entre la position actuelle de la souris et la position initiale du logo
      const angleX = (clientY - centerY) / height;
      const angleY = (clientX - centerX) / width;

      const translateX1 = (clientX - centerX) * 0.35;
      const translateY1 = (clientY - centerY) * 0.35;

      const translateX2 = (clientX - centerX) * 0.3;
      const translateY2 = (clientY - centerY) * 0.3;

      const translateX3 = (clientX - centerX) * 0.2;
      const translateY3 = (clientY - centerY) * 0.2;

      const translateX4 = (clientX - centerX) * 0.1;
      const translateY4 = (clientY - centerY) * 0.1;

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
        angleX * 45
      }deg) rotateY(${
        angleY * 45
      }deg) translateX(${translateX1}px) translateY(${translateY1}px) scale(1)`;
      logoContainer.querySelector("#logo2").style.transform = `rotateX(${
        angleX * 45
      }deg) rotateY(${
        angleY * 45
      }deg) translateX(${translateX2}px) translateY(${translateY2}px) scale(0.9)`;
      logoContainer.querySelector("#logo3").style.transform = `rotateX(${
        angleX * 45
      }deg) rotateY(${
        angleY * 45
      }deg) translateX(${translateX3}px) translateY(${translateY3}px) scale(0.8)`;
      logoContainer.querySelector("#logo4").style.transform = `rotateX(${
        angleX * 45
      }deg) rotateY(${
        angleY * 45
      }deg) translateX(${translateX4}px) translateY(${translateY4}px) scale(0.7)`;
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [logoContainerRef]);

  return (
    <div className="accueil">
      <Nav darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="accueil-container">
        <div className="accueil-txt">
          <h2>Nicolas WILST</h2>
          <h3>Développeur Front-end.</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing Earum, natus?
          </p>
          <div className="contact-me">
            <button>
              <a href="#">Me contacter</a>
            </button>
          </div>
        </div>
        <div className="accueil-logo" ref={logoContainerRef}>
          <img src="logo1.png" alt="" id="logo1" />
          <img src="logo1.png" alt="" id="logo2" />
          <img src="logo1.png" alt="" id="logo3" />
          <img src="logo1.png" alt="" id="logo4" />
        </div>
      </div>
    </div>
  );
};

export default Accueil;
