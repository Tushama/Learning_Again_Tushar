import React, { Component } from 'react';
import "./Recruiterheader.css"
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
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
<input/>
<SearchIcon className="foriconsearch mt-2"/>
    </Grid>
    <Grid item md={4}>
<AccountCircleIcon className="usericon"/>
    </Grid>
</Grid>

</div>
                </div>
            </div>
        );
    }
}

export default Recruiterheader;