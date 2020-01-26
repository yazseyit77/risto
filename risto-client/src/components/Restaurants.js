import React, { Component } from "react";
import { Button, Icon, Item, Label } from "semantic-ui-react";
import uuid from "uuid";

class Restaurants extends Component {
  render() {
    // console.log(this.props.restaurants);
    const restaurants = this.props.restaurants.map(rest => (
      <Item.Group divided key={rest.restaurant.id} id={uuid}>
        <Item>
          <Item.Image
            avatar
            src={
              rest.restaurant.thumb
                ? rest.restaurant.thumb
                : "https://react.semantic-ui.com/images/wireframe/image.png"
            }
          />
          <Item.Content>
            <br />
            <Item.Header as="a">
              <a href={rest.restaurant.url}>{rest.restaurant.name}</a>
            </Item.Header>
            <Item.Description>
              <p>
                Ratings:{" "}
                <span
                  style={{
                    color: "#" + rest.restaurant.user_rating.rating_color
                  }}
                >
                  {rest.restaurant.user_rating.aggregate_rating}
                </span>
              </p>
              <p>Open hours: {rest.restaurant.timings}</p>
              <p>Address: {rest.restaurant.location.address}</p>
            </Item.Description>
            <Item.Extra>
              <a href={rest.restaurant.menu_url}>
                <Button animated>
                  <Button.Content visible>Menu</Button.Content>
                  <Button.Content hidden>
                    <Icon name="arrow right" />
                  </Button.Content>
                </Button>
              </a>
              <Button as="div" labelPosition="left">
                <Label basic pointing="right">
                  Add to favorites:
                </Label>
                <Button as="a" icon onClick={this.props.handleOnClick}>
                  <Icon color="red" name="heart" size="large" />
                </Button>
              </Button>
            </Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>
    ));
    return (
      <div>
        <div className="card">
          <p id={uuid}>{restaurants}</p>
          {/* <ol>{restaurants}</ol> */}
        </div>
      </div>
    );
  }
}

export default Restaurants;
