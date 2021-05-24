import React, { useState, useEffect } from 'react';
import * as sessionActions from '../../store/session';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './AddCoffee.css';

function AddCoffee() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [flavorName, setFlavorName] = useState('');
  const [companyId, setCompanyId] = useState(null);
  const [description, setDescription] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [errors, setErrors] = useState([]);

  if (!sessionUser) return (
      <Redirect to="/" />
  );

  const handleSubmit = (e) => {
      e.preventDefault();
      setErrors([]);
  }
  return (
    <div className="addCoffee__form">
      <form className="login__form" onSubmit={handleSubmit}>
          <h1>Add A Coffee Flavor!</h1>
          <ul>
              {errors.map((error, idx) => <li key={idx}>{error}</li>)}
          </ul>
      <div className="signup__inputs">
              <label>
                  Flavor Name:
          <input className="flavorName__field input"
                      type="text"
                      value={flavorName}
                      onChange={(e) => setFlavorName(e.target.value)}
                      required
                  />
              </label>
              <label>
                  Company:
          <select className="company__field input"
                      type="password"
                      value={companyId}
                      onChange={(e) => setCompanyId(e.target.value)}
                      required
                  />
          <option>
            {/* *************************** */}
          </option>
              </label>
              <label>
                  Description:
          <input className="description__field input"
                      type="text"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      required
                  />
              </label>
              <label>
                  Image URL:
          <input className="imgUrl__field input"
                      type="text"
                      value={imgUrl}
                      onChange={(e) => setImgUrl(e.target.value)}
                      required
                  />
              </label>
              <button className="submit__button button" type="submit">Submit</button>
      </div>
      </form>
    </div>
  );
}

export default AddCoffee;
