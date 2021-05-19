import React, { Component } from 'react';
import "./Recruiterheader.css"
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
class Recruiterheader extends Component {
    
    render() {
        return (
            <div>
                <div className="headeruser">
                    <div className="">
<Grid container >
    <Grid item md={4}>
{""}
    </Grid>
    <Grid item md={4}>
<input className="inputbox"/>
<SearchIcon className="foriconsearch mt-2"/>
<NotificationsActiveIcon className="notification"/>
    </Grid>
    <Grid item md={4}>
<AccountCircleIcon className="usericon"/>
<ArrowDropDownIcon/>

    </Grid>
</Grid>

</div>
                </div>
            </div>
        );
    }
}

export default Recruiterheader;