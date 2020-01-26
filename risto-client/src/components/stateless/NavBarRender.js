import React from "react";

import { Menu, Segment } from "semantic-ui-react";

const NavBarRender = props => {
  return (
    <Segment inverted>
      <Menu inverted secondary>
        <a href="/home">
          <Menu.Item
            name="home"
            active={props.active === "home"}
            onClick={props.activeItem}
          />
        </a>
        <Menu.Menu position="right">
          {props.loggedIn ? null : (
            <a href="/signup">
              <Menu.Item
                name="Sign up"
                active={props.active === "sign up"}
                onClick={props.activeItem}
              />
            </a>
          )}
          {props.loggedIn ? null : (
            <a href="/login">
              <Menu.Item
                name="Login"
                active={props.active === "login"}
                onClick={props.activeItem}
              />
            </a>
          )}
          {props.loggedIn ? (
            <a href="/home">
              <Menu.Item
                name="Logout"
                active={props.active === "logout"}
                onClick={props.activeItem}
              />
            </a>
          ) : null}
        </Menu.Menu>
      </Menu>
    </Segment>
  );
};

export default NavBarRender;
