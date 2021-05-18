import React, { Component } from 'react';
import HOC from "../HOC"
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import "./Admin2.css";
class Admin2 extends Component {
    render() {
        return (
            <div>
                <Grid container>
                <Grid item md={1}>

                    </Grid>
                    <Grid item md={3}>
<Card>
hello
</Card>
                    </Grid>
                    <Grid item md={5}>
<Card>
tushar
</Card>
                    </Grid>
                    <Grid item md={3}>
<Card>
sharma
</Card>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default HOC(Admin2);