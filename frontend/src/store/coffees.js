import { csrfFetch } from "./csrf";

const SET_COFFEES = 'coffees/SET_COFFEES';
const ADD_COFFEES = 'coffees/ADD_COFFEE';

const setCoffees = coffees => ({
  type: SET_COFFEES,
  coffees
})

const addOneCoffee = coffees => ({
  type: ADD_COFFEES,
  coffees
});

export const getCoffees = () => async (dispatch) => {
  const res = await fetch('/api/coffees');
  const coffees = await res.json();
  
  dispatch(setCoffees(coffees));
}

export const createCoffee = data => async dispatch => {
  const response = await csrfFetch('/api/coffees', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (response.ok) {
    const coffee = await response.json();
    console.log(coffee);
    dispatch(addOneCoffee(coffee));
    return coffee;
  }
}

const initialState = {};

const coffeesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COFFEES: {
      let newState = { ...state };
      action.coffees.forEach((coffee) => {
        newState[coffee.id] = coffee;
      });
      return newState;
    }
    case ADD_COFFEES: {
      const newState = { ...state };
      console.log(newState);
      action.coffees.forEach((coffee) => {
        newState[coffee.id] = coffee;
      });
      return newState;
    }
    default:
      return state;
  }
}

export default coffeesReducer;
