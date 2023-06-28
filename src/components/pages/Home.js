import './Home.scss'

import React from "react";
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters.js';

import fairy from '../../images/fairy.png'


export default function Home() {
  const [letterClass, setLetterClass] = useState('text-animate');

  const name = 'Elissa Maine'.split('');
  const job = 'Full Stack Web Developer'.split('');

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, []);

  return (
    <main className="home-page">
      <div className='text-area'>
        <h1 className='name'>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={name}
            idx={1}
          />
        </h1>
        <h1 className='job'>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={job}
            idx={12}
          />
        </h1>
        <p className='text'> 
          Lorem ipsum dolor
        </p>
        <div className='fairy'>
          <img src={fairy} alt="" />
        </div>
      </div>
    </main>
  );
}