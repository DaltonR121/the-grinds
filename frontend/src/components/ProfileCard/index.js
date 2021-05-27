import React, { useState } from "react";
import './ProfileCard.css';
import { Modal } from '../../context/Modal';
import EditUserModal from '../EditUserModal/index';


function ProfileCard({ user }){
  const [showModal, setShowModal] = useState(false);

  return(
    <div className="profile__card">
      <h1>Your Profile</h1>
      <img alt='' className="profile__avatar" src={user.imgUrl} />
      <h2>Username: {user.username}</h2>
      <h2>Full Name: {user.fullName}</h2>
      <h2>Email: {user.email}</h2>
      <h2>Bio: {user.bio}</h2>
      <>
        <button className="profileEdit__button" onClick={() => setShowModal(true)}>Edit Profile</button>
        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <EditUserModal setShowModal={setShowModal} />
          </Modal>
        )}
      </>
    </div>
  )
}

export default ProfileCard;
