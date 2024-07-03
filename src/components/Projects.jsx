import React from 'react';
import project1 from '../assets/project-1.jpeg';
import project2 from '../assets/project-2.png';
import project3 from '../assets/project-3.png';
import arrowIcon from '../assets/arrow.png';
import "./style.css"
const Projects = () => {
  return (
    <section id="projects">
      <p className="section__text__p1">Browse My Recent</p>
      <h1 className="title">Projects</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container color-container">
            <div className="article-container">
              <img
                src={project1}
                alt="Project 1"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">Book Mart</h2>
          </div>
          <div className="details-container color-container">
            <div className="article-container">
              <img
                src={project2}
                alt="Project 2"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">Eco-mart</h2>
          </div>
          <div className="details-container color-container">
            <div className="article-container">
              <img
                src={project3}
                alt="Project 3"
                className="project-img"
              />
            </div>
            <h2 className="experience-sub-title project-title">Facebook clone</h2>
          </div>
        </div>
      </div>
      <img
        src={arrowIcon}
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => { window.location.href = './#contact'; }}
      />
    </section>
  );
};

export default Projects;