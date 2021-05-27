import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import mainImg from './images/mainImg.png';
import './Landing.css';
import * as activityActions from '../../store/activity';
import ProfileCard from '../ProfileCard';

function Landing() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const activities = useSelector(state => Object.values(state.activity))
  
  useEffect(() => {
    dispatch(activityActions.getActivity());
  }, [dispatch]);

  
  if (!sessionUser) {
    return (
      <div className="landing__container">
        <div className="mainImg__container">
          <img alt='' className="mainImg" src={mainImg} />
        </div>
      </div>
    );
  } else {
    return (
      <div className="mainPage__div">
        <div className="main-grid">
          <div className="activityFeed__div">
            <h1>ACTIVITY FEED</h1>
            {activities.map(activity => (
              <div className="activityCard__div">
                <img alt="" src={activity.User.imgUrl} />
                <h2>{activity.User.username} is enjoying {activity.Coffee.flavorName} right now! </h2>
              </div>
            ))}
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
