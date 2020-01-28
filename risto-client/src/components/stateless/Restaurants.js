import React, { Component } from "react";
import { Button, Icon, Item, Label } from "semantic-ui-react";

class Restaurants extends Component {
  render() {
    // console.log(this.props.restaurants);
    const restaurants = this.props.restaurants.map(rest => (
      <Item.Group divided key={rest.restaurant.id}>
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
            <Item.Header as="a" style={{ fontSize: "15px" }}>
              <a href={rest.restaurant.url}>{rest.restaurant.name}</a>
            </Item.Header>
            <Item.Description style={{ fontSize: "11px" }}>
              Ratings:
              <p>
                <span
                  style={{
                    color: "#" + rest.restaurant.user_rating.rating_color
                  }}
                >
                  {rest.restaurant.user_rating.aggregate_rating}
                </span>
              </p>
              Open hours:<p> {rest.restaurant.timings}</p>
              Address:<p> {rest.restaurant.location.address}</p>
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
          <p>{restaurants}</p>
          {/* <ol>{restaurants}</ol> */}
        </div>
      </div>
    );
  }
}

export default Restaurants;
