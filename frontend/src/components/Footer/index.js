import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return(
    <a href="https://github.com/DaltonR121">
      <div className="footer__container">
        <img src={require('../../images/github.png').default} alt="Github Logo" />
        <h1>Made By: Ryan Dalton</h1>
      </div>
    </a>
  );
}

export default Footer;
