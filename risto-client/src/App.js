import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchRestaurants } from "./actions/fetchRestaurants";
import Restaurants from "./components/Restaurants";
import RestaurantInput from "./components/RestaurantInput";

class App extends Component {
  componentDidMount() {
    console.log(this.props);
    this.props.fetchRestaurants();
  }

  render() {
    console.log(this.props.restaurants);

    return (
      <div className="App">
        <h1>Restaurants</h1>
        <RestaurantInput />
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
    fetchRestaurants: () => dispatch(fetchRestaurants())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
