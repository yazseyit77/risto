import React, { Component } from "react";

class Restaurants extends Component {
  render() {
    const restaurants = this.props.restaurants.map(rest => (
      //   {/* <li key={rest.id}>{rest.name}</li> */}

      <li key={rest.id}>
        <h2>{rest.name}</h2>
        <h5>{rest.address}</h5>
        <img src={rest.images} alt="no img" />
      </li>
    ));
    return (
      <div>
        <div>{restaurants}</div>
      </div>
    );
  }
}

export default Restaurants;
