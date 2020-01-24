import React, { Component } from "react";
// import { Form, Button, Col } from 'react-bootstrap';
import { connect } from "react-redux";
// import { withRouter } from "react-router-dom";
import { signUp } from "../actions/authActions";
// import TextFieldGroup from "../components/common/formFields";

class SignUp extends Component {
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
    // if (this.props.signUp(this.state)) {
    //   this.props.history.push("/user_profile");
    //   window.alert("Thank you for signing up.");
    // } else {
    //   window.alert("We're having issues creating your account.");

    this.props.signUp(this.state);
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

      /* <main>
        <Form onSubmit={this.handleSubmit}>
          <h1 className="page-title">Sign Up</h1>
          <TextFieldGroup
            label="Name"
            id="formControlsName"
            type="text"
            name="name"
            placeholder="Name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <TextFieldGroup
            label="Email"
            id="formControlsEmail"
            type="text"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <TextFieldGroup
            label="Password"
            id="formControlsPassword"
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <div className="submissionFields">
            <Button bsStyle="link">Forgot Password?</Button>
            <Button type="submit" value="Sign Up" bsStyle="primary">
              Sign Up
            </Button>
          </div>
          <div className="alternativeAccess">
            <p>
              Already have an Account? <a href="/login">Log In</a>
            </p>
          </div>
        </Form>
      </main> */
    );
  }
}

// export default SignUp = withRouter(connect(null, { signUp })(SignUp));
export default connect(null, { signUp })(SignUp);
