const SET_COFFEES = 'coffees/SET_COFFEES'

const setCoffees = (coffees) => ({
  type: SET_COFFEES,
  coffees
})

export const getCoffees = () => async (dispatch) => {
  const res = await fetch('/api/coffees');
  const coffees = await res.json();
  
  dispatch(setCoffees(coffees))
}

const initialState = {};

const coffeesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COFFEES:
      const newState = { ...state };
      action.coffees.forEach((coffee) => {
        newState[coffee.id] = coffee;
      });
      return newState;
    default:
      return state;
  }
}

export default coffeesReducer;
