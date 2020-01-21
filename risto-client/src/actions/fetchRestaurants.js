export const fetchRestaurants = () => {
  return dispatch => {
    dispatch({ type: "LOADING_RESTAURANTS" });
    fetch("http://localhost:4000/api/v1/restaurants")
      .then(res => res.json())
      .then(data => {
        dispatch({ type: "ADD_RESTAURANTS", restaurants: data });
      });
  };
};
