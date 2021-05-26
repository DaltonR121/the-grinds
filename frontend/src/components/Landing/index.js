import React from 'react';
import { useSelector } from 'react-redux';
import mainImg from './images/mainImg.png';
import wood from './images/wood.jpg';
import coffeeBackground from './images/coffeeBackground.jpeg';
import './Landing.css';
import ProfileCard from '../ProfileCard';

function Landing() {
  const sessionUser = useSelector(state => state.session.user);
  
  if (!sessionUser) {
    return (
      <div className="landing__container">
        <img alt='' className="background" src={wood} />
        <div className="mainImg__container">
          <img alt='' className="mainImg" src={mainImg} />
        </div>
      </div>
    );
  } else {
    return (
      <div className="mainPage__div">
        <img alt='' className="background" src={coffeeBackground} />
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
