import React, { Component } from "react";

class Restaurants extends Component {
  state = {
    name: ""
  };

  handleOnsubmit = e => {
    e.preventDefault();
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
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default Restaurants;
