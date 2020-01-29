import React, { Component } from "react";
import NavBarRender from "./stateless/NavBarRender";

export default class NavBar extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <div>
        <NavBarRender
          activeItem={this.handleItemClick}
          active={activeItem}
          loggedIn={this.props.loggedInStatus}
        />
      </div>
    );
  }
}
