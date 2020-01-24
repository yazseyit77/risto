export const fetchRestaurants = name => {
  return dispatch => {
    dispatch({ type: "LOADING_RESTAURANTS" });
    // fetch("http://localhost:4000/api/v1/restaurants") //fetch database
    // fetch(`http://localhost:4000/api/v1/restaurants/search?q=burrito`) //fetch API from backend
    fetch(`http://localhost:4000/api/v1/restaurants/search?q=${name}`) //fetch API from backend with name
      .then(res => res.json())
      .then(data => {
        // debugger;
        dispatch({ type: "ADD_RESTAURANTS", restaurants: data.restaurants });
      });
  };
};

export const removeUser = () => ({ type: "REMOVE_USER" });

export const setUser = user => ({ type: "SET_USER", payload: user });
