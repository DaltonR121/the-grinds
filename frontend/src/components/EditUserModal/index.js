import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "../../context/Modal"

function EditUserModal({ setShowModal }) {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  
  const [username, setUsername] = useState(sessionUser.username);
  const [fullName, setFullName] = useState(sessionUser.fullName);
  const [email, setEmail] = useState(sessionUser.email);
  const [bio, setBio] = useState(sessionUser.bio);
  const [imgUrl, setImgUrl] = useState(sessionUser.imgUrl);
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);

    const payload = {
      id: sessionUser.id,
      username,
      fullName,
      email,
      bio,
      imgUrl
    }
    
    dispatch(sessionActions.editCurrentUser(payload));
    setShowModal(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <ul>
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </label>
      <label>
        Full Name:
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
      </label>
      <label>
        Email:
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <label>
        Bio:
        <textarea
        value={bio}
        onChange={(e) => setBio(e.target.value)}
        required
        ></textarea>
      </label>
      <label>
        Avatar URL:
        <input
          type="text"
          value={imgUrl}
          onChange={(e) => setImgUrl(e.target.value)}
          required
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default EditUserModal;
