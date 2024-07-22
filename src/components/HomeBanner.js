import React from 'react';
import "./HomeBannerStyle.css";
import cartoon from "../images/cartoon-compressed.png";

// If CSS Custom Properties or Variables are supported
if (window.CSS && CSS.supports("color", "var(--primary)")) {
	const radios = document.querySelectorAll('input[type="radio"]');

	const toggleColorMode = function toggleColorMode(e) {
		//console.log(e.currentTarget.value);
		// Switch to Light Mode
		if (e.currentTarget.value === "off") {
			// Sets the custom html attribute
			document.documentElement.setAttribute("color-mode", "dark");
			// Sets the user's preference in local storage
			localStorage.setItem("color-mode", "dark");
			return;
		}
		/* Switch to Light Mode */
		document.documentElement.setAttribute("color-mode", "light");
		localStorage.setItem("color-mode", "light");
	};

	radios.forEach(function (radio) {
		radio.addEventListener("click", toggleColorMode);
	});
} else {
	//hide the switcher
	const switcherContainer = document.querySelectorAll(".head-widgets")[0];
	switcherContainer.style.display = "none";
}


export default function HomeBanner({id}) {
  return (
    <div className="home" id={id}> 
        <div className='content'>
            <div className="wrapper">
            <div class="switch">
					<input type="radio" id="on" name="status" value="on" checked />
					<label for="on">Light</label>
					<input type="radio" id="off" name="status" value="off" />
					<label for="off">Dark</label>
					<span class="toggle-outside"><span class="toggle-inside"></span></span>
				</div>
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
