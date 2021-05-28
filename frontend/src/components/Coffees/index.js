import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './Coffees.css';

import { getCoffees } from '../../store/coffees';

function Coffees() {
  const dispatch = useDispatch();
  const [coffees, setCoffees] = useState([]);

  useEffect(() => {
    dispatch(getCoffees()).then(data => setCoffees(data))
  }, [dispatch]);


  return (
    <>
      <NavLink to="/coffees/add">
          <div className="noCoffee__div">
            <h3>Don't see your favorite coffee?  Click here!</h3>
          </div>
        </NavLink>
        <h1>Coffees</h1>
      <div className="coffeeContainer__div">
           {coffees?.map((coffee) => (
            <NavLink className="card__link" key={coffee.id} to={`/coffees/${coffee.id}`}>
              <div className="coffeeCard">
                <h2>{ coffee.Company.name }</h2>
                <img alt='' src={ coffee.imgUrl } />
                <h2>{ coffee.flavorName }</h2>
              </div>
            </NavLink>
          ))} 
      </div>
    </>
  );
}

export default Coffees;
