import React, { Component } from "react";
import "./Header.css";
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
  Home = () => {
    this.props.location.push("/home");
  };
  render() {
    return (
      <div>
        <div>
          <nav className="navbar navbar-inverse">
            <div className="">
                          
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
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control "
                    placeholder="Search"
                    name="search"
                  />

                  <div className="input-group-btn">
                    <button className="btn btn-default icontest" type="submit">
                      <i className="glyphicon glyphicon-search " />
                    </button>
                  </div>
                </div>
                <NotificationsActiveIcon style={{ color: "white" }} />
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
