import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../StartPage/StartPage.css";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: localStorage.getItem("userTokenTime"),
    };
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg ">
        <a className="navbar-brand">
          <div className="heading">
            <span className="icon">
              <Link to="/home">
                <span className="green">VideoLurb</span>
              </Link>
            </span>
            <div className="navbar-nav">
              {this.state.loggedIn ? (
                <React.Fragment>
                  {/*<NavLink className="nav-item nav-link" to="/home" exact>Home</NavLink>*/}
                  <NavLink className="nav-item nav-link" to="/upload">
                    Upload Videos
                  </NavLink>
                  <NavLink className="nav-item nav-link" to="/signOut">
                    Sign Out
                  </NavLink>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <NavLink className="nav-item nav-link" to="/signIn">
                    Sign In
                  </NavLink>
                  <NavLink className="nav-item nav-link" to="/signUp">
                    Sign Up
                  </NavLink>
                </React.Fragment>
              )}
            </div>
          </div>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </nav>
    );
  }
}

export default Navbar;
