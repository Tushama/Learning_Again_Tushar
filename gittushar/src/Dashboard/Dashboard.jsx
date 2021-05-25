import React, { Component } from "react";
import HOC from "../HOC";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import "./Dashboard.css";
import axios from "axios";
import RefreshIcon from "@material-ui/icons/Refresh";
import { Circular } from "react-graphical-ui";
import { Histogram } from "react-graphical-ui";
import { Bar } from "react-chartjs-2";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      Veryfied_user: '',
      Un_verified_user:'',
      Total_User:'',
      Total_Resume:'',
      Total_Live:'',
      Total_Deleted_Request:'',
      Total_Draft:'',

      // graphdata:  {
      //   labels: ['1', '2', '3','4', '5', '6','7', '8', '9','10', '11', '12',],
      //   datasets: [
      //     {
      //       label: "Users Count",
      //       backgroundColor: "rgba(75,192,192,1)",
      //       borderColor: "rgba(0,0,0,1)",
      //       borderWidth: 2,
      //       data: [
      //         this.state.id,
      //         this.state.Veryfied_user,
      //         this.state.Un_verified_user,
      //         this.state.Total_User,
      //         this.state.Total_Resume,
      //         this.state.Total_Live,
      //         this.state.Total_Deleted_Request,
      //         this.state.Total_Draft,
      //       ],
      //     },
      //   ],
      // }

      

    }
  }


  

  Reload = () => {
    let url = "http://seo.srcservicesltd.com:8000/Refresh";

    axios.patch(url).then(
      (response) => {
        console.log("======alldata", response);
      },

      (error) => {}
    );
  };
  componentDidMount = () => {
    let url = "http://seo.srcservicesltd.com:8000" + "/count_statics";

    axios.get(url).then(
      (response) => {
        console.log("======", response);
        this.setState({
          id: response.data.id,
          Veryfied_user: response.data.data.Veryfied_user,
          Un_verified_user: response.data.data.Un_verified_user,
          Total_User: response.data.data.Total_User,
          Total_Resume: response.data.data.Total_Resume,
          Total_Live: response.data.data.Total_Live,
          Total_Deleted_Request: response.data.data.Total_Deleted_Request,
          Total_Draft: response.data.data.Total_Draft,
        });
      },

      (error) => {}
    );
  };

  render() {
    return (
      <div>
        <RefreshIcon className="reload1" onClick={this.Reload} />
        <div className="allcard">
          <div>
            <Grid container>
              <Grid item md={3}>
                <Card className="card1">
                  <b>Total Registered Users</b>
                </Card>
              </Grid>

              <Grid item md={3}>
                <Card className="middlecard">
                  <b>Total Verified</b>
                  <Circular
                    value={this.state.Veryfied_user}
                    max={100}
                    display="inline"
                    withGrid={false}
                  />
                </Card>
              </Grid>

              <Grid item md={6}>
                <Card className="card3">
                  {/* <Bar
                    data={this.state.graphdata}
                    options={{
                      title: {
                        display: true,
                        text: "Total Registered Users per day",
                        fontSize: 20,
                      },
                      legend: {
                        display: true,
                        position: "right",
                      },
                    }}
                  /> */}
                </Card>
              </Grid>

              {/* <Grid item md={3}>
                <Card className="card3 ">
                  <b>Total Unverified Users</b>

                  <Circular
                    value={this.state.Un_verified_user}
                    max={5}
                    display="inline"
                    withGrid={false}
                  />
                </Card> */}
              {/* </Grid> */}
            </Grid>
          </div>
          <div>
            <Grid container>
              <Grid item md={3}>
                <Card className="card1">
                  <b>Total Draft</b>
                </Card>
              </Grid>

              <Grid item md={3}>
                <Card className="card1">
                  <b>Total Resume</b>
                </Card>
              </Grid>

              <Grid item md={6}>
                <Card className="card3"></Card>
              </Grid>
            </Grid>
          </div>

          <div>
            <Grid container>
              <Grid item md={3}>
                <Card className="card1">
                  <b>Total Unverified Users</b>
                </Card>
              </Grid>

              <Grid item md={3}>
                <Card className="card1">
                  <b>Total Live Resume</b>
                </Card>
              </Grid>

              {/* <Grid item md={6}>
                <Card className="card3"></Card>
              </Grid> */}
            </Grid>
          </div>
        </div>
      </div>
    );
  }
}

export default HOC(Dashboard);
