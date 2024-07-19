import React from 'react';
import "./FooterStyle.css";

export default function Footer() {
  const styleSymbol = {
    fontSize: 20,
    marginRight: 7,
    marginLeft: 7
  }
  getYear() {
    return new Date().getFullYear();
}
  return (
    <div className='footer'>
        Made with ❤ by Nirmal <span style={styleSymbol}>©</span> {this.getYear()}
    </div>
  )
}
