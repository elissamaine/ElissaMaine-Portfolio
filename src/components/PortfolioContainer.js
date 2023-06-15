import './PortfolioContainer.scss';

import React, { useState } from 'react';

import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';

import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');
  
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    } 
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
  };
  
  const handlePageChange = (page) => setCurrentPage(page);
  
  return (
    <div className='portfolio-container'>
      <div className='background-image'> h</div>
      <div className='element'>
        <Header />
      </div>
      
      <div className='element'>
        <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      </div>
      
      <div className='element render-page'>
        {renderPage()}
      </div>
      
      <div className='element'>
        <Footer />
      </div>
    </div>
  )
}