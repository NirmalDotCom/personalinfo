import React from 'react';
import Typewriter from "typewriter-effect";
import "./Typewriter.css";

function TypeWriter() {
    return (
        <Typewriter
            options={{
                strings: [
                    "Front End Developer",
                    "Full Stack Aspirant"
                    // "MERN Stack Aspirant",
                    // "React Js Developer",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
            }}
        />
    );
}

export default TypeWriter;