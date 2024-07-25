import React, { useState } from "react";
// import ReactParticles from "../ParticleContainer/ParticlesContainer";
import { useSelector } from "react-redux";
import PixelTransitionCanvas from "../customs/canvas/Canvas";
import { Bio } from "../customs/constants";
import TypeWriter from "../customs/type_writer/Typewriter";
import "./AboutMeStyle.css";

function Home() {
    const toggleMode = useSelector((state) => state.themeSlice.toggleMode);
    const [transitionActive, setTransitionActive] = useState(false);
    const [confClassName, setConfClassName] = useState('')

    // const darkGradient = "linear-gradient(to right, #fff 0%, var(--green-bg-color) 100%)";
    // Light : Dark
    const headerStyle = {
        background: toggleMode ? "var(--background-color-light)" : "var(--background-color-dark)",
        // background: toggleMode ? darkGradient : "var(--background-color-dark)",
        color: toggleMode ? "var(--text-color-light)" : "var(--text_primary-dark)",
        transition: "all 0.6s linear"
    };

    const handleTransitionComplete = () => {
        setTransitionActive(false);
    };

    const handleConfetti = () => {
        setConfClassName("animate");
        setTimeout(function () {
            setConfClassName("");
        }, 700);
    }

    return (
        <>
            {transitionActive ? (
                <PixelTransitionCanvas
                    active={transitionActive}
                    onComplete={handleTransitionComplete}
                />
            ) : (
                <div className="home" style={headerStyle}>
                    {/* <ReactParticles /> */}
                    <div className="profile">
                        <div className="front-desc">
                            <p className="user-name-header">{Bio.intro} <br /> <span className="name-highlight">{Bio.name}</span></p>
                            <TypeWriter />
                        </div>
                        <div className={`profile-img ${confClassName}`} onClick={handleConfetti} onTouchStart={(e) => e.preventDefault()}></div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Home;