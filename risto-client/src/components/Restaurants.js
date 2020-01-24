import React, { Component } from "react";
import { Button, Icon, Image, Item, Label, Menu } from "semantic-ui-react";

class Restaurants extends Component {
  render() {
    console.log(this.props.restaurants);
    const restaurants = this.props.restaurants.map(rest => (
      <Item.Group divided>
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
            <Item.Meta>
              <span className="cinema">
                Open hours: {rest.restaurant.timings}
              </span>
            </Item.Meta>
            <Item.Description>
              {rest.restaurant.location.address}
            </Item.Description>
            <Item.Extra>
              <a href={rest.restaurant.menu_url}>Menu</a>
              <Icon
                name="heart outline"
                color="red"
                size="big"
                floated="right"
              />
            </Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>
    ));
    return (
      <div>
        <div className="card">
          <ol>{restaurants}</ol>
        </div>
      </div>
    );
  }
}

export default Restaurants;
