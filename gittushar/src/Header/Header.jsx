import React, { Component } from "react";
import "./Header.css";
import logo from "../images/logo.PNG";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
  }
  //   componentDidMount = () => {
  //      this.setState({
  //          name: this.props.location.state.name,
  //      })
  //  }
  imageHandler = () => {
    this.props.location.push("/login");
  };
  Home = () => {
    this.props.location.push("/home");
  };
  render() {
    return (
      <div>
        <div>
          <nav className="navbar navbar-inverse">
            <a class="navbar-brand" href="#">
              <img
                // onClick={this.imageHandler}
                src={logo}
                width="50"
                height="50"
                className="d-inline-block align-top logo"
                alt=""
              />
            </a>
            <div>
              <ul className="nav navbar-nav websitename">
                <li>
                  <a className="navigationcss" href="/admin2">
                    Admin
                  </a>
                </li>

                <li onClick={this.Home}>
                  <a className="navigationcss">Home</a>
                </li>
                <li>
                  <a className="navigationcss" href="#">
                    Development
                  </a>
                </li>
                <li>
                  <a className="navigationcss" href="#">
                    About
                  </a>
                </li>
                <li>
                  <a className="navigationcss" href="#">
                    Contact Us
                  </a>
                </li>
              </ul>
              <form className="navbar-form navbar-left searchfortushar">
                <NotificationsActiveIcon className="buttonuser" />
              </form>
              <div>
                <AccountCircleIcon className="buttonuser" />

                <h1> {this.state.name} </h1>
              </div>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default Header;
