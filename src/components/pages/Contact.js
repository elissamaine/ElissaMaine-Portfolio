import './Contact.scss';

import React from 'react';
import { useEffect, useState, useRef } from 'react';
import AnimatedLetters from '../AnimatedLetters.js'
import emailjs from '@emailjs/browser';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate-hover');

  const contactMe = 'Contact Me'.split('');

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, []);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          alert('message sent successfully...');
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <main className='contact-page'>
      <div className='contact-form'>
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={contactMe}
            idx={1}
          />
        </h1>
        <form ref={form} onSubmit={sendEmail}>
          <ul>
            <li className='name-email'>
              <input 
                className='name'
                placeholder='Name'
                type="text"
                name='name'
                required
              />
            </li>
            <li className='name-email'>
              <input 
                className='email'
                placeholder='Email'
                type="email"
                name="email"
                required
              />
            </li>
            <li>
              <input 
                className='subject'
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
            <li className='button'>
              <button className='send' type='submit'>Send</button>
            </li>
          </ul>
        </form>
      </div>
      <div className='social'>
        <p>Contact form is under constuction. Here are some other places you can find me:</p>
        <ul className='social-links'>
          <li className='linked-in'>
            <a href="https://www.linkedin.com/in/elissa-maine-a9b4a3210/">
              <span className='icon'><FontAwesomeIcon icon={faLinkedin} /> </span>
              <span className='text'>LinkedIn</span>
            </a>
          </li>
          <li className='git-hub'>
            <a href="https://github.com/elissamaine">
              <span className='icon'><FontAwesomeIcon icon={faGithub} /></span>
              <span className='text'>GitHub</span>
            </a>
          </li>
          <li className='leet-code'>
            <a href="https://leetcode.com/elissamaine/">
              <span className='icon'><FontAwesomeIcon icon={faCode} /></span>
              <span className='text'>LeetCode</span>
            </a>
          </li>
          <li className='twitter'>
            <a href="https://twitter.com/">
              <span className='icon'><FontAwesomeIcon icon={faTwitter} /></span>
              <span className='text'>Twitter</span>
            </a>
          </li>
        </ul>
      </div>
    </main>
  );
}

export default Contact