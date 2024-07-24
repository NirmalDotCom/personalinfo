import React from "react";
import "./index.css";
import { playAudio, stopAudio, selectIsPlaying } from "./audioSlice.js";
import { useDispatch, useSelector } from "react-redux";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HomeBanner from "./components/HomeBanner";
import ProjectCard from './components/ProjectCard'
import AboutMe from './components/AboutMe'
import SkillCard from './components/SkillCard'
import ContactForm from './components/ContactForm'
import AnimatedCursor from "react-animated-cursor"


function App() {
  return (
    const dispatch = useDispatch();
  const isPlaying = useSelector(selectIsPlaying);
    <>
    <AnimatedCursor
      color="#fff"
      innerSize={8}
      outerSize={50}
      innerScale={1}
      outerScale={2.2}
      outerAlpha={0}
      outerStyle={{
        background: '#ffffff',
        mixBlendMode: 'exclusion'
      }}
      innerStyle={{
        backgroundColor: '#F94892'
      }}
    />
    <div>
      <Navbar />
      <HomeBanner id = "home"/>
      <ProjectCard
        id = "project"
        className = "odd"
        projectTitle="Wiggles: Pet Care Made Easy"
        projectDesc="A one-stop solution for pet data management, automated vaccinations, QR-based lost pet recovery, and organizing pet playdates."
        projectLink="https://github.com/NirmalDotCom/personalinfo"
        deployedProjectLink="https://wiggles.vercel.app"
        projectImg={require('./images/projectWiggles.jpg')}
      />

      <ProjectCard
        projectTitle="Animated Card: featuring the latest glassmorphism trend"
        projectDesc="React JS provided me the flexibility needed to create an interactive card with a glass-like effect, which adds a sense of depth and dimension to the user interface"
        projectLink="https://github.com/NirmalDotCom/personalinfo"
        deployedProjectLink="https://github.com/NirmalDotCom/personalinfo"
        projectImg={require('./images/projectGlassmorphism.png')}
      />

      <ProjectCard
        className = "odd"
        projectTitle="Rog-free: accessible anytime, anywhere"
        projectDesc="An approach to target and heal specific health conditions by transforming the living room into a yoga studio"
        projectLink="https://github.com/NirmalDotCom/personalinfo"
        deployedProjectLink="https://github.com/NirmalDotCom/personalinfo"
        projectImg={require('./images/projectRogfree.png')}
      />
      <AboutMe id = 'about' />
      <SkillCard id = 'skills' />
      <ContactForm id = 'contact' />
      <Footer />
    </div>
    </>
  );
}

export default App;
