import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return(
    <div className="footer__container">
      <h1>Made By: Ryan Dalton</h1>
    </div>
  );
}

export default Footer;
