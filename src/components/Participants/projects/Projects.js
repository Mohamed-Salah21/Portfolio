import React from "react";
import { dataProjects } from "../data/Data";
import Zoom from "react-reveal/Zoom";
const Projects = () => {
  const { projects } = dataProjects;
  const getProjects = () => {
    const project = projects.map((project) => {
      return (
        <Zoom>
          <div className="project">
            <div className="apparent-div">
              <img src={project.src} alt={project.name} />
              <div className="project-name">
                <span> {project.name} </span>
              </div>
            </div>
            <div className="hidden-div">
              <div className="a-element">
                <a href={project.link} rel="noreferrer" target="_blank">
                  { window.location.pathname === "/projects-en" ? "show" : "عرض" }
                </a>
              </div>
            </div>
          </div>
        </Zoom>
      );
    });
    return project;
  };
  return <> {getProjects()} </>;
};

export default Projects;
