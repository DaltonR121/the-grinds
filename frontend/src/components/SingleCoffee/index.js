import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './SingleCoffee.css';

import { singleCoffee } from '../../store/coffees';

function SingleCoffee() {
  const dispatch = useDispatch();
  const { id }= useParams();

  const [currentCoffee, setCurrentCoffee] = useState({});
  
  useEffect(() => {
     const data = dispatch(singleCoffee(id));
     setCurrentCoffee(data);
  }, [dispatch, id]);

  console.log(currentCoffee);
  
  return (
    <>
      <h1>{currentCoffee.id}</h1>
        <div className="coffeeContainer__div">
          <div className="coffeeCard">
            <h2>{ currentCoffee.Company.name }</h2>
            <img alt='' src={currentCoffee.imgUrl} />
            <h2>{ currentCoffee.flavorName }</h2>
          </div>
        </div>
  </>
  );
}

export default SingleCoffee;
