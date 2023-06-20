import './Navbar.scss'

import React from "react";


function Navbar({ currentPage, handlePageChange }) {
  return (
    <div>
      <ul className="nav nav-tabs">
        <li className="home">
          <a
            href="#home"
            onClick={() => handlePageChange('Home')}
            className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
          >
            Home
          </a>

        </li>
        <li className="about">
          <a
            href="#about"
            onClick={() => handlePageChange('About')}
            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
          >
            About
          </a>

        </li>
        <li className="portfolio">
          <a
            href="#portfolio"
            onClick={() => handlePageChange('Portfolio')}
            className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
          >
            Portfolio
          </a>

        </li>
        <li className="resume">
          <a
            href="#resume"
            onClick={() => handlePageChange('Resume')}
            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
          >
            Resume 
          </a>

        </li>
        <li className="contact">
          <a
            href="#contact"
            onClick={() => handlePageChange('Contact')}
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact 
          </a>

        </li>
      </ul>   
    </div>
  );
}

export default Navbar;