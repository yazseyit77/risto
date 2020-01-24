import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchRestaurants } from "../actions/RestaurantsActions";
import Restaurants from "../components/Restaurants";
import RestaurantSearch from "../components/RestaurantSearch";

class RestaurantsContainer extends Component {
  componentDidMount() {
    // console.log(this.props);
    this.props.fetchRestaurants();
  }

  render() {
    return (
      <div className="App">
        <h1>Restaurants</h1>
        <RestaurantSearch fetchRestaurants={this.props.fetchRestaurants} />
        <Restaurants restaurants={this.props.restaurants} />
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
    // addRestaurant: () => dispatch(addRestaurant())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantsContainer);
