import React, { useState } from 'react';
import "./HomeBannerStyle.css";
import cartoon from "../images/cartoon-compressed.png";

export default function HomeBanner({ id }) {
  const [theme, setTheme] = useState('light'); // Initial theme is light

  // Function to toggle between light and dark themes
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`home ${theme}`} id={id}>
      <div className='content'>
        <div className="wrapper">
          <div className="staticTitle">
            Software
            <div className='hrLine'></div>
          </div>
          <ul className="dynamicTitle">
            <li>+<span>Developer</span></li>
          </ul>
        </div>
      </div>
      <div className="mask">
        <img className='bg' src={cartoon} alt="girl-with-laptop" />
      </div>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}