import React, { Component } from "react";
import { Button, Icon, Item, Label } from "semantic-ui-react";

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
            <Item.Description>
              <span className="">
                <p>Ratings: <span style={{ color: '#' + rest.restaurant.user_rating.rating_color }}>{rest.restaurant.user_rating.aggregate_rating}</span></p>
                <p>Open hours: {rest.restaurant.timings}</p>
                <p>Address: {rest.restaurant.location.address}</p>
              </span>
            </Item.Description>
            <Item.Extra>
              <a href={rest.restaurant.menu_url}>
                <Button animated>
                  <Button.Content visible>
                    Menu
                  </Button.Content>
                  <Button.Content hidden>
                    <Icon name="arrow right" />
                  </Button.Content>
                </Button>
              </a>
              <Button as="div" labelPosition="left">
                <Label basic pointing="right">
                  Add to favorites:
                </Label>
                <Button as="a" icon>
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
          <ol>{restaurants}</ol>
        </div>
      </div>
    );
  }
}

export default Restaurants;
