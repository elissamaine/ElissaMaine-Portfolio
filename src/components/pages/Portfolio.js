import './Portfolio.scss';

import Project from '../Project.js';

import React from 'react';

const Portfolio = () => {
  return (
    <main className='portfolio-page'>
      <div className='title'>
        <h1>Portfolio</h1>
      </div>
      <div className='project-container'>
        <Project />
      </div>
    </main>
  );
}

export default Portfolio;