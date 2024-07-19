import React from 'react';
import "./FooterStyle.css";

export default function Footer() {
  const styleSymbol = {
    fontSize: 20,
    marginRight: 7,
    marginLeft: 7
  }

  const App = () => {
    const getCurrentYear = () => {
      const currentDate = new Date();
      const currentYear = currentDate.getFullYear();
      return currentYear;
    };
  const updateYear = () => {
    const updatedYear = getCurrentYear();
    setYear(updatedYear);
  };

  return (
    <div className='footer'>
        Made with ❤ by Nirmal <span style={styleSymbol}>©</span> {year}
    </div>
  )
}
