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

const LoginRender = props => {
  return (
    <Segment placeholder>
      <Header as="h1" icon textAlign="center">
        <Icon name="user" circular />
        <Header.Content>Login</Header.Content>
      </Header>
      <br />
      <br />
      <Form onSubmit={props.handleSubmit}>
        <Form.Input
          icon="user"
          iconPosition="left"
          label="Username"
          placeholder="Username"
          type="text"
          name="username"
          value={props.username}
          onChange={props.handleChange}
        />
        <Form.Input
          icon="lock"
          iconPosition="left"
          label="Password"
          placeholder="Password"
          type="password"
          name="password"
          value={props.password}
          onChange={props.handleChange}
        />
        <Button content="Login" primary />
      </Form>
      <br />
      <br />
      <Divider horizontal>Or</Divider>
      <Link to="/signup">
        <Button content="Sign up" icon="signup" size="big" />
      </Link>
      <div>{props.errors ? props.handleErrors() : null}</div>
    </Segment>
  );
};

export default LoginRender;
