import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './Coffees.css';

import { getCoffees } from '../../store/coffees';

function Coffees() {
  const dispatch = useDispatch();
  const coffees = useSelector((state) => Object.values(state.coffee));

  useEffect(() => {
    dispatch(getCoffees())
  }, [dispatch]);

  return (
    <>
      <NavLink to="/coffees/add">
          <div className="noCoffee__div">
            <h2>Don't see your favorite coffee?  Click here!</h2>
          </div>
        </NavLink>
        <h1>Coffees</h1>
      <div className="coffeeContainer__div">
          {coffees.map((coffee) => (
            <div className="coffeeCard">
              <h2>{ coffee.Company.name }</h2>
              {/* <img src={coffee.imgUrl} /> */}
              <h2>{ coffee.flavorName }</h2>
            </div>
          ))}
      </div>
    </>
  );
}

export default Coffees;
