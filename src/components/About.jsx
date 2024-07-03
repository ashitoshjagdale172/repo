import React from 'react';
import aboutPic from '../assets/about-pic.jpeg';
import experienceIcon from '../assets/experience.png';
import educationIcon from '../assets/education.png';
import arrowIcon from '../assets/arrow.png';
// // import "./style.css"
// import "./about.css"
function About() {
  const handleArrowClick = () => {
    window.location.href = './#experience';
  };

  return (
    <section id="about">
      <p className="section__text__p1">Get To Know More</p>
      <h1 className="title">About Me</h1>
      <div className="section-container">
        <div className="section__pic-container">
          <img
            src={aboutPic}
            alt="Profile picture"
            className="about-pic h-[400px] w-[400px]"
          />
        </div>
        <div className="about-details-container">
          <div className="about-containers">
            <div className="details-container">
              <img
                src={experienceIcon}
                alt="Experience icon"
                className="icon"
              />
              <h3 className=' px-[10%]'>Experience</h3>
              <p>1+ month <br />Frontend Development</p>
            </div>
            <div className="details-container">
              <img
                src={educationIcon}
                alt="Education icon"
                className="icon"
              />
              <h3>Education</h3>
              <p>B.Sc. Bachelor's Degree<br />M.Sc. Master's Degree</p>
            </div>
          </div>
          <div className="text-container">
            <p>
              I am Ashitosh Jagdale, a passionate computer science enthusiast
              based in Pune. With a strong educational background in both
              bachelor's and master's degrees in computer science, I have honed
              my skills in various technologies including React.js, Node.js,
              MongoDB, and more. Beyond academics and technology, I actively
              engage in extracurricular activities such as participating in NCC,
              where I have developed leadership and teamwork skills. I am
              dedicated to continuous learning and strive to contribute
              positively to the field of web development / computer science
              through innovative solutions and collaborative endeavors.
            </p>
          </div>
        </div>
      </div>
      <img
        src={arrowIcon}
        alt="Arrow icon"
        className="icon arrow"
        onClick={handleArrowClick}
      />
    </section>
  ); 
}

export default About;
