import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import mainImg from './images/mainImg.png';
import wood from './images/wood.jpg'
import './LandingLoggedOut.css';

function LandingLoggedOut() {
  return (
    <div className="landing__container">
      <img className="background" src={wood} />
      <div className="mainImg__container">
        <img className="mainImg" src={mainImg} />
      </div>
    </div>
  );
}

export default LandingLoggedOut;
