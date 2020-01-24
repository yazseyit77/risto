import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

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

    // axios
    //   .delete("http://localhost:4000/api/v1/logout", { withCredentials: true })
    //   .then(response => {
    //     props.handleLogout();
    //     props.history.pushState("/");
    //   })
    //   .catch(error => console.log(error));
  };

  return (
    <div>
      <h2>Only will show after Login!!!</h2>
      {props.loggedInStatus ? null : <Link to="/login">Log In</Link>}
      <br></br>

      {props.loggedInStatus ? null : <Link to="/signup">Sign Up</Link>}
      <br></br>

      {props.loggedInStatus ? (
        <Link to="/logout" onClick={handleClick}>
          Log Out
        </Link>
      ) : null}
    </div>
  );
};

export default Home;
