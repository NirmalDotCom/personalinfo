import React from 'react';
import { playAudio, stopAudio, selectIsPlaying } from "./audioSlice.js";
import { useDispatch, useSelector } from "react-redux";
import "./FooterStyle.css";
import imgdvd from "../images/dvdplayer.png";
import testaud from "../images/ringplayer.mp3";

export default function Footer() {
  const styleSymbol = {
    fontSize: 20,
    marginRight: 7,
    marginLeft: 7
  }

  const dispatch = useDispatch();
  const isPlaying = useSelector(selectIsPlaying);

  const stopAnimation = () => {
    const stop = setTimeout(() => {
      dispatch(stopAudio());
      console.log('dispatch: ', 'dispatch');
    }, 184000)

    return () => clearTimeout(stop)
  }

  const handleButtonClick = () => {
    if (isPlaying) {
      dispatch(stopAudio());
      console.log('stopAudio: ', 'stopAudio');
    } else {
      dispatch(playAudio());
      console.log('playAudio: ', 'playAudio');
    }

    stopAnimation()
  };

  const today = new Date();
  const year = today.getFullYear();
  return (
    <div>
   
        <div className='footer'>
        <img src={imgdvd} className={`nirmal-img ${isPlaying && "rotate-disk"}`} onClick={handleButtonClick} alt='Vinyl' />
      {isPlaying && <audio src={testaud} autoPlay={isPlaying} />}
        Made with ❤ by Nirmal <span style={styleSymbol}>©</span> {year} 
        </div>
    </div>

     
  )
}
