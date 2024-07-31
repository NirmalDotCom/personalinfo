import React, { useRef, useState } from 'react';
import "./FooterStyle.css";
import AudioPlayer from './AudioPlayer';
import './AudioPlayerStyle.css'; // Optional: For custom styles

export default function Footer() {
  const styleSymbol = {
    fontSize: 20,
    marginRight: 7,
    marginLeft: 7
  }

  const today = new Date();
  const year = today.getFullYear();

  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  


  return (
    <div>
    <span>Made with 💙 by Nirmal</span>
    <div className="audio-player">
      <button onClick={togglePlayPause}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
    </div>
  </div>
  )
}

