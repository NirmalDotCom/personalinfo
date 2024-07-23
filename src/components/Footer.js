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
    <div>
   
        <div className='footer'>
        <img className='bg' src={cartoon} alt="" />
        Made with ❤ by Nirmal <span style={styleSymbol}>©</span> {year}
        </div>
    </div>

     
  )
}
