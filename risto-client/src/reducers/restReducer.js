import { combineReducers } from "redux";

const restReducer = (state = { restaurants: [], loading: false }, action) => {
  switch (action.type) {
    case "LOADING_RESTAURANTS":
      return {
        ...state,
        restaurants: [...state.restaurants],
        loading: true
      };

    case "ADD_RESTAURANTS":
      return {
        ...state,
        restaurants: action.restaurants,
        loading: false
      };

    default:
      return state;
  }
};

const userReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...action.payload };
    case "REMOVE_USER":
      return {};
    default:
      return state;
  }
};

export default combineReducers(userReducer)(restReducer);
