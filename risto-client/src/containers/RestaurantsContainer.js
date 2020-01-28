import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchRestaurants } from "../actions/RestaurantsActions";
import Restaurants from "../components/stateless/Restaurants";
import RestaurantSearch from "../components/RestaurantSearch";

class RestaurantsContainer extends Component {
  componentDidMount() {
    // console.log(this.props);
    this.props.fetchRestaurants();
  }

  handleOnClick = e => {
    e.preventDefault();
    const images = document.querySelector("div.avatar").children[0].src;
    const name = document.querySelector("div.content").children[1].innerText;
    const hours = document.querySelector("div.content").children[2].children[1]
      .innerText;
    const address = document.querySelector("div.content").children[2]
      .children[2].innerText;
    const ratings = document.querySelector("div.content").children[2]
      .children[0].innerText;
    const menu = document.querySelector("div.extra").querySelector("a").href;

    fetch(
      "http://localhost:4000/api/v1/restaurants",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          restaurant: {
            name: name,
            hours: hours,
            address: address,
            rating: ratings,
            menu: menu,
            images: images
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
