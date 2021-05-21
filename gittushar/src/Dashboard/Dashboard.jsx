import React, { Component } from "react";
import HOC from "../HOC";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import "./Dashboard.css";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Table } from "@material-ui/core";
import RefreshIcon from '@material-ui/icons/Refresh';
import axios from "axios";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    console.log("================", props);
    this.state = {
      name: "",
    };
  }
  // componentDidMount = () => {
  //     this.setState({
  //         name: this.props.location.state.name
  //     })
  // }
  Reload =()=>{
    let url = "http://seo.srcservicesltd.com:8000/Refresh";

    axios.patch(url).then(
      (response) => {
        console.log("======alldata", response);
      
      },

      (error) => {}
    );
  
  };
  render() {
    return (
      <div className="rex">
          <RefreshIcon className="reload" onClick={this.Reload}/>
       
        <div
          style={{ fontFamily: "arial", width: "100%" }}
          className=" employercard"
        >
        
          <Card className="cardcoloremploy">
            <div>
              Account Payable
              <p className="count">60</p>
            </div>
          </Card>
          <Card className=" cardcoloremploy">
            <div>
              Account Recievable
              <p className="count">33</p>
            </div>
          </Card>
          <Card className="cardcoloremploy">
            <div>
              Debt Equality
              <p className="count">1,00,000</p>
            </div>
          </Card>
          <Card className="cardcoloremploy ">
            <div>
              Equality Ratio
              <p className="count">60</p>
            </div>
          </Card>
          <Card className="cardcoloremploy">
            <div>
              Time Allocated
              <p className="count">60</p>
            </div>
          </Card>
        </div>
        <div className="employercard1">
          <Card className="cardcoloremploy1">
            <div>
              <table className="table">
                <thead class="grey lighten-2">
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Total Ammount Payable</th>
                    <th scope="col">Total Ammount Recievable</th>
                    <th scope="col">Total Equality</th>
                  </tr>
                </thead>
                <tr>
                  <th scope="row">Tushar Sharma</th>
                  <td>6,00,000</td>
                  <td>6,00,000</td>
                  <td>10%</td>
                </tr>
                <tr>
                  <th scope="row">Bhawna Yadav</th>
                  <td>10,00,000</td>
                  <td>4,00,000</td>
                  <td>15%</td>
                </tr>

                <tr>
                  <th scope="row">Nitin Singh</th>
                  <td>12,00,000</td>
                  <td>3,00,000</td>
                  <td>12%</td>
                </tr>
              </table>
            </div>
          </Card>
          <Card className="cardcoloremploy2"></Card>
        </div>
      </div>
    );
  }
}

export default HOC(Dashboard);
