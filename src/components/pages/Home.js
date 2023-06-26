import './Home.scss'

import React from "react";
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters.js';

export default function Home() {
  const [letterClass, setLetterClass] = useState('text-animate');

  const home = 'Elissa Maine - Full Stack Web Developer'.split('');

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, []);

  return (
    <main className="home-page">
      <div className='text-area'>
        <h1>Home Page</h1>
        <p className='text'> 
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
      <div>
      <p>some other stuff</p>
      </div>
    </main>
  );
}