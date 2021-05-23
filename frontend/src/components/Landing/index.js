import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import mainImg from './images/mainImg.png';
import wood from './images/wood.jpg'
import './Landing.css';
import ProfileCard from '../ProfileCard';

function Landing() {
  const sessionUser = useSelector(state => state.session.user);

  if (!sessionUser) {
    return (
      <div className="landing__container">
        <img className="background" src={wood} />
        <div className="mainImg__container">
          <img className="mainImg" src={mainImg} />
        </div>
      </div>
    );
  } else {
    return (
      <div className="mainPage__div">
        <div className="main-grid">
          <div className="activityFeed__div">
            <h1>ACTIVITY FEED</h1>
          </div>
          <div>
            <ProfileCard user={sessionUser} />
          </div>
        </div>
      </div>
    )
  }

}

export default Landing;
