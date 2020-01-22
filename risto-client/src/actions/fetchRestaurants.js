export const fetchRestaurants = () => {
  return dispatch => {
    dispatch({ type: "LOADING_RESTAURANTS" });
    // fetch("http://localhost:4000/api/v1/restaurants") //fetch database
    fetch("http://localhost:4000/api/v1/restaurants/search?q=ihop") //fetch API from backend
      .then(res => res.json())
      .then(data => {
        dispatch({ type: "ADD_RESTAURANTS", restaurants: data });
      });
  };
};
