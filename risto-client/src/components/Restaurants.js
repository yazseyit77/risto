import React, { Component } from "react";

class Restaurants extends Component {
  render() {
    console.log(this.props.restaurants);
    const restaurants = this.props.restaurants.map(rest => (
      <li key={rest.restaurant.id}>
        <a href={rest.restaurant.url}>
          <h2>{rest.restaurant.name}</h2>
        </a>
        <h5>Address: {rest.restaurant.location.address}</h5>
        <h4>Open hours: {rest.restaurant.timings}</h4>
        <a href={rest.restaurant.menu_url}>
          <h4>Menu</h4>
        </a>
        <img src={rest.restaurant.thumb} alt="no img" />
      </li>
    ));
    return (
      <div>
        <div className="card">
          <ol>{restaurants}</ol>
        </div>
      </div>
    );
  }
}

export default Restaurants;
