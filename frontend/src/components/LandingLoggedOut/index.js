import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import coffee from './images/coffee.jpg';
import coffee2 from './images/coffee2.jpg';
import coffee3 from './images/coffee3.jpg';
import coffee4 from './images/coffee4.jpg';
import mainImg from './images/mainImg.png';
import './LandingLoggedOut.css'

function LandingLoggedOut() {
  return (
    <div className="landing__container">
      <div className="landingImages">
        <img className="mainImg" src={mainImg} />
      </div>
    </div>
  );
}

export default LandingLoggedOut;
