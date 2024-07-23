import React from 'react';
import "./FooterStyle.css";
import imgdvd from "../images/dvdplayer.png";
import audvd from "../images/ringplayer.mp3";



export default function Footer() {
  const styleSymbol = {
    fontSize: 20,
    marginRight: 7,
    marginLeft: 7
  }
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className='footer'>
        Made with ❤ by Nirmal <span style={styleSymbol}>©</span> {year}
    </div>
    <div className="audio-btn">
      <img src={imgdvd} class="vinyl-img rotate-disk" alt="Vinyl" />
	    <audio src={audvd} autoplay=""></audio>
	  </div>
  )
}
