import React from 'react';
import profilePic from '../assets/profile-pic.png';
import linkedinIcon from '../assets/linkedin.png';
import githubIcon from '../assets/github.png';

function Profile() {
  return (
    <section id="profile" className="flex justify-center gap-20 h-80">
      <div className="w-80 h-80">
        <img src={profilePic} alt="Ashitosh Jagdale profile picture" />
      </div>
      <div className="text-center flex flex-col justify-center">
        <p>Hello, I'm</p>
        <h1 className="text-3xl">Ashitosh Jagdale</h1>
        <p className="text-xl mb-4">Frontend Developer</p>
        <div className="flex justify-center gap-4 mb-4">
          <button
            className="btn btn-color-2"
            onClick={() => window.open('./assets/Ashitosh-Jagdale-Resume.pdf')}
          >
            Download CV
          </button>
          <button
            className="btn btn-color-1"
            onClick={() => window.location.href = './#contact'}
          >
            Contact Info
          </button>
        </div>
        <div className="flex justify-center gap-4">
          <img
            src={linkedinIcon}
            alt="My LinkedIn profile"
            className="h-8 cursor-pointer"
            onClick={() => window.location.href = 'https://linkedin.com/in/ashitoshjagdale172'}
          />
          <img
            src={githubIcon}
            alt="My Github profile"
            className="h-8 cursor-pointer"
            onClick={() => window.location.href = 'https://github.com/ashitoshjagdale172'}
          />
        </div>
      </div>
    </section>
  );
}

export default Profile;
