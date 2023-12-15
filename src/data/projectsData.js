import { library } from "@fortawesome/fontawesome-svg-core";
import { faReact, faHtml5, faSass } from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faReact, faHtml5, faSass);

export const projectsData = [
  {
    id: 0,
    title: "Vaisseau et style",
    languages: ["HTML", "Sass"],
    infos:
      "Projet qui regroupe différent style  utile, ainsi qu'un effet de vaisseau se déplaçant sur la page.  ",
    img: "",
    Link: "https://riku59.github.io/Vaisseau_css/",
    Github: "https://github.com/riku59/Vaisseau_css",
  },

  {
    id: 1,
    title: "The resto",
    languages: ["HTML", "Sass"],
    infos:
      "Un de mes premiers projet, qui m'as permis de travailler Sass  pour faire un site estéthique  ",
    img: "",
    Link: "https://riku59.github.io/Projet-sass-Le-Resto/",
    Github: "https://github.com/riku59/Projet-sass-Le-Resto",
  },

  {
    id: 2,
    title: "OhMyFood",
    languages: ["HTML", "Sass"],
    infos:
      "Projet qui regroupe plusieurs effets. l'utilisateur peut cliquer sur un des restaurants, et choisir son menu  ",
    img: "",
    Link: "https://riku59.github.io/Projet_ocr_Ohmyfood/",
    Github: "https://github.com/riku59/Projet_ocr_Ohmyfood",
  },
  {
    id: 3,
    title: "Gaming Campus",
    languages: ["HTML", "Sass"],
    infos: "Clone du site gaming campus en html et css  ",
    img: "",
    Link: "https://riku59.github.io/Gaming_campus/",
    Github: "https://github.com/riku59/Gaming_campus",
  },
  {
    id: 4,
    title: "Joke App",
    languages: ["HTML", "JavaScript"],
    infos:
      "Projet contenant une API Blague. A chaque clique,  une nouvelle blague apparait   ",
    img: "",
    Link: "https://riku59.github.io/joke_app/",
    Github: "https://github.com/riku59/joke_app",
  },

  {
    id: 5,
    title: "Génerateur de bulle",
    languages: ["HTML", "javascript"],
    infos:
      "Le programme génére des bulles de manières aléatoire et l'utilisateur peut exploser les bulles avecun clic de la souris.  ",
    img: "",
    Link: "https://riku59.github.io/Generateur_bulle/",
    Github: "https://github.com/riku59/Generateur_bulle",
  },
  {
    id: 6,
    title: "React-Kasa",
    languages: ["Sass", "React"],
    infos:
      "Application en React,  qui permet de visualiser les appartement ou studio a louer en simulant un backEnd avec un fichier Json. En cliquant sur un des bien mis en location, Plusieurs informations sont affiché. ",
    img: "",
    Link: "https://react-kasa.netlify.app",
    Github: "https://github.com/riku59/React_Kasa_v2",
  },
  {
    id: 7,
    title: "ArgentBank",
    languages: ["React", "Sass", "Redux"],
    infos:
      "Projet réaliser en React en utilisant Redux. L'utilisateur peut se connecter, et visualiser son argent et ses transactions. Il peut également modifier son nom d'utilisateur. Le nom d'utilisateur est affiché directement grace a redux. ",
    img: "",

    Github: "https://github.com/riku59/ArgentBank-website",
  },
  {
    id: 8,
    title: "ReactMovie",
    languages: ["React", "Sass"],
    infos:
      "Projet réalisé en React, qui permet de rechercher un film par mot clé grace a une API. L'utilisateur peut ajouter des films dans ses coups de coeurs et les supprimer.",
    img: "ReactMovie.PNG",
    Link: "https://reaactmovies.netlify.app",
    Github: "https://github.com/riku59/React-Movie",
  },
];
