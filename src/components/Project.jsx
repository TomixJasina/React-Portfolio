import React from "react";
import { useState, useEffect } from "react";
import portfolioData from "../assets/projects/projects.json";

function Projects() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    setProjects(portfolioData);
  }, []);

  return (
    <>
      <div className="container my-5">
      <h1 className="text-white m-3">My projects</h1>
        <div className="row row-cols-1 row-cols-md-2 g-4">
          {projects.map((project) => {
            return (
              <div className="col" key={project.id}>
                <div className="card bg-black" >
                  <img
                    src={project.image}
                    className="card-img-top"
                    alt={project.title}
                    height="350px"
                  ></img>
                  <div className="card-img">
                    <h3 className="card-title text-white">{project.title}</h3>
                    <div className="info-wraper">
                      <div className="links">
                        <a
                          className="mx-3 btn btn-dark"
                          href={project.live_app_url}
                        >
                          Deployed
                        </a>
                        <a
                          className="mx-3 btn btn-dark"
                          href={project.repository_url}
                        >
                          Github
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Projects;