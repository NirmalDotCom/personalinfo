import React from 'react';
import "./FooterStyle.css";


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
    <img className='bg' src="/" alt="" />
        <div className='footer'>
            Made with ❤ by Nirmal <span style={styleSymbol} />
        </div>
    </div>

     
  )
}
