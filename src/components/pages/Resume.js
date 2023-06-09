import './Resume.scss';

import React from 'react';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters.js';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHtml5,
  faCss3Alt,
  faJsSquare, 
  faReact, 
  faNodeJs,   
  faSass, 
  faBootstrap, 
} from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

const Resume = () => {
  const [letterClass, setLetterClass] = useState('text-animate-hover');

  const resume = 'Resume'.split('');

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, []);

  return (
    <main className='resume-page'>
      <div className='resume-container'>
        <div className='part1'>
          <div className='title'>
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={resume}
                idx={1}
              />
            </h1>
          </div>
          <div>
            <p>
              Proficient in front end and back end technologies and programming languages as shown as well as:
              <br/>
              <span className='skills'>
                🌱 SQL
                <br/>
                🌱 NoSQL
                <br/>
                🌱 MySQL
                <br/>
                🌱 MongoDB
                <br/>
                🌱 GraphQL
                <br/>
                🌱 jQuery
              </span>
            </p>
          </div>
        </div>
        
        <div className='skills-animation'>
          <div className="swatch">
            <div className='1'><span className='swatch-icon rotate-right'><FontAwesomeIcon icon={faJsSquare}/> </span></div>
            <div className='2'><span className='swatch-icon rotate-right'><FontAwesomeIcon icon={faHtml5}/></span></div>
            <div className='3'><span className='swatch-icon rotate-right'><FontAwesomeIcon icon={faCss3Alt}/></span></div>
            <div className='4'><span className='swatch-icon'><FontAwesomeIcon icon={faSass}/></span></div>
            <div className='5'><span className='swatch-icon'><FontAwesomeIcon icon={faBootstrap}/></span></div>
            <div className='6'><span className='swatch-icon'><FontAwesomeIcon icon={faReact}/></span></div>
            <div className='7'><span className='swatch-icon'><FontAwesomeIcon icon={faNodeJs}/></span></div>
            <div className='8'><span className='swatch-icon rotate-left no-icon express'>Express.js</span></div>
            <div className='9'><span className='swatch-icon rotate-left'><FontAwesomeIcon icon={faDatabase}/></span></div>
            <div className='10'><span className='swatch-icon rotate-left no-icon'>MERN</span></div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Resume;