import React, { Component } from 'react'
import HOC from "../HOC";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import "./Dashboard.css"
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';



class Dashboard extends Component {
    constructor(props) {
        super(props)
        console.log("================", props)
        this.state = {
            name: "",
        }
    }
    componentDidMount = () => {
        this.setState({
            name: this.props.location.state.name
        })
    }
    render() {
        return (
            <div className="rex">

<div
          style={{ fontFamily: "arial", width: "100%"}}
          className=" employercard"
        >
          <Card
            style={{
           
              backgroundColor: "aliceblue",
            }}
            className="m-2 p-3 justify-content-md-center cardcoloremploy"
          >
        
            <div>
               Account Payable
              <p className="count">60</p>
            </div>
          </Card>
          <Card
            style={{
           
              backgroundColor: "aliceblue",
            }}
            className="m-2 p-3 cardcoloremploy"
          >
            <div
            >
            Account Recievable
              <p className="count">33</p>
            </div>
          </Card>
          <Card
            style={{
           
              backgroundColor: "aliceblue",
            }}
            className=" cardcoloremploy"
          >
            <div
            >
              Debt Equality
              <p className="count">1,00,000</p>
            </div>
          </Card>
           <Card className="cardcoloremploy "
           style={{backgroundColor:"aliceblue"}}
          >
            <div>
       Equality Ratio
              <p className="count">60</p>
            </div>
          </Card>
          <Card className="cardcoloremploy m-2 p-3"
          style={{backgroundColor:"aliceblue" }}
          >
            <div
            >
              Time Allocated
              <p className="count">60</p>
            </div>
         
          </Card>
        
      
        </div>
        <div>
        <Card className="cardcoloremploy1 m-2 p-3"
          style={{backgroundColor:"aliceblue" }}
          >
            <div
            >
              Time Allocated
              <p className="count">60</p>
            </div>
         
          </Card>

        </div>
                <h1> {this.state.name}</h1>




            </div>
        )
    }
}

export default HOC(Dashboard)
