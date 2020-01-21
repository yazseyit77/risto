import React, { Component } from "react";

class FetchRestaurants extends Component {
  componentDidMount() {
    fetch("http://localhost:3000/api/v1/restaurants")
      .then(res => res.json())
      .then(rest => console.log(rest));
  }

  render() {
    return <div></div>;
  }
}
