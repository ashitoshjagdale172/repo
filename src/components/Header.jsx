import React from 'react'
import profile_pic from "../assets/profile-pic.png"
import git from "../assets/github.png"
import linkedin from "../assets/linkedin.png"
const Header = () => {
    const handleDownloadCV = () => {
      window.open('../assets/Ashitosh-Jagdale-Resume.pdf');
    };
  
    const handleContactInfo = () => {
      window.location.href = './#contact';
    };
  
    const handleSocialLink = (url) => {
      window.location.href = url;
    };
  
    return (
      <section id="profile" className='mt-[10%]'>
        <div className="section__pic-container">
          <img
            src={profile_pic}
            alt="Ashitosh Jagdale profile picture"
          />
        </div>
        <div className="section__text">
          <p className="section__text__p1">Hello, I'm   </p>
          <h1 className="title">Ashitosh Jagdale</h1>
          <p className="section__text__p2">Frontend Developer</p>
          <div className="btn-container">
            <button className="btn btn-color-2" onClick={handleDownloadCV}>
              Download CV
            </button>
            <button className="btn btn-color-1" onClick={handleContactInfo}>
              Contact Info
            </button>
          </div>
          <div id="socials-container">
            <img
              src={linkedin}
              alt="My LinkedIn profile"
              className="icon"
              onClick={() => handleSocialLink('https://linkedin.com/in/ashitoshjagdale172')}
            />
            <img
              src={git}
              alt="My Github profile"
              className="icon"
              onClick={() => handleSocialLink('https://github.com/ashitoshjagdale172')}
            />
          </div>
        </div>
      </section>
    );
  };
  

export default Header
