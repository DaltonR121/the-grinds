import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './SingleCoffee.css';

import { singleCoffee } from '../../store/coffees';
import { createReviews, getAllReviews, editOneReview, deleteSingleReview } from '../../store/reviews';

function SingleCoffee() {
  const dispatch = useDispatch();
  const { id }= useParams();
  
  const sessionUser = useSelector((state) => state.session.user);
  const reviews = useSelector((state) => Object.values(state.review));
  
  const [currentCoffee, setCurrentCoffee] = useState([]);
  
  const [rating, setRating] = useState(1);
  const [review, setReview] = useState('');
  const [userReviewed, setUserReviewed] = useState(false);
  const [edit, setEdit] = useState(false);
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
      <div className="singleCoffeePage">
        <div className="singleCoffeeContainer__div">
          <h1>{currentCoffee.flavorName}</h1>
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

          {/* Review List */}
          <div className="reviewDisplayContainer__div">
            {reviews.map(review => (
              <>
              <div key={review.id} className="userReviewContainer__div">
                <div className="userReview__div">
                  <div className="reviewImg__div">
                    <img alt='user avatar' src={review.User.imgUrl} />
                  </div>
                  <div className="reviewText">
                    <h3>{review.User.username}</h3>
                    <h3>{review.rating}/5</h3>
                  </div>
                  <div className="review__review">
                    <h2>{review.review}</h2>
                  </div>
                  {review.User.id === sessionUser.id ? (
                    <div className="changeButtons">
                      <button className="editButton"
                              >Edit</button>
                      <button className="deleteButton"
                              onClick={() => dispatch(deleteSingleReview(review.id))}>Delete</button>
                    </div>
                  ) : null}
                </div>
              </div>
            </>
          ))}
          </div>
        </div>
  </div>
  );
}

export default SingleCoffee;
