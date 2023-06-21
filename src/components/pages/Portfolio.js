import './Portfolio.scss';

import Project from '../Project.js';
import proj1 from '../../images/proj1.PNG';
import proj2 from '../../images/proj2.PNG';
import proj3 from '../../images/proj3.PNG';
import proj4 from '../../images/proj4.PNG';

import React from 'react';

const projects = [
  {
    title: 'Story Finder',
    description: 'A site for resders to find and save books.',
    image: proj1,
    github: 'https://github.com/b-crites/BookClub',
    deployed: 'https://b-crites.github.io/BookClub/'
  },
  {
    title: 'Password Generator',
    description: 'A simple pasword generator that allows the user to select the length and type of characters to include in their password.',
    image: proj2,
    github: 'https://github.com/elissamaine/Password-Generator',
    deployed: 'https://elissamaine.github.io/Password-Generator/'
  },
  {
    title: `Cook's Companion`,
    description: 'A site for users to save and share their favorite recipes.',
    image: proj3,
    github: 'https://github.com/andrewmuhn/cooks-companion',
    deployed: 'https://cookscompanion.herokuapp.com/'
  },
  {
    title: 'Tech Blog',
    description: 'A site for users to share their thoughts and opinions on tech.',
    image: proj4,
    github: 'https://github.com/elissamaine/Tech_Blog',
    deployed: 'https://aqueous-dusk-47864.herokuapp.com/'
  }
]

const Portfolio = () => {
  return (
    <main className='portfolio-page'>
      <div className='portfolio-page-container'>
        <div className='title'>
          <h1>Portfolio</h1>
        </div>
        <div className='project-container'>
          <Project projects={projects} />
        </div>
      </div>
    </main>
  );
}

export default Portfolio;