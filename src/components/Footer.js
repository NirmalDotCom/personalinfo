import React from 'react';
import "./FooterStyle.css";
import cartoon from "../images/cartoon-compressed.png";


export default function Footer() {
  const styleSymbol = {
    fontSize: 20,
    marginRight: 7,
    marginLeft: 7
  }
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className="mask">
            <img className='bg' src="/" alt="nirmal-with-laptop" />
    </div>
    <div className='footer'>
        Made with ❤ by Nirmal <span style={styleSymbol}>©</span> {year}
    </div>
     
  )
}
