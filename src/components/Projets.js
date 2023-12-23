import React, { useRef } from "react";
import { projectsData } from "../data/projectsData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import useScrollVisibility from "../data/useScrollVisibility";

import {
  faHtml5,
  faJs,
  faReact,
  faSass,
} from "@fortawesome/free-brands-svg-icons";

const getLanguageIcon = (competence) => {
  switch (competence.toLowerCase()) {
    case "react":
      return <FontAwesomeIcon icon={faReact} />;
    case "html":
      return <FontAwesomeIcon icon={faHtml5} />;
    case "sass":
      return <FontAwesomeIcon icon={faSass} />;

    case "javascript":
      return <FontAwesomeIcon icon={faJs} />;

    default:
      return competence;
  }
};

const filteredProjects = projectsData.filter((project) => {
  const trimmedTitle = project.title.trim();
  if (trimmedTitle === "") {
  }
  return trimmedTitle !== "";
});

const Projets = ({ language }) => {
  const projetsRef = useRef(null);
  const isVisible = useScrollVisibility(projetsRef);
  return (
    <div
      id="project"
      className={`container-projet ${isVisible ? "visible" : ""} ${
        language ? "language" : ""
      }`}
    >
      <h3 className={isVisible ? "visible" : ""}>
        {language ? "Projets" : "Projects"}
      </h3>
      <div className="wrapper">
        <div
          className="container"
          id={`container-1${isVisible ? "visible" : ""}`}
          ref={projetsRef}
        >
          {filteredProjects.slice(0, 4).map((project, index) => (
            <React.Fragment key={project.id}>
              <input
                type="radio"
                name="slide"
                id={`c${index + 1}`}
                defaultChecked={index === 0}
              />
              <label
                htmlFor={`c${index + 1}`}
                className={`card container-projet project${index + 1}`}
              >
                <div className="row">
                  <div className="icon">{index + 1}</div>
                  <div className="description">
                    <div className="description-title">
                      <h4>{project.title}</h4>
                    </div>
                    <div className="description-language">
                      <p>
                        {project.languages.map((language, langIndex) => (
                          <React.Fragment key={langIndex}>
                            {langIndex > 0 && ", "}
                            {getLanguageIcon(language)}
                            {" " + language}
                          </React.Fragment>
                        ))}
                      </p>
                    </div>
                    <div className="description-info">
                      <p>{language ? project.infos : project.infosTranslate}</p>
                    </div>
                    <div className="link-project">
                      <a href={project.Link} target="_blank">
                        {language ? "Voir le projet" : "View project"}
                      </a>
                    </div>
                    <div className="link-github">
                      <a href={project.Github} target="_blank">
                        {language ? "Lien github" : "Github link"}
                      </a>
                    </div>
                  </div>
                </div>
              </label>
            </React.Fragment>
          ))}
        </div>
        <div
          className="container"
          id={`container2${isVisible ? "visible" : ""}`}
        >
          {filteredProjects.slice(4, 9).map((project, index) => (
            <React.Fragment key={`project-${index + 5}`}>
              <input
                type="radio"
                name="slide"
                id={`c${index + 5}`} // Commencez à partir de 5 pour les nouveaux projets
              />
              <label
                htmlFor={`c${index + 5}`}
                className={`card container-projet project${index + 5}`}
              >
                <div className="row">
                  <div className="icon">{index + 5}</div>
                  <div className="description">
                    <div className="description-title">
                      <h4>{project.title}</h4>
                    </div>
                    <div className="description-language">
                      <p>
                        {project.languages.map((language, langIndex) => (
                          <React.Fragment key={langIndex}>
                            {langIndex > 0 && ", "}
                            {getLanguageIcon(language)}
                            {" " + language}
                          </React.Fragment>
                        ))}
                      </p>
                    </div>
                    <div className="description-info">
                      <p>{project.infos}</p>
                    </div>
                    <div className="link-project">
                      <a href={project.Link} target="_blank">
                        Voir le projet
                      </a>
                    </div>
                    <div className="link-github">
                      <a href={project.Github} target="_blank">
                        Lien github
                      </a>
                    </div>
                  </div>
                </div>
              </label>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projets;
