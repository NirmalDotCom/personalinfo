import React from 'react';
import "./FooterStyle.css";
import myProfile from "../images/dvdplayer.png";

export default function Footer() {
  const styleSymbol = {
    fontSize: 20,
    marginRight: 7,
    marginLeft: 7
  }
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div>
   
        <div className='footer'>
        <img className="nirmal-img rotate-disk" src={myProfile} alt="Profile" ></img>
        Made with ❤ by Nirmal <span style={styleSymbol}>©</span> {year}
        </div>
    </div>

     
  )
}
