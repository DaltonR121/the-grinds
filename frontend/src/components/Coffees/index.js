import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getCoffees } from '../../store/coffees'

function Coffees() {
  const dispatch = useDispatch();
  const coffees = useSelector((state) => state.coffees)
  console.log(coffees);

  useEffect(() => {
    dispatch(getCoffees())
  }, [dispatch]);

  return (
    <>
      <h1>WORKING!</h1>
    </>
  );
}

export default Coffees;
