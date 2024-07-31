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
    <div className='footer'>
        Made with💙by Nirmal <span style={styleSymbol}>©</span> {year}. 
    </div>
     <div className="audio-player">
     <button onClick={togglePlayPause}>
       {isPlaying ? 'Pause' : 'Play'}
     </button>
     <audio ref={audioRef} src="../images/test_music.mp3" />
   </div>
  )
}

