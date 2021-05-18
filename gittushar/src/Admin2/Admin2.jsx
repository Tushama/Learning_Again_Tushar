import React, { Component } from 'react';
import HOC from "../HOC"
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import "./Admin2.css";
class Admin2 extends Component {
    render() {
        return (
            <div>
                <div className="allcard">
                <div>
                <Grid container>
                <Grid item md={1}>

                    </Grid>
                    <Grid item md={3}>
<Card className="card1">
hello
</Card>
                    </Grid>
                    <Grid item md={5}>
<Card className="middlecard">
tushar
</Card>
                    </Grid>
                    <Grid item md={3}>
<Card className="card3 ">
sharma
</Card>
                    </Grid>
                </Grid>
                </div>
                <div>

                <Grid container>
                <Grid item md={1}>

                    </Grid>
                    <Grid item md={4}>
<Card className="cardr1">
hello
</Card>
                    </Grid>
                    <Grid item md={4}>
<Card className="cardr2">
tushar
</Card>
                    </Grid>
                    <Grid item md={3}>
<Card className="card3">
sharma
</Card>
<Card className="card3">
sharma
</Card>
                    </Grid>
                </Grid>

                </div>
               
                </div>
            </div>
        );
    }
}

export default HOC(Admin2);