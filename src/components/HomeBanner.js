import React from 'react';
import "./HomeBannerStyle.css";
import cartoon from "../images/cartoon-compressed.png";
document.querySelector("#switch").oninput = () => {
	if (document.querySelector("#switch").checked == true) {
		document.querySelector("body").classList.add("dark");
	} else {
		document.querySelector("body").classList.remove("dark");
	}
};
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
              <div class="switch">
	<input id="switch" class="switch__input" name="switch" type="checkbox">
	<label class="switch__label" for="switch"></label>
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
