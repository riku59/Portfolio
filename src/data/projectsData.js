import { library } from "@fortawesome/fontawesome-svg-core";
import { faReact, faHtml5, faSass } from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faReact, faHtml5, faSass);

export const projectsData = [
  {
    id: 0,
    title: "ReactMovie",
    languages: ["React", "Sass"],
    infos:
      "Projet réalisé en React, qui permet de rechercher un film par mot clé grace a une API. L'utilisateur peut ajouter des films dans ses coups de coeurs et les supprimer.",
    img: "ReactMovie.PNG",
    Link: "https://reaactmovies.netlify.app",
    Github: "https://github.com/riku59/React-Movie",
  },
  {
    id: 1,
    title: "ArgentBank",
    languages: ["React", "Sass", "Redux"],
    infos:
      "Projet réaliser en React en utilisant Redux. L'utilisateur peut se connecter, et visualiser son argent et ses transactions. Il peut également modifier son nom d'utilisateur. Le nom d'utilisateur est affiché directement grace a redux.",
    img: "",
    Link: "",
    Github: "",
  },
  {
    id: 2,
    title: "The resto",
    languages: ["HTML", "Sass"],
    infos:
      "Un de mes premiers projet, qui m'as permis de travailler Sass  pour faire un site estéthique  ",
    img: "",
    Link: "https://riku59.github.io/Projet-sass-Le-Resto/",
    Github: "https://github.com/riku59/Projet-sass-Le-Resto",
  },
  {
    id: 3,
    title: "Joke App",
    languages: ["HTML", "Sass", "JavaScript"],
    infos:
      "Projet contenant une API Blague. A chaque clique,  une nouvelle blague apparait   ",
    img: "",
    Link: "https://riku59.github.io/Projet-sass-Le-Resto/",
    Github: "https://github.com/riku59/Projet-sass-Le-Resto",
  },
  {
    id: 4,
    title: "Vaisseau et style",
    languages: ["HTML", "Sass"],
    infos:
      "Projet qui regroupe différent style  utile, ainsi qu'un effet de vaisseau se déplaçant sur la page.  ",
    img: "",
    Link: "https://riku59.github.io/Projet-sass-Le-Resto/",
    Github: "https://github.com/riku59/Projet-sass-Le-Resto",
  },
  {
    id: 5,
    title: "OhMyFood",
    languages: ["HTML", "Sass"],
    infos:
      "Projet qui regroupe plusieurs effets. l'utilisateur peut cliquer sur un des restaurants, et choisir son menu  ",
    img: "",
    Link: "https://riku59.github.io/Projet_ocr_Ohmyfood/",
    Github: "https://github.com/riku59/Projet-sass-Le-Resto",
  },
  {
    id: 6,
    title: "React-Kasa",
    languages: ["Sass", "React"],
    infos:
      "Application en React,  qui permet de visualiser les appartement ou studio a louer en simulant un backEnd avec un fichier Json. En cliquant sur un des bien mis en location, Plusieurs informations sont affiché. ",
    img: "",
    Link: "https://helpful-souffle-6b656e.netlify.app/details/c67ab8a7",
    Github: "https://github.com/riku59/React_Kasa_v2",
  },
  {
    id: 7,
    title: "Génerateur de bulle",
    languages: ["HTML", "javascript"],
    infos:
      "Le programme génére des bulles de manières aléatoire et l'utilisateur peut exploser les bulles avecun clic de la souris.  ",
    img: "",
    Link: "https://riku59.github.io/Generateur_bulle/",
    Github: "https://github.com/riku59/Generateur_bulle",
  },
];
