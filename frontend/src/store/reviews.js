import { csrfFetch } from "./csrf";

const ADD_REVIEW = 'reviews/ADD_REVIEW';
const GET_REVIEWS = 'reviews/GET_REVIEWS';
const EDIT_REVIEW = 'reviews/EDIT_REVIEW';
const DELETE_REVIEW = 'reviews/DELETE_REVIEW';

const addReview = review => ({
  type: ADD_REVIEW,
  payload: review
});

const getReviews = reviews => ({
  type: GET_REVIEWS,
  payload: reviews
});

const editReview = review => ({
  type: EDIT_REVIEW,
  payload: review
});

const deleteReview = review => ({
  type: DELETE_REVIEW,
  payload: review
});


export const createReviews = data => async dispatch => {
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
  const res = await csrfFetch(`/api/coffees/${id}/getReviews/`);
  const reviews = await res.json();

  dispatch(getReviews(reviews));
}

// BUILD EDIT HERE 
export const editOneReview = (id) => async (dispatch) => {
  const res = await csrfFetch(`/api/coffees/${id}/edit/`);
  console.log(res);
  const reviews = await res.json();

  dispatch(getReviews(reviews));
}

export const deleteSingleReview = id => async (dispatch) => {
  const res = await csrfFetch(`/api/coffees/${id}/delete/`, {
    method: 'DELETE'
  });

  if (res.ok) {
    dispatch(deleteReview(id));
  }
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
      state = {};
      action.payload.forEach((review) => {
        state[review.id] = review
      })
      return state;
    }
    case DELETE_REVIEW: {
      const newState = { ...state };
      delete newState[action.payload.id];
      return newState;
    }
    default:
      return state;
  }
}

export default reviewReducer;
