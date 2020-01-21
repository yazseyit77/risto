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

export default restReducer;
