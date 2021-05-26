import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './SingleCoffee.css';

import { singleCoffee } from '../../store/coffees';
import { createReviews, getAllReviews } from '../../store/reviews';

function SingleCoffee() {
  const dispatch = useDispatch();
  const { id }= useParams();
  
  const sessionUser = useSelector((state) => state.session.user);
  const addReview = useSelector((state) => state.review.id)

  
  const [currentCoffee, setCurrentCoffee] = useState([]);

  const [rating, setRating] = useState(1);
  const [review, setReview] = useState('');
  const [errors, setErrors] = useState([]);


  useEffect(() => {
    dispatch(singleCoffee(id)).then(data => setCurrentCoffee(data));
    dispatch(getAllReviews(id));
  }, [dispatch, id]);

  const coffeeId = currentCoffee.id;
  const userId = sessionUser.id;

    const handleSubmit = (e) => {
      e.preventDefault();

      const payload = {
        rating, 
        review, 
        coffeeId, 
        userId
      }

      dispatch(createReviews(payload))

    };
  
  return (
    <>
      <h1>{currentCoffee.flavorName}</h1>
        <div className="singleCoffeeContainer__div">
          {currentCoffee.Company !== undefined ? <h2>{ currentCoffee.Company.name }</h2> : null }
          <img alt='' src={currentCoffee.imgUrl} />
          <h2>{ currentCoffee.description }</h2>
        </div>
        <div className="reviews__div">
          <h1>Reviews</h1>
          <form onSubmit={handleSubmit}>
            <ul>
                {errors.map((error, idx) => <li key={idx}>{error}</li>)}
            </ul>
            <label>
                Rating
                  <select
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                    required
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
            </label>
            <label>
                Review
                  <textarea
                    type="textArea"
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                    required
                  />
            </label>
            <button type="submit">Submit Review</button>
        </form>
        </div>
        <div className="reviewDisplay__div">

        </div>
  </>
  );
}

export default SingleCoffee;
