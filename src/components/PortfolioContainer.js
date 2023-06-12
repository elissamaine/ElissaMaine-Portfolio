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
    <div className="PortfolioContainer">
      <Header />

      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />

      {renderPage()}

      <Footer />
      
      </div>
  )

}; 