import React from 'react';
import "./HomeBannerStyle.css";
import cartoon from "../images/cartoon-compressed.png";

const darkTheme = "dark-theme";

// Add dark theme change here
const darkThemeSetUp = () => {
  if (getCurrentTheme() === "dark") {
    document.getElementById("toggleBtn").checked = true;
  } else {
    document.getElementById("toggleBtn").checked = false;
  }
};

const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";

//   Get user's theme preference from local storage
const selectedTheme = localStorage.getItem("selected-theme");
if (selectedTheme === "dark") {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  darkThemeSetUp();
}

const themeButton = document.getElementById('toggleBtn');
if (el) {
  el.addEventListener('click', swapper, false);
}

window.addEventListener("change", (event) => {
  const el = document.getElementById('toggleBtn');
  if (el) {
    el.addEventListener('click', swapper, false);
  }
});


export default function HomeBanner({id}) {
  return (
    <div className="home" id={id}> 
        <div className='content'>
            <div className="wrapper">
          <input type="checkbox" class="checkbox" id="toggleBtn" />
          <label class="switch" for="toggleBtn">
            <i class="fas fa-moon"></i>
            <i class="fas fa-sun"></i>
            <div class="ball"></div>
          </label>
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
