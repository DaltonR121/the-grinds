import React, { useEffect, useState } from "react";
import * as sessionActions from "../../store/session";
import * as reviewActions from "../../store/reviews";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function EditCommentModal({ setShowModal, reviewId } ) {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector(state => state.session.user);
  const grabReview = useSelector(state => state.review[reviewId]);
  
  const [rating, setRating] = useState(grabReview.rating);
  const [review, setReview] = useState(grabReview.review);
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);

    const payload = {
      id: grabReview.id,
      userId: sessionUser.id,
      coffeeId: grabReview.coffeeId,
      rating,
      review
    }
    console.log(payload);
    
    dispatch(reviewActions.editOneReview(payload));
    setShowModal(false);
  };

  return (
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
  );
}

export default EditCommentModal;
