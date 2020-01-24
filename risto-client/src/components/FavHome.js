import React from "react";
import Favorites from "./Favorites";
import { Link } from "react-router-dom";
import { Button, Icon } from "semantic-ui-react";
// import NavBar from "./NavBar";

const Home = props => {
  const handleClick = () => {
    fetch(
      "http://localhost:4000/api/v1/logout",
      { method: "DELETE" },
      { withCredentials: true }
    )
      .then(res => res.json())
      .then(data => {
        props.handleLogout();
        props.history.push("/");
      })
      .catch(error => console.log(error));
  };

  return (
    <div>
      {props.loggedInStatus ? (
        <Link to="/logout" onClick={handleClick}>
          <Button.Group floated="right">
            <Button basic color="grey" animated="fade">
              <Button.Content visible>Logout</Button.Content>
              <Button.Content hidden>
                <Icon name="user outline" />
              </Button.Content>
            </Button>
          </Button.Group>
        </Link>
      ) : null}
      <br></br>
      <h2>Favorite Restaurants</h2>
      <br></br>
      <Favorites />
    </div>
  );
};

export default Home;
