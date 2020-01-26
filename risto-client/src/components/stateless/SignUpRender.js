import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Divider,
  Form,
  Segment,
  Header,
  Icon
} from "semantic-ui-react";

const SignUpRender = props => {
  return (
    <Segment placeholder>
      <Header as="h1" icon textAlign="center">
        <Icon name="user" circular />
        <Header.Content>Register a new account </Header.Content>
      </Header>
      <br />
      <br />
      <Form onSubmit={props.handleSubmit}>
        <Form.Input
          icon="user"
          iconPosition="left"
          label="Username"
          placeholder="username"
          type="text"
          name="username"
          value={props.username}
          onChange={props.handleChange}
        />
        <Form.Input
          icon="lock"
          iconPosition="left"
          label="Password"
          placeholder="password"
          type="password"
          name="password"
          value={props.password}
          onChange={props.handleChange}
        />{" "}
        <Form.Input
          icon="lock"
          iconPosition="left"
          label="Password Confirmation"
          placeholder="password confirmation"
          type="password"
          name="password_confirmation"
          value={props.password_confirmation}
          onChange={props.handleChange}
        />
        <Button content="Sign Up" primary />
      </Form>
      <br />
      <br />
      <Divider horizontal>Already signed up?</Divider>
      <Link to="/login">
        <Button content="Login" icon="signup" size="big" />
      </Link>
      <div>{props.errors ? props.handleErrors() : null}</div>
    </Segment>
  );
};

export default SignUpRender;
