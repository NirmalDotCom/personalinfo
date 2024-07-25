import React from "react";
import "./AboutMeStyle.css";
import myProfile from "../images/profile-image2.jpg";

export default function AboutMe({ id }) {
  return (
      <div className="about-container" id={id}>
        <div className="profile-photo">
          <div className="heading"> About Me</div>
          <img className="profile-img" src={myProfile} alt="Profile"></img>
        </div>
        <div className="name">Nirmal</div>
        <div className="education_content">
          <div className="education_data">
            <div>
              <h3 className="education_title">Bachelor of Technology</h3>
              <span className="education_place">Aditya College of Engineering, Andhra Pradesh.</span>
              <div className="education_duration">
                 2020 - 6.74 CGPA
              </div>
            </div>
            <div>
              <span className="education_rounder" ></span>
              <span className="education_line" ></span>
            </div>
          </div>
          <div className="education_data">
            <div></div>

            <div>
              <span className="education_rounder" ></span>
              <span className="education_line" ></span>
            </div>

            <div>
              <h3 className="education_title">Diploma</h3>
              <span className="education_place">Aditya Engineering College, Andhra Pradesh.</span>
              <div className="education_duration">
                2016 - 74.60%
              </div>
            </div>
          </div>
          <div className="education_data">
            <div>
              <h3 className="education_title">10th Standard</h3>
              <span className="education_place">Pragati, Andhra Pradesh.</span>
              <div className="education_duration">
                2013 - 8.2 GPA
              </div>
            </div>
            <div>
              <span className="education_rounder" ></span>
              <span className="education_line"></span>
            </div>
          </div>
        </div>
        {/* <div className="aboutMe-text">
          <h3>Hey there, 👋</h3>
          I'm <span> Nirmal </span> BCA, from Chennai, India. I build websites with a focus on responsiveness, accessibility and pleasing aesthetics. Being well versed in all the key languages allows me to rapidly design, code and deploy in an organized and efficient manner. While I specialize in <span>frontend development,</span> I'm also delving into <span>backend technologies.</span> I'm all ears for <span>new opportunities</span> to create awesome software solutions. Let's team up and cook up some digital wonders together❤️.
          <br/> <br/> */}
          {/* Beyond coding, <span>I'm an artist at heart❤️</span> – you'll often find me lost in the world of sketches and colors. I really enjoy being creative, so I like to spend my free time drawing, sketching, and painting. It's a great way for me to unwind and tap into my creative side.
          Want to know more about me? Feel free to <a className='resume' href="https://drive.google.com/file/d/1hROCoNMpIkGQahB0E7v-OFbXlv9EHJrB/view?usp=sharing" target="_blank" rel="noopener noreferrer">explore my resume.</a> */}
        {/* </div> */}
      </div>
  );
}
