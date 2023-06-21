import './Project.scss'

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faDesktop } from '@fortawesome/free-solid-svg-icons';

function Project(props) {

  return (
    <div className='project-card'>
      
      {props.projects.map(project => (
        <div className='project'>
          <div className='project-img'>
            <img src={project.image} alt={project.title} />
          </div>
          <div className='project-info'>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className='links'>
              <a className='repo-link' href={project.github}>
                <span>
                  <FontAwesomeIcon icon={faGithub} />
                </span>
              </a>
              <a className='deploy-link' href={project.deployed}>
                <span>
                  <FontAwesomeIcon icon={faDesktop} />
                </span>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
};

export default Project;