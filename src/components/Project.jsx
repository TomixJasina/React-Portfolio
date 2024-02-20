import React from "react";
import CurioCityImg from '../assets/images/curiocity.png';
import BootstrapImg from '../assets/images/bootstrap.png';
import CodeQuizImg from '../assets/images/codeQuiz.png';
import DailyPlannerImg from '../assets/images/dailyPlanner.png';
import WeatherAppImg from '../assets/images/weatherApp.png';
import PasswrodGeneratorImg from '../assets/images/passwrodGenerator.png';


function Projects() {

  const projects = [
    {
      id: 1,
      title: "Curio City",
      live_app_url: "https://paulinasiwko.github.io/CurioCity/",
      repository_url: "https://github.com/TomixJasina/CurioCity",
      image: CurioCityImg
    },
    {
        id: 2,
        title: "Weather App",
        live_app_url: "https://tomixjasina.github.io/Weather_dashboard/",
        repository_url: "https://github.com/TomixJasina/Weather_dashboard",
        image: WeatherAppImg
      },
      {
        id: 3,
        title: "Daily Planner",
        live_app_url: "https://github.com/TomixJasina/Daily_Planner",
        repository_url: "https://tomixjasina.github.io/Daily_Planner/",
        image: DailyPlannerImg
      },
      {
        id: 4,
        title: "Coding Quiz",
        live_app_url: "https://tomixjasina.github.io/Code_Quiz/index.html",
        repository_url: "https://github.com/TomixJasina/Code_Quiz",
        image: CodeQuizImg
      },
      {
        id: 5,
        title: "Password Generator",
        live_app_url: "https://github.com/TomixJasina/Password-Generator",
        repository_url: "https://tomixjasina.github.io/Password-Generator/",
        image: PasswrodGeneratorImg
      },
      {
        id: 6,
        title: "Bootstrap Portfolio",
        live_app_url: "https://tomixjasina.github.io/Bootstrap-Portfolio/",
        repository_url: "https://github.com/TomixJasina/Bootstrap-Portfolio",
        image: BootstrapImg
      }

]

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