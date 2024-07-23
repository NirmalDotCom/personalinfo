import React from 'react';
import "./HomeBannerStyle.css";
import cartoon from "../images/cartoon-compressed.png";

const toggle = document.querySelector(".toggle");
const container = document.querySelector(".container");
const sun = document.querySelector(".fa-sun");

toggle.addEventListener("click", change);

function change() {
  toggle.classList.toggle("toggleel");
  container.classList.toggle("backtel");
  sun.classList.toggle("sun");
}

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
      <div class="card">
        <i class="fas fa-sun"></i>
        <i class="fas fa-moon"></i>
      </div>
      <div class="toggle"></div>

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
