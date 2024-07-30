import React from 'react';
import "./FooterStyle.css";

export default function Footer() {
  const styleSymbol = {
    fontSize: 20,
    marginRight: 7,
    marginLeft: 7
  }

  const today = new Date();
  const date = new Date();
  const year = today.getFullYear();
  setInterval(date, 1000);


  return (
    <div className='footer'>
        Made with💙by Nirmal <span style={styleSymbol}>©</span> {year} - { date.toLocaleString()}. 
    </div>
  )
}
