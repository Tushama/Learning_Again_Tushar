import React, { Component } from "react";
import "./Header.css";
import logo from "../images/logo.PNG";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

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

  Home = () => {
    this.props.location.push("/home");
  };
  logouthandler = () => {
    this.props.location.push("/login");
  };
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <a
          className="navbar-brand"
          style={{ marginLeft: "5%", marginBottom: "1%", marginTop: "-1%" }}
        >
          <img src={logo} width="100" height="40" alt="" />
        </a>
        <div className="row w-100">
          <div className="col-7">
            <ul className="navbar-nav ml-5">
              <li class="nav-item">
                <a class="nav-link text-light" href="/admin2">
                  Admin
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-light" href="#">
                  Home
                </a>
              </li>
            </ul>
          </div>
          <div className="col-5">
            <form class="form-inline my-2 my-lg-0 ">
              <input
                class="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />

              <SearchIcon
                style={{
                  color: "red",
                  position: "relative",
                  marginLeft: "-7%",
                  height: 30,
                  width: 25,
                }}
              />

              <span>
                <NotificationsActiveIcon className="buttonuser ml-3 mr-3" />
                <AccountCircleIcon className="buttonuser ml-3" />
                
                <div class="dropdown">
                  <span>
                    {" "}
                    <ArrowDropDownIcon className="buttonuser ml-3"/>
                  </span>
                  <div class="dropdown-content">
                    <p onClick={this.logouthandler}>Logout</p>
                  </div>
                </div>
                {/* <h1> {this.state.name} </h1> */}
              </span>
            </form>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
