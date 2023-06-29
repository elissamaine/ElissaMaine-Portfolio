import './About.scss'

import React from 'react'
import { useEffect, useState } from 'react';

import AnimatedLetters from '../AnimatedLetters.js';
import image from '../../images/me.jpg'

export default function About() {
  const [letterClass, setLetterClass] = useState('text-animate-hover');

  const aboutMe = 'About Me'.split('');

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, []);

  return (
    <main className='about-page'>
      <div className='about div'>
        <h1>
          <AnimatedLetters 
            letterClass={letterClass}
            strArray={aboutMe}
            idx={1}
          />
        </h1>
        <p>
        ‧˚✩ Hello ✩˚‧
        <br/>
        My name is Elissa Maine and am a recent full stack coding bootcamp graduate looking to start my career. 
        <br/>
        <br/>
        I originally got my degree in Geology from San Diego State University, but after moving to Vancouver Washington I decided to change career paths and took a coding bootcamp. I have become passionate about designing and creating projects and I enjoy challenging myself to learn new skills.
        <br/>
        <br/>
        I am proficient in front end and back end development but I’ve grown to favor front end development and figuring out how to make a site more interactive and enjoyable for the user. 
        </p>
      </div>
      <div className='image div'>
        <img src={image} alt="image of Elissa" />
      </div>
    </main>
  );
}