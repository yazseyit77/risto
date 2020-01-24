import React, { Component } from "react";
import { connect } from "react-redux";
import authReducer from "../reducers/authReducers";

class Registration extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    fetch(
      "http://localhost:4000/api/v1/users",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password
        })
      }
      //   ,
      //   { withCredentials: true }
    )
      .then(res => res.json())
      .then(data => {
        localStorage.setItem("token", data.jwt);
        this.authReducer(data.user);
        // console.log(data.user);
      })
      .catch(error => console.log(error));
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div>
        <h1>Sign Up</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={this.state.username}
            onChange={this.handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    );
  }
}

export default connect(null, { authReducer })(Registration);
