import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";
import RestaurantsContainer from "./containers/RestaurantsContainer";
import FavoritesContainer from "./containers/FavoritesContainer";
import Login from "./components/registrations/Login";
import SignUp from "./components/registrations/SignUp";
import About from "../src/components/stateless/About";
import NavBar from "./components/NavBar";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      user: {}
    };
  }

  componentDidMount() {
    this.loginStatus();
  }

  loginStatus = () => {
    fetch("http://localhost:4000/api/v1/logged_in", { withCredentials: true })
      .then(res => res.json())
      .then(data => {
        if (data.logged_in) {
          this.handleLogin(data);
        } else {
          this.handleLogout();
        }
      })
      .catch(error => console.log("api errors:", error));
  };

  handleLogin = data => {
    this.setState({
      isLoggedIn: true,
      user: data.user
    });
  };

  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
      user: {}
    });
  };

  render() {
    return (
      <Container>
        <div className="App" style={{ backgroundColor: "#FBFAF5" }}>
          <Router>
            <Route
              path="/"
              render={props => (
                <NavBar
                  {...props}
                  logout={this.handleLogout}
                  loggedInStatus={this.state.isLoggedIn}
                />
              )}
            />
            <Switch>
              <Route exact path="/home" component={RestaurantsContainer} />
              <Route exact path="/about" component={About} />
              {this.state.isLoggedIn === true ? (
                <Route
                  exact
                  path="/favorites"
                  render={props => (
                    <FavoritesContainer
                      {...props}
                      handleLogout={this.handleLogout}
                      loggedInStatus={this.state.isLoggedIn}
                    />
                  )}
                />
              ) : (
                <Route exact path="/home" component={RestaurantsContainer} />
              )}
              <Route
                exact
                path="/login"
                render={props => (
                  <Login
                    {...props}
                    handleLogin={this.handleLogin}
                    loggedInStatus={this.state.isLoggedIn}
                  />
                )}
              />
              <Route
                exact
                path="/signup"
                render={props => (
                  <SignUp
                    {...props}
                    handleLogin={this.handleLogin}
                    loggedInStatus={this.state.isLoggedIn}
                  />
                )}
              />
            </Switch>
          </Router>
        </div>
      </Container>
    );
  }
}

export default App;
