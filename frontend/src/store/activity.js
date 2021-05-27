import { csrfFetch } from './csrf';

//ACTIONS
const SET_ACTIVITY = 'session/setActivity';
const REMOVE_ACTIVITY = 'session/removeActivity';

//ACTION CREATORS
const setActivity = (activities) => {
  return {
    type: SET_ACTIVITY,
    payload: activities,
  };
};

const removeActivity = () => {
  return {
    type: REMOVE_ACTIVITY,
  };
};

export const getActivity = () => async (dispatch) => {
  const res = await csrfFetch('/api/activities');
  const data = await res.json();
  
  dispatch(setActivity(data));
  return data;
}

// export const createCoffee = data => async dispatch => {
  //   const response = await csrfFetch('/api/coffees', {
    //     method: 'POST',
    //     headers: {
      //       'Content-Type': 'application/json',
      //     },
      //     body: JSON.stringify(data),
      //   });
      
      //   if (response.ok) {
        //     const coffee = await response.json();
        //     dispatch(addOneCoffee(coffee));
        //     return coffee;
        //   }
        // }

  //INITIAL STATE
  const initialState = {};
  
  //THIS IS THE SESSION REDUCER
  const activitiesReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
      case SET_ACTIVITY:
        const newState = { ...state };
        action.payload.forEach((activity) => {
          newState[activity.id] = activity;
        });
        return newState;
        default:
          return state;
        }
};

export default activitiesReducer;
