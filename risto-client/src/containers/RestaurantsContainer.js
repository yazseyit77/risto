import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchRestaurants } from "../actions/RestaurantsActions";
import Restaurants from "../components/stateless/Restaurants";
import RestaurantSearch from "../components/RestaurantSearch";

class RestaurantsContainer extends Component {
  componentDidMount() {
    this.props.fetchRestaurants();
  }

  handleOnClick = rest => {
    fetch(
      "http://localhost:4000/api/v1/restaurants",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          restaurant: {
            name: rest.restaurant.name,
            hours: rest.restaurant.timings,
            address: rest.restaurant.location.address,
            rating: rest.restaurant.user_rating.aggregate_rating,
            menu: rest.restaurant.menu_url,
            images: rest.restaurant.thumb
          }
        })
      },
      { withCredentials: true }
    )
      .then(res => res.json())
      .then(data => {
        console.log(data);
        alert("added");
      });
  };

  render() {
    return (
      <div className="App">
        <RestaurantSearch fetchRestaurants={this.props.fetchRestaurants} />
        <br />
        <br />
        <Restaurants
          restaurants={this.props.restaurants}
          handleOnClick={this.handleOnClick}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    restaurants: state.restaurants,
    loading: state.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchRestaurants: name => dispatch(fetchRestaurants(name))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantsContainer);
