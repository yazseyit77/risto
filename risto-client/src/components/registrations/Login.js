import React, { Component } from "react";
import { Link } from "react-router-dom";
// import axios from "axios";

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
    // axios
    //   .post(
    //     "http://localhost:4000/api/v1/login",
    //     { user },
    //     { withCredentials: true }
    //   )
    //   .then(response => {
    //     if (response.logged_in) {
    //       this.props.handleLogin(response);
    //       this.redirect();
    //     } else {
    //       this.setState({
    //         errors: response.errors
    //       });
    //     }
    //   })
    //   .catch(error => console.log("api errors:", error));
  };

  redirect = () => {
    this.props.history.push("/home");
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
        <h1>Log In</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="username"
            type="text"
            name="username"
            value={username}
            onChange={this.handleChange}
          />
          <input
            placeholder="password"
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
          <button placeholder="submit" type="submit">
            Log In
          </button>
          <div>
            or <Link to="/signup">sign up</Link>
          </div>
        </form>
        <div>{this.state.errors ? this.handleErrors() : null}</div>
      </div>
    );
  }
}

export default Login;
