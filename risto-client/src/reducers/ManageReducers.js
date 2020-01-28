import { combineReducers } from "redux";

const restReducer = (
  state = { restaurants: [], loading: false, favorites: [] },
  action
) => {
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

    case "SET_FAVORITES":
      return {
        ...state,
        favorites: [...action.payload]
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
