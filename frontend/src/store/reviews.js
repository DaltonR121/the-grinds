import { csrfFetch } from "./csrf";

const ADD_REVIEW = 'reviews/ADD_REVIEW';
const GET_REVIEWS = 'reviews/GET_REVIEWS';

const addReview = review => ({
  type: ADD_REVIEW,
  payload: review
})

const getReviews = reviews => ({
  type: GET_REVIEWS,
  payload: reviews
})


export const createReviews = data => async dispatch => {
  console.log(data);
  const response = await csrfFetch(`/api/coffees/createReview`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (response.ok) {
    const review = await response.json();
    dispatch(addReview(review));
    return review;
  }
}

export const getAllReviews = (id) => async (dispatch) => {
  const res = await fetch(`/api/coffees/${id}/getReviews/`)
  const reviews = await res.json();
  
  dispatch(getReviews(reviews));
}

const initialState = {};

const reviewReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_REVIEW: {
      const newState = { ...state };
      newState[action.payload.id] = action.payload
      return newState;
    }
    case GET_REVIEWS: {
      const newState = { ...state };
      newState[action.payload.id] = action.payload
      return newState;
    }
    default:
      return state;
  }
}

export default reviewReducer;
