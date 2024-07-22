import React from 'react';
import "./HomeBannerStyle.css";
import cartoon from "../images/cartoon-compressed.png";

function App() {
  const checkboxRef = useRef(null);

  useEffect(() => {
    // Ensure checkboxRef.current exists before adding event listener
    if (checkboxRef.current) {
      checkboxRef.current.addEventListener('change', handleCheckboxChange);
    }

    // Clean up event listener
    return () => {
      if (checkboxRef.current) {
        checkboxRef.current.removeEventListener('change', handleCheckboxChange);
      }
    };
  }, []); // Empty dependency array means this effect runs only once after initial render

  const handleCheckboxChange = () => {
    console.log('Checkbox changed:', checkboxRef.current.checked);
    // Your logic for handling checkbox change
  };


  
export default function HomeBanner({id}) {
  return (
    <div className="home" id={id}> 
        <div className='content'>
            <div className="wrapper">
            <h1>Light/Dark Toggle Button</h1>
            <div>
  <input type="checkbox" class="checkbox" id="checkbox" ref={checkboxRef} />
  <label for="checkbox" class="checkbox-label" >
    <i class="fas fa-moon"></i>
    <i class="fas fa-sun"></i>
    <span class="ball"></span>
  </label>
</div>
              <div className="name">Nirmal Raj Kirubakaran</div>
              <div className="staticTitle">
                Software
                <div className='hrLine'></div>
              </div>
              <ul className="dynamicTitle">
                <li>+<span>Developer</span></li>
              </ul>
              <a className='btn' href="https://www.linkedin.com/in/nirmal-raj-9a26b5220/" target="_blank" rel="noopener noreferrer">Hire Me</a>
            </div>
        </div>
        <div className="mask">
            <img className='bg' src={cartoon} alt="girl-with-laptop" />
        </div>
    </div>
  )
}
