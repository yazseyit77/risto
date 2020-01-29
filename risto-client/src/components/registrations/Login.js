import React, { Component } from "react";

import LoginRender from "../stateless/LoginRender";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      errors: ""
    };
  }

  componentWillMount() {
    return this.props.loggedInStatus ? this.redirect() : null;
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { username, password } = this.state;
    let user = {
      username: username,
      password: password
    };

    fetch(
      "http://localhost:4000/api/v1/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ user: user })
      },
      { withCredentials: true }
    )
      .then(res => res.json())
      .then(data => {
        if (data.logged_in) {
          this.props.handleLogin(data);
          this.redirect();
        } else {
          this.setState({
            errors: data.errors
          });
        }
      })
      .catch(error => console.log("api errors:", error));
  };

  redirect = () => {
    this.props.history.push("/favorites");
    console.log("Successfully Login");
  };

  handleErrors = () => {
    return (
      <div>
        <ul>
          {this.state.errors.map(error => {
            return <li key={error}>{error}</li>;
          })}
        </ul>
      </div>
    );
  };

  render() {
    const { username, password } = this.state;

    return (
      <div>
        <LoginRender
          username={username}
          password={password}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          handleErrors={this.handleErrors}
          errors={this.state.errors}
        />
      </div>
    );
  }
}

export default Login;
