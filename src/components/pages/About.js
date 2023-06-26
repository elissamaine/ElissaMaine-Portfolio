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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque
          velit, lobortis ut magna varius, blandit rhoncus sem. Morbi lacinia nisi
          ac dui fermentum, sed luctus urna tincidunt. Etiam ut feugiat ex. Cras
          non risus mi. Curabitur mattis rutrum ipsum, ut aliquet urna imperdiet
          ac. Sed nec nulla aliquam, bibendum odio eget, vestibulum tortor. Cras
          rutrum ligula in tincidunt commodo. Morbi sit amet mollis orci, in
          tristique ex. Donec nec ornare elit. Donec blandit est sed risus feugiat
          porttitor. Vestibulum molestie hendrerit massa non consequat. Vestibulum
          vitae lorem tortor. In elementum ultricies tempus. Interdum et malesuada
          fames ac ante ipsum primis in faucibus. 
        </p>
      </div>
      <div className='image div'>
        <img src={image} alt="image of Elissa" />
      </div>
    </main>
  );
}