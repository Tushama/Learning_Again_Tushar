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

  dashboardHandler = () => {
    this.props.history.push("/dashboard");
  }

  recruiterHandler = () => {
    this.props.history.push("/recruiter-dashboard");
  };
  render() {
    return (
      <div>
       
        <SideNav className="sidebarfull" onSelect={(selected) => {}}>
          <SideNav.Toggle />
          <SideNav.Nav>
            <NavItem  onClick={this.dashboardHandler}>
              <NavIcon />
              <NavText>
                <HomeIcon className="iconstyletext" /> Dashboard
              </NavText>
            </NavItem>
            <NavItem eventKey="Candidate" onClick={this.candidateHandler}>
              <NavIcon />
              <NavText>
                <DetailsIcon
                  className="iconstyle"
                  />{" "}
                Candidate
              </NavText>
            </NavItem>
            <NavItem eventKey=" Recruiter" onClick={this.recruiterHandler}>
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
