import './Contact.scss';

import React, { Component } from 'react';
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
    <div>
      <p>Contact form is under constuction. Other places that you can find me are here</p>
      <ul>
        <li>
          
        </li>
      </ul>
    </div>
  </div>
}

export default Contact