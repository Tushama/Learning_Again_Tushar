import React, { Component } from 'react'
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import "./Sidebar.css";
import HomeIcon from '@material-ui/icons/Home';
import DetailsIcon from '@material-ui/icons/Details';
import ChildFriendlyIcon from '@material-ui/icons/ChildFriendly';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import MenuIcon from '@material-ui/icons/Menu';
 class Sidebar extends Component {
    render() {
        return (
            <div>
                <SideNav
                className="sidebarfull"
    onSelect={(selected) => {
        // Add your code here
    }}
>
{/* <MenuIcon className="hemburger"/> */}
    <SideNav.Toggle />
    <SideNav.Nav >
        <NavItem >
            <NavIcon>
                {/* <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }}/> */}
            </NavIcon>
            <NavText>
             <HomeIcon className="iconstyletext"/>   Home
            </NavText>
        </NavItem>
        <NavItem eventKey="Details">
            <NavIcon>
                {/* <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }}/> */}
            </NavIcon>
            <NavText>
            <DetailsIcon className="iconstyle"/> Details
            </NavText>
          
        </NavItem>
        <NavItem eventKey="Products">
            <NavIcon>
                {/* <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }}/> */}
            </NavIcon>
            <NavText>
            <ChildFriendlyIcon className="iconstyle"/>    Products
            </NavText>
          
        </NavItem>
        <NavItem eventKey="info">
            <NavIcon>
                {/* <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }}/> */}
            </NavIcon>
            <NavText>
          <ContactSupportIcon className="iconstyle"/>    Info
            </NavText>
          
        </NavItem>
    </SideNav.Nav>
</SideNav>

            </div>
        )
    }
}

export default Sidebar
