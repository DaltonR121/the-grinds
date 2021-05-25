import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { createCoffee } from '../../store/coffees';
import { getCompanies } from '../../store/companies';
import './AddCoffee.css';

function AddCoffee() {
  const dispatch = useDispatch();
  const history = useHistory();
  const companies = useSelector((state) => Object.values(state.company));
  const sessionUser = useSelector(state => state.session.user);
  const [flavorName, setFlavorName] = useState('');
  const [companyId, setCompanyId] = useState(1);
  const [description, setDescription] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [errors, setErrors] = useState([]);
  
  useEffect(() => {
    dispatch(getCompanies())
  }, [dispatch]);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const payload = {
      flavorName,
      companyId,
      description,
      imgUrl,
    }
    
    const coffee = await dispatch(createCoffee(payload));
    if (coffee) {
      return history.push('/coffees');
    }
  }

  if (sessionUser) {

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
                        value={companyId}
                        onChange={(e) => setCompanyId(e.target.value)}
                        required
                    >
                      {companies.map(company => (
                        <option 
                        key={company.id}
                        value={company.id}
                        >
                          {company.name}
                        </option>
                      ))}
                      <option>Other</option>
            </select>
            <h6>If you don't see the coffee company listed, please click here and add that first!</h6>
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
                <button className="submit__button button" type="submit" disabled={errors.length > 0}>Submit</button>
        </div>
        </form>
      </div>
    );
  } else {
    return (
      <h1>You must log in to add a new coffee!</h1>
    )
  }
}

export default AddCoffee;
