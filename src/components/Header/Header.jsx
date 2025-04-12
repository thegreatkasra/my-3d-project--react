import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import './Header.css';
import logo from '../../logo.svg';


const Header = () => {
  useEffect(() => {
    const navItems = document.querySelectorAll('.header--nav li');
    gsap.fromTo(navItems, 
      { opacity: 0, y: -10 }, 
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 }
    );
  }, []);

  const handleMouseEnter = (e) => {
    gsap.to(e.target, {
      color: '#0089ED',
      textDecoration: 'underline',
      fontStyle: 'italic',
      duration: 0.3
    });
  };

  const handleMouseLeave = (e) => {
    gsap.to(e.target, {
      color: 'white',
      textDecoration: 'none',
      fontStyle: 'normal',
      duration: 0.3
    });
  };

  const handleClick = (e, sectionId) => {
    e.preventDefault();
    gsap.to(e.target, {
      color: '#0089ED',
      textDecoration: 'underline',
      fontStyle: 'italic',
      duration: 0.3
    });

    // Scroll to the section
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownload = () => {
    window.open('https://drive.google.com/file/d/1WvEquNX0_zVPLkRCQ_cFbayL3wc6tjWo/view?usp=drive_link');
  };
  

  return (
    <div className='header'>

      <div className="header--logo">
        <img src={logo} alt="logo" />
      </div>

      <div className="header--nav">
        <ul>
          <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={(e) => handleClick(e, 'home')}>Home</li>
          <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={(e) => handleClick(e, 'about')}>About</li>
          <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={(e) => handleClick(e, 'portfolio')}>Portfolio</li>
          <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={(e) => handleClick(e, 'contact')}>Contact</li>
        </ul>
      </div>

      <div className="header--download-btn">
          <button onClick={handleDownload} >Resume</button>
      </div>

    </div>
  );
};

export default Header;