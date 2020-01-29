import React, { Component } from "react";
import SignUpRender from "../stateless/SignUpRender";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      password_confirmation: "",
      errors: ""
    };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { username, password, password_confirmation } = this.state;
    let user = {
      username: username,
      password: password,
      password_confirmation: password_confirmation
    };

    fetch(
      "http://localhost:4000/api/v1/users",
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
        if (data.status === "created") {
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

  componentWillMount() {
    return this.props.loggedInStatus ? this.redirect() : null;
  }

  redirect = () => {
    this.props.history.push("/favorites");
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
    const { username, password, password_confirmation } = this.state;

    return (
      <div>
        <SignUpRender
          username={username}
          password={password}
          password_confirmation={password_confirmation}
          redirect={this.redirect}
          handleErrors={this.handleErrors}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          errors={this.state.errors}
        />
      </div>
    );
  }
}
export default SignUp;
