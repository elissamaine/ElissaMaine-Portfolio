import './Contact.scss';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Contact = () => {
  <div className='contact-page'>
    <div className='contact-form'>
      <h1>Contact Me</h1>
      <form>
        <ul>
          <li>
            <input 
              placeholder='Email'
              type="email"
              name="email"
              required
            />
          </li>
          <li>
            <input 
              placeholder='Subject'
              type="text" 
              name="subject"
            />
          </li>
          <li>
            <textarea cols="30" rows="10"
              placeholder='Message'
              name='message'
              required
            ></textarea>
          </li>
          <li>
            <button type='submit'>Send</button>
          </li>
        </ul>
      </form>
    </div>
    <div className='social'>
      <p>Contact form is under constuction. Other places that you can find me are here</p>
      <ul className='social-links'>
        <li className='linked-in'>
          <a href="https://www.linkedin.com/in/elissa-maine-a9b4a3210/"><FontAwesomeIcon icon={faLinkedIn} /></a>
        </li>
        <li className='git-hub'>
          <a href="https://github.com/elissamaine"><FontAwesomeIcon icon={faGitHub} /></a>
        </li>
        <li className='leet-code'>
          <a href="https://leetcode.com/elissamaine/"><FontAwesomeIcon icon={faCode} bounce /></a>
        </li>
      </ul>
    </div>
  </div>
}

export default Contact