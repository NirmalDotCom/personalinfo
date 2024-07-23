import React from 'react';
import { playAudio, stopAudio, selectIsPlaying } from "./audioSlice.js";
import useSelector from "react-redux";
import "./FooterStyle.css";
import imgdvd from "../images/dvdplayer.png";
import testaud from "../images/ringplayer.mp3";

export default function Footer() {
  const styleSymbol = {
    fontSize: 20,
    marginRight: 7,
    marginLeft: 7
  }

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
  }

  const today = new Date();
  const year = today.getFullYear();
  return (
    <div>
   
        <div className='footer'>
        <img className="nirmal-img rotate-disk" src={imgdvd} alt="Profile" ></img> &nbsp;&nbsp;
        <audio src={testaud} ></audio>
        Made with ❤ by Nirmal <span style={styleSymbol}>©</span> {year} 
        </div>
    </div>

     
  )
}
