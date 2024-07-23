import React from 'react';
import "./FooterStyle.css";
import imgdvd from "../images/dvdplayer.png";
import audsong from "../images/ringplayer.mp3";

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
        <img className="nirmal-img rotate-disk" src={imgdvd} alt="Profile" ></img> &nbsp;&nbsp;
        <audio src="{audsong}" autoplay=""></audio>
        Made with ❤ by Nirmal <span style={styleSymbol}>©</span> {year}
        </div>
    </div>

     
  )
}
