import React from 'react';
import "./HomeBannerStyle.css";
import cartoon from "../images/cartoon-compressed.png";

const htmlEl = document.documentElement,
outputExample = document.getElementById('output');

let savedTheme = 'light';

// ********************************************************************
//  NOTE: The localStorage example WILL NOT WORK HERE ON STACKOVERFLOW
//        Instead it will throw a "SecurityError" and rightfully so...
//        You'll have to use that part of the example in your
//        own project to see it in action...... JUST FYI.
//        So you will need to UNCOMMENT the commented out stuff for
//        the localstorage example to work. Left it commented out for
//        for other readers to not see the valid securityerror....
// ********************************************************************

// Toggle the theme and update their local storage.
toggleTheme = (bool) => {
const theme = bool ? 'light' : 'dark';
htmlEl.dataset.theme = theme;
// localStorage.setItem('savedTheme', theme);

outputExample.innerText = `${theme} theme`;
}

// Handle their saved preferred theme.
setSavedTheme = () => {

// If there is no current theme in localstorage then give them one as a default.
// Like for first time visitors...
// Uncomment this block and the localstorage piece above for the localstorage example.
/*
if (localStorage.getItem('savedTheme') === null) {
localStorage.setItem('savedTheme', savedTheme);
} else {
savedTheme = localStorage.getItem('savedTheme');
}
*/

htmlEl.dataset.theme = savedTheme;
outputExample.innerText = `${savedTheme} theme`;
}

// Set the default.
setSavedTheme();
export default function HomeBanner({id}) {
  return (
    <div className="home" id={id}> 
        <div className='content'>
            <div className="wrapper">
            <div class="slide-toggle">
  <input id="guidLater"
         type="checkbox" checked
         onchange="toggleTheme(this.checked)"/>
  <label for="guidLater">
    <div><i class="fas fa-sun"></i></div>
    <div><i class="fas fa-moon"></i></div>
  </label>
</div>

<div id="output"></div>
              <div className="name">Nirmal Raj Kirubakaran</div>
              <div className="staticTitle">
                Software
                <div className='hrLine'></div>
              </div>
              <ul className="dynamicTitle">
                <li>+<span>Developer</span></li>
              </ul>
              <a className='btn' href="https://www.linkedin.com/in/nirmal-raj-9a26b5220/" target="_blank" rel="noopener noreferrer">Hire Me</a>
            </div>
        </div>
        <div className="mask">
            <img className='bg' src={cartoon} alt="girl-with-laptop" />
        </div>
    </div>
  )
}
