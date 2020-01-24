import React, { Component } from "react";
import { Menu, Segment } from "semantic-ui-react";

export default class NavBar extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Segment inverted>
        <Menu inverted secondary>
          <a href="/">
            <Menu.Item
              name="home"
              active={activeItem === "home"}
              onClick={this.handleItemClick}
            />
          </a>
          <Menu.Item
            name="Favorites"
            active={activeItem === "friends"}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position="right">
            {this.props.loggedInStatus ? null : (
              <a href="/signup">
                <Menu.Item
                  name="Sign up"
                  active={activeItem === "logout"}
                  onClick={this.handleItemClick}
                />
              </a>
            )}
            {this.props.loggedInStatus ? null : (
              <a href="/login">
                <Menu.Item
                  name="Login"
                  active={activeItem === "logout"}
                  onClick={this.handleItemClick}
                />
              </a>
            )}
            <a href="/logout">
              <Menu.Item
                name="Logout"
                active={activeItem === "logout"}
                onClick={this.handleItemClick}
              />
            </a>
          </Menu.Menu>
        </Menu>
      </Segment>
    );
  }
}
