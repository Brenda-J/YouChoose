import React from "react";
import { Link } from "react-router-dom";
// import './navbar.css'

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.handleLocation = this.handleLocation.bind(this);
    // this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  handleLocation(e) {
    e.preventDefault();
    this.props.receiveLocation(e.target.value);
  }

  render() {
    let display;
    if (this.props.loggedIn) {
      display = (
        <div className="loggedin-right">
          <button
            className="location-buttons"
            onClick={this.handleLocation}
            value="sanfranciscoca"
          >
            San Francisco
          </button>
          <button
            className="location-buttons"
            onClick={this.handleLocation}
            value="newyorkcity"
          >
            New York City
          </button>
          <button className="logout-button" onClick={this.logoutUser}>
            Logout
          </button>
        </div>
      );
    } else {
      display = (
        <div className="login-buttons">
          <Link className="signup-button" to={"/signup"}>
            Sign Up
          </Link>
          <br />
          <Link className="login-button" to={"/login"}>
            Login
          </Link>
        </div>
      );
    }

    return (
      <div className="navbar">
        <div className="navbar-left">
          <h1 className="youchoose">YouChoose</h1>
          <Link className="home-button" to={"/"}>
            Home
          </Link>
        </div>

        <div className="navbar-right">{display}</div>
      </div>
    );
  }
}

export default NavBar;
