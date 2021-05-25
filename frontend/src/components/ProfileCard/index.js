import React, { useReducer, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './ProfileCard.css';
import { Modal } from '../../context/Modal';
import EditUserModal from '../EditUserModal/index';


function ProfileCard({ user }){
  const [showModal, setShowModal] = useState(false);

  return(
    <div className="profile__card">
      <h1>Your Profile</h1>
      <img className="profile__avatar" src={user.imgUrl} />
      <h2>Username: {user.username}</h2>
      <h2>Full Name: {user.fullName}</h2>
      <h2>Email: {user.email}</h2>
      <h2>Bio: {user.bio}</h2>
      <>
        <button className="profileEdit__button" onClick={() => setShowModal(true)}>Edit Profile</button>
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <EditUserModal />
          </Modal>
        )}
      </>
    </div>
  )
}

export default ProfileCard;
