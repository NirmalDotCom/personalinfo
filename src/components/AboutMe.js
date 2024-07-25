import React, { useState } from "react";
import "./AboutMeStyle.css";
import myProfile from "../images/profile-image2.jpg";

export default function AboutMe({ id }) {
  const [activeTab, setActiveTab] = useState("about");
  const [activeTab1, setActiveTab] = useState("skills");
  const [activeTab2, setActiveTab] = useState("projects");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="about-container" id={id}>
      <div className="profile-photo">
        <div className="heading"> About Me</div>
        <img className="profile-img" src={myProfile} alt="Profile" />
      </div>

      <div className="tab-container">
        <div className="tab-buttons">
          <button
            className={activeTab === "about" ? "active" : ""}
            onClick={() => handleTabChange("about")}
          >
            About
          </button>
          <button
            className={activeTab1 === "skills" ? "active" : ""}
            onClick={() => handleTabChange("skills")}
          >
            Skills
          </button>
          <button
            className={activeTab2 === "projects" ? "active" : ""}
            onClick={() => handleTabChange("projects")}
          >
            Projects
          </button>
        </div>

        <div className="tab-content">
          {activeTab === "about" && (
            <div className="aboutMe-text">
              <h3>Hey there, 👋</h3>
              I'm <span> XXX </span> BCA, from Chennai, India. I build websites with a focus on responsiveness, accessibility and pleasing aesthetics. Being well versed in all the key languages allows me to rapidly design, code and deploy in an organized and efficient manner. While I specialize in <span>frontend development,</span> I'm also delving into <span>backend technologies.</span> I'm all ears for <span>new opportunities</span> to create awesome software solutions. Let's team up and cook up some digital wonders together❤️.
            </div>
          )}

          {activeTab1 === "skills" && (
            <div className="skills-content">
              <h3>Skills</h3>
              <ul>
                <li>Frontend Development</li>
                <li>Responsive Web Design</li>
                <li>JavaScript (ES6+)</li>
                <li>HTML5 & CSS3</li>
                <li>React.js</li>
                <li>Backend Development (Node.js, Express)</li>
              </ul>
            </div>
          )}

          {activeTab2 === "projects" && (
            <div className="projects-content">
              <h3>Projects</h3>
              <p>List of projects...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
