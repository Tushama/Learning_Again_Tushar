import React, { Component } from "react";
import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import "./Sidebar.css";
import HomeIcon from "@material-ui/icons/Home";
import DetailsIcon from "@material-ui/icons/Details";
import ChildFriendlyIcon from "@material-ui/icons/ChildFriendly";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  candidateHandler = () => {
    this.props.history.push("/Candidate-User");
  };
  recruiterHandler = () => {
    this.props.history.push("/Recruiter-User");
  };
  render() {
    return (
      <div>
       
        <SideNav className="sidebarfull" onSelect={(selected) => {}}>
          <SideNav.Toggle />
          <SideNav.Nav>
            <NavItem>
              <NavIcon />
              <NavText>
                <HomeIcon className="iconstyletext" /> Dashboard
              </NavText>
            </NavItem>
            <NavItem eventKey="Candidate">
              <NavIcon />
              <NavText>
                <DetailsIcon
                  className="iconstyle"
                  onClick={this.candidateHandler}
                />{" "}
                Candidate
              </NavText>
            </NavItem>
            <NavItem eventKey=" Recruiter">
              <NavIcon />
              <NavText>
                <ChildFriendlyIcon
                  className="iconstyle"
                  onClick={this.recruiterHandler}
                />{" "}
                Recruiter
              </NavText>
            </NavItem>
          </SideNav.Nav>
        </SideNav>
      </div>
    );
  }
}

export default Sidebar;
