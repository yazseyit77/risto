import React from "react";
import { Input, Grid, Header, Icon } from "semantic-ui-react";

const RestaurantSearchPresent = props => {
  //   debugger;
  return (
    <Grid stackable textAlign="center">
      <Grid.Row verticalAlign="middle">
        <Grid.Column>
          <br />
          <Header icon>
            <Icon name="search" />
            <h1>Search for Restaurants:</h1>
          </Header>
          <form onSubmit={props.handleOnsubmit}>
            <Input
              action={{ color: "blue", content: "Search", size: "big" }}
              size="huge"
              icon="search"
              iconPosition="left"
              placeholder="Search..."
              name="name"
              onChange={props.handleOnChange}
            />
          </form>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default RestaurantSearchPresent;
