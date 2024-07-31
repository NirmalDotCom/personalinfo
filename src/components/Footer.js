import React from 'react';
import "./FooterStyle.css";
import AudioPlayer from './AudioPlayer';

export default function Footer() {
  const styleSymbol = {
    fontSize: 20,
    marginRight: 7,
    marginLeft: 7
  }

  const today = new Date();
  const year = today.getFullYear();
  setInterval(date, 1000);


  return (
    <div className='footer'>
        Made with💙by Nirmal <span style={styleSymbol}>©</span> {year}. 
    </div>
     <div className="footer">
     <h1>My React App</h1>
     <AudioPlayer />
     <Footer />
   </div>
  )
}



