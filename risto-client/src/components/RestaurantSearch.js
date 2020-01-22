import React, { Component } from "react";

class RestaurantSearch extends Component {
  state = {
    name: ""
  };

  handleOnsubmit = e => {
    e.preventDefault();
    this.props.fetchRestaurants(this.state.name);
    this.setState({
      name: ""
    });
  };

  handleOnChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnsubmit}>
          <input type="text" name="name" onChange={this.handleOnChange} />
          <button>Search</button>
        </form>
      </div>
    );
  }
}

export default RestaurantSearch;
