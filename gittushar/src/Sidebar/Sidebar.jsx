import React, { Component } from "react";
import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import "./Sidebar.css";
import HomeIcon from "@material-ui/icons/Home";
import DetailsIcon from "@material-ui/icons/Details";
import ChildFriendlyIcon from "@material-ui/icons/ChildFriendly";

class Sidebar extends Component {
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
                <DetailsIcon className="iconstyle" /> Candidate
              </NavText>
            </NavItem>
            <NavItem eventKey=" Recruiter">
              <NavIcon />
              <NavText>
                <ChildFriendlyIcon className="iconstyle" /> Recruiter
              </NavText>
            </NavItem>
          </SideNav.Nav>
        </SideNav>
      </div>
    );
  }
}

export default Sidebar;
