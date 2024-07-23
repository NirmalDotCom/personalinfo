import React from 'react';
import "./FooterStyle.css";


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
    <div class="audio-btn"><img src="../images/dvdplayer.png" class="vinyl-img rotate-disk" alt="Vinyl" />
	  <audio src="../images/ringplayer.mp3" autoplay=""></audio>
	  </div>
  )
}
