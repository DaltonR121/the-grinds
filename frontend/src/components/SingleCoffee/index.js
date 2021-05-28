import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './SingleCoffee.css';
import { Modal } from '../../context/Modal';
import EditCommentModal from '../EditCommentModal/index';

import { singleCoffee } from '../../store/coffees';
import { createReviews, getAllReviews, editOneReview, deleteSingleReview } from '../../store/reviews';
import { set } from 'js-cookie';

function SingleCoffee() {
  const dispatch = useDispatch();
  const { id }= useParams();
  const history = useHistory();
  
  const sessionUser = useSelector((state) => state.session.user);
  const reviews = useSelector((state) => Object.values(state.review));
  
  const [currentCoffee, setCurrentCoffee] = useState([]);
  
  const [rating, setRating] = useState(1);
  const [review, setReview] = useState('');
  const [reviewId, setReviewId] = useState(null);
  const [errors, setErrors] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [del, setDel] = useState(false); 
  
  const handleSubmit = (e) => {
    e.preventDefault();
  
    const payload = {
      rating, 
      review, 
      coffeeId, 
      userId
    }

    dispatch(createReviews(payload));
    setReview('')
  };

  useEffect(() => {
    dispatch(singleCoffee(id)).then(data => setCurrentCoffee(data));
    dispatch(getAllReviews(id));
  }, [dispatch, id, review.id, del]);

  let userId;

  const coffeeId = currentCoffee.id;
  if (sessionUser) {
    userId = sessionUser.id;
  }

  const deleteReview = (id) => {
    dispatch(deleteSingleReview(id))
    history.go(0);
  }

  return (
    <div className="singleCoffeePage">
      <div className="singleCoffeeContainer__div">
        <h1>{currentCoffee.flavorName}</h1>
          <img alt='' src={currentCoffee.imgUrl} />
          <h2>{ currentCoffee.description }</h2>
        </div>
        <div className="reviews__div">
          <h1>Reviews</h1>
          {sessionUser ? 
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
            : null}

        {/* Review List */}
        <div className="reviewDisplayContainer__div">
          {reviews.map(review => (
            <>
            <div key={review.id} className="userReviewContainer__div">
              <div className="userReview__div">
                <div className="reviewImg__div">
                  <img alt='user avatar' src={review.User.imgUrl} />
                </div>
                  <div className="reviewUser">
                    <h3>{review.User.username}</h3>
                  </div>
                <div className="review__review">
                  <h3 className="colorRating">{review.rating}/5 Stars</h3>
                  <h2>{review.review}</h2>
                </div>
                  {sessionUser ? 
                    ( review.User.id === sessionUser.id ? 
                      <div className="changeButtons">
                        <button className="editButton"
                                onClick={() => (
                                  setShowModal(true),
                                  setReviewId(review.id)
                                )}>Edit</button>
                                {showModal && (
                                  <Modal onClose={() => setShowModal(false)}>
                                    <EditCommentModal setShowModal={setShowModal} reviewId={reviewId}/>
                                  </Modal>
                                )}
                        <button className="deleteButton"
                                onClick={() => deleteReview(review.id)}>Delete</button>
                      </div>
                    : null )
                  : null }
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
