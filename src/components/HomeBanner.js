import React from 'react';
import "./HomeBannerStyle.css";
import cartoon from "../images/cartoon-compressed.png";
import cartoonLight from "../images/cartoon-compressed-light.png"; // Light theme image
import cartoonDark from "../images/cartoon-compressed-dark.png"; // Dark theme image

export default function HomeBanner({id}) {
  const [theme, setTheme] = useState('light'); // State for theme

  // Function to toggle between light and dark themes
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  // Determine which image to use based on theme
  const cartoonImage = theme === 'light' ? cartoonLight : cartoonDark;

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
            <img className='bg' src={cartoonImage} alt="girl-with-laptop" />
        </div>
        <button onClick={toggleTheme} className="theme-toggle">
          {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
        </button>
    </div>
  )
}
