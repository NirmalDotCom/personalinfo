import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { playAudio, stopAudio, selectIsPlaying } from "./audioSlice.js";
import diskImg from "../images/dvdplayer.png";
import audioFile from "../images/ringplayer.mp3";

const PortfolioButton = () => {
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

  return (
    <div className='audio-btn'>
      <img src={diskImg} className={`vinyl-img ${isPlaying && "rotate-disk"}`} onClick={handleButtonClick} alt='Vinyl' />
      {isPlaying && <audio src={audioFile} autoPlay={isPlaying} />}
    </div>
  );
};

export default PortfolioButton;



// import audio1 from '../../assets/audio/Ring.mp3';
// import audio2 from '../../assets/audio/Bell.mp3';
// import audio3 from '../../assets/audio/Chime.mp3';

// const audioFiles = [audio1, audio2, audio3];
// const isPlaying = useSelector(selectIsPlaying);
// const [audioSrc, setAudioSrc] = useState(audioFiles[0]); // Default to the first file initially

// const handleButtonClick = () => {
//   if (isPlaying) {
//     dispatch(stopAudio());
//   } else {
//     const randomIndex = Math.floor(Math.random() * audioFiles.length);
//     setAudioSrc(audioFiles[randomIndex]); // Set a new random audio source
//     dispatch(playAudio());
//   }
// };
//       <button onClick={handleButtonClick}>{isPlaying ? 'Stop Audio' : 'Play Audio'}</button>
// {isPlaying && <audio src={audioSrc} autoPlay={isPlaying} />}