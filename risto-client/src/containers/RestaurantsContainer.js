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

  handleOnClick = e => {
    e.preventDefault();
    // debugger;
    // alert(e.target);
    // const image =
    //   e.target.parentElement.parentElement.parentElement.parentElement
    //     .parentElement.firstElementChild.children[0].src;
    // const name =
    //   e.target.parentElement.parentElement.parentElement.parentElement
    //     .parentElement.lastElementChild.children[1].innerText;
    // const hours =
    //   e.target.parentElement.parentElement.parentElement.parentElement
    //     .parentElement.lastElementChild.children[2].children[1].innerText;
    // const address =
    //   e.target.parentElement.parentElement.parentElement.parentElement
    //     .parentElement.lastElementChild.children[2].children[2].innerText;
    // const ratings =
    //   e.target.parentElement.parentElement.parentElement.parentElement
    //     .parentElement.lastElementChild.children[2].children[0].innerText;
    // const menu =
    //   e.target.parentElement.parentElement.parentElement.parentElement
    //     .parentElement.lastElementChild.children[3].innerHTML;

    //   fetch(
    //     "http://localhost:4000/api/v1/restaurants",
    //     {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json"
    //       },
    //       body: JSON.stringify({
    //         restaurant: {
    //           name: name,
    //           hours: hours,
    //           address: address,
    //           ratings: ratings,
    //           menu: menu,
    //           image: image
    //         }
    //       })
    //     },
    //     { withCredentials: true }
    //   ) //fetch database
    //     .then(res => res.json())
    //     .then(data => {
    //       debugger;
    //     });
  };

  render() {
    return (
      <div className="App">
        <RestaurantSearch fetchRestaurants={this.props.fetchRestaurants} />
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
    // addRestaurant: () => dispatch(addRestaurant())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantsContainer);
