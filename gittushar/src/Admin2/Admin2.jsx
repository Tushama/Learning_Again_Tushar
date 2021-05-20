import React, { Component } from 'react';
import HOC from "../HOC"
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import "./Admin2.css";
import axios from "axios";
import RefreshIcon from '@material-ui/icons/Refresh';
import { Circular } from 'react-graphical-ui';
class Admin2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
           id:"",
           Veryfied_user:"",
           Un_verified_user:"",
           Total_User:"",
           Total_Resume:"",
           Total_Live:"",
           Total_Deleted_Request:"",
           Total_Draft:"",
      
          }
     
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
            console.log("======",response)
          this.setState({
            id:response.data.id,
            Veryfied_user:response.data.data.Veryfied_user,
            Un_verified_user:response.data.data.Un_verified_user,
            Total_User:response.data.data.Total_User,
            Total_Resume:response.data.data.Total_Resume,
            Total_Live:response.data.data.Total_Live,
            Total_Deleted_Request:response.data.data.Total_Deleted_Request,
            Total_Draft:response.data.data.Total_Draft,
          });
        },
  
        (error) => {}
      );
      }

    render() {
        return (
            <div>
                   <RefreshIcon className="reload1" onClick={this.Reload}/>
                <div className="allcard">
                <div>
                <Grid container>
                <Grid item md={1}>

                    </Grid>
                    <Grid item md={3}>
<Card className="card1">
<b>Total Registered Users</b>
<p>{this.state.Total_User}</p>
</Card>
                    </Grid>
                    <Grid item md={5}>
<Card className="middlecard">
<b>Total Verified Users</b>
<p>{this.state.Veryfied_user}</p>
</Card>
                    </Grid>
                    <Grid item md={3}>
<Card className="card3 ">
<b>Total Unverified Users</b>
<p>{this.state.Un_verified_user}</p>
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
{/* <img className="imagedemo" src ="https://image.freepik.com/free-vector/business-abstract-infographics-with-3d-pie-info-char-graph-bar_53562-5873.jpg"/> */}
<Circular value={this.state.Total_Draft}  max={100} display="inline" withGrid={true} />
<h1>Total Draft</h1>
</Card>
                    </Grid>
                    <Grid item md={4}>
<Card className="cardr2">
{/* <img className="imagedemo" src ="https://www.officetooltips.com/images/tips/184_2016/7.png"/> */}
<Circular value={this.state.Total_Deleted_Request}  max={100} display="inline" withGrid={true} />
<h1>Total Deleted Request</h1>
</Card>
                    </Grid>
                    <Grid item md={3}>
<Card className="card3">
<b>Total Resume</b>
<p>{this.state.Total_Resume}</p>
</Card>
<Card className="card3">
<b>Total Live Resume</b>
<p>{this.state.Total_Live}</p>
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