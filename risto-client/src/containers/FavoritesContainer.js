import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button, Icon, Item, Label, Divider } from "semantic-ui-react";
// import { connect } from "react-redux";
// import { fetchFavorite } from "../actions/RestaurantsActions";
// import FavHome from "../components/FavHome";
// import Favorites from "../components/Favorites";

class FavoritesContainer extends Component {
  state = {
    favorites: []
  };

  componentDidMount() {
    fetch("http://localhost:4000/api/v1/restaurants") //fetch database
      .then(res => res.json())
      .then(data => {
        this.setState({
          favorites: data
        });
      });
    // debugger
    // console.log(this.props.fetchFavorite());
    // this.props.fetchFavorite();
  }

  render() {
    const favorites = this.state.favorites.map(fav => (
      <div>
        <Item.Group divided>
          <Item>
            <Item.Image
              avatar
              src={
                fav.images
                  ? fav.images
                  : "https://react.semantic-ui.com/images/wireframe/image.png"
              }
            />
            <Item.Content>
              <Item.Header as="a">{fav.name}</Item.Header>
              <Item.Description>
                <p>
                  Ratings:
                  <span
                    style={{
                      color: "green"
                    }}
                  >
                    {" " + fav.ratings}
                  </span>
                </p>
                <p>Open hours: {fav.hours}</p>
                <p>Address: {fav.address}</p>
              </Item.Description>
              <Item.Extra>
                <a href={fav.menu}>
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
                  <Button as="a" icon>
                    <Icon color="red" name="heart" size="large" />
                  </Button>
                </Button>
              </Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
        <Divider />
      </div>
    ));

    return (
      <div className="App">
        <br />
        <h1 style={{ textAlign: "center" }}>My Favorite Restaurants List:</h1>
        <Divider />
        <br />
        {favorites}
      </div>
    );
  }
}

// const mapStateToProps = state => {
//     // debugger
//     return {
//         favorites: state.favorites
//     };
// };

// const mapDispatchToProps = dispatch => {
//     return {
//         fetchFavorite: favorites => dispatch(fetchFavorite(favorites))
//     };
// };
// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )(FavoritesContainer);
export default FavoritesContainer;
