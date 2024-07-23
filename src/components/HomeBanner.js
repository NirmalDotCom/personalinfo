import React from 'react';
import "./HomeBannerStyle.css";
import cartoon from "../images/cartoon-compressed.png";
const setTheme = theme => document.documentElement.className = theme;
export default function HomeBanner({id}) {
  return (
    <div className="home" id={id}> 
        <div className='content'>
            <div className="wrapper">
              <div className="name">Nirmal Raj Kirubakaran</div>
              <div className="staticTitle">
                Software
                <div className='hrLine'></div>
              </div>
              <div class="toggle-container">
    <button class="theme-btn light" onclick="setTheme('light')" title="Light mode">
      <img src="https://assets.codepen.io/210284/sun.png" alt="sun" />
    </button>
    <button class="theme-btn dark" onclick="setTheme('dark')" title="Dark mode">
      <img src="https://assets.codepen.io/210284/moon.png" alt="moon" />
    </button>
  </div>
              <ul className="dynamicTitle">
                <li>+<span>Developer</span></li>
              </ul>
              <a className='btn' href="https://www.linkedin.com/in/nirmal-raj-9a26b5220/" target="_blank" rel="noopener noreferrer">Hire Me</a>
            </div>
        </div>
        <div className="mask">
            <img className='bg' src={cartoon} alt="nirmal-with-laptop" />
        </div>
    </div>
  )
}
