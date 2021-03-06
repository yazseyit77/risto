import React, { Component } from "react";
import { Input, Grid, Header, Icon } from "semantic-ui-react";

class RestaurantSearch extends Component {
  state = {
    name: ""
  };

  handleOnsubmit = e => {
    e.preventDefault();
    this.props.fetchRestaurants(this.state.name);
    this.setState({
      name: ""
    });
  };

  handleOnChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <Grid stackable textAlign="center">
        <Grid.Row verticalAlign="middle">
          <Grid.Column>
            <br />
            <Header icon>
              <Icon name="search" />
              <h1>Search for Restaurants:</h1>
            </Header>
            <form onSubmit={this.handleOnsubmit}>
              <Input
                action={{ color: "blue", content: "Search", size: "big" }}
                size="huge"
                icon="search"
                iconPosition="left"
                placeholder="Search..."
                name="name"
                onChange={this.handleOnChange}
                value={this.state.name}
              />
            </form>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default RestaurantSearch;
