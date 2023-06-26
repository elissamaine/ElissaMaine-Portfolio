import './Resume.scss';

import React from 'react';

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
  return (
    <main className='resume-page'>
      <div className='resume-container'>
        <div className='part1'>
          <div className='title'>
            <h1>Resume</h1>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque
              velit, lobortis ut magna varius, blandit rhoncus sem. Morbi lacinia nisi
              ac dui fermentum, sed luctus urna tincidunt. Etiam ut feugiat ex. Cras
              non risus mi. Curabitur mattis rutrum ipsum, ut aliquet urna imperdie
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