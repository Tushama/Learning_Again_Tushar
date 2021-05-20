import React, { Component } from 'react';
import HOC from "../HOC"
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import "./Admin2.css";
import axios from "axios";
import RefreshIcon from '@material-ui/icons/Refresh';
class Admin2 extends Component {
    constructor(props) {
        super(props);
     
    }

    Reload =()=>{
        window.location.reload()
      }
      componentDidMount=()=>{
        let url =
        "http://seo.srcservicesltd.com:8000" +
        "/count_statics" 
    
       
      axios.get(url).then(
        (response) => { 
          this.setState({
           
          });
        },
  
        (error) => {}
      );
      }

    render() {
        return (
            <div>
                   <RefreshIcon className="reload" onClick={this.Reload}/>
                <div className="allcard">
                <div>
                <Grid container>
                <Grid item md={1}>

                    </Grid>
                    <Grid item md={3}>
<Card className="card1">
<b>Total Registered Users</b>
<p>50</p>
</Card>
                    </Grid>
                    <Grid item md={5}>
<Card className="middlecard">
<b>Total Verified Users</b>
<p>45</p>
</Card>
                    </Grid>
                    <Grid item md={3}>
<Card className="card3 ">
<b>Total Unverified Users</b>
<p>23</p>
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
<img className="imagedemo" src ="https://image.freepik.com/free-vector/business-abstract-infographics-with-3d-pie-info-char-graph-bar_53562-5873.jpg"/>
</Card>
                    </Grid>
                    <Grid item md={4}>
<Card className="cardr2">
<img className="imagedemo" src ="https://www.officetooltips.com/images/tips/184_2016/7.png"/>
</Card>
                    </Grid>
                    <Grid item md={3}>
<Card className="card3">
<b>Total Resume</b>
<p>65</p>
</Card>
<Card className="card3">
<b>Total Live Resume</b>
<p>10</p>
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