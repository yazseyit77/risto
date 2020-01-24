import React, { Component } from "react";
import { connect } from "react-redux";
// import { withRouter } from "react-router-dom";
import { authenticate } from "../actions/authActions";
// import TextFieldGroup from "../components/common/formFields";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.authenticate(this.state);

    // if (this.props.authenticate(this.state)) {
    //   this.props.history.push("/user_profile");
    //   window.alert("You're Logged In!");
    // } else {
    //   window.alert("Sorry, something went wrong. Please try logging in again.");
    // }
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
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

// export default Login = withRouter(connect(null, { authenticate })(Login));
export default connect(null, { authenticate })(Login);
