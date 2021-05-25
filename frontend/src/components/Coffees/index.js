import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './Coffees.css';

import { getCoffees } from '../../store/coffees';

function Coffees() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getCoffees())
  }, [dispatch]);
  
  const coffees = useSelector((state) => state.coffee);
  console.log(coffees)

  return (
    <>
      <NavLink to="/coffees/add">
          <div className="noCoffee__div">
            <h2>Don't see your favorite coffee?  Click here!</h2>
          </div>
        </NavLink>
        <h1>Coffees</h1>
      <div className="coffeeContainer__div">
           {/* {coffees?.map((coffee) => (
            <NavLink to={`/coffees/${coffee.id}`}>
              <div className="coffeeCard">
                <h2>{ coffee.Company.name }</h2>
                <img src={ coffee.imgUrl } />
                <h2>{ coffee.flavorName }</h2>
              </div>
            </NavLink>
          ))}  */}
      </div>
    </>
  );
}

export default Coffees;
