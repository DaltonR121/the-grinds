const SET_COMPANIES = 'coffees/SET_COMPANIES'

const setCompanies = (companies) => ({
  type: SET_COMPANIES,
  companies
})

export const getCompanies = () => async (dispatch) => {
  const res = await fetch('/api/companies');
  const companies = await res.json();
  
  dispatch(setCompanies(companies));
}

const initialState = {};

const companiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COMPANIES:
      const newState = { ...state };
      action.companies.forEach((company) => {
        newState[company.id] = company;
      });
      return newState;
    default:
      return state;
  }
}

export default companiesReducer;
