import './Footer.scss';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  return (
    <div className="footer">
      <div>
        <p>Made with <FontAwesomeIcon icon={faHeart} color='#1d4913ff' /> by Elissa Maine</p>
      </div>
    </div>  
  );
}