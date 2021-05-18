import React, { Component } from "react";
import HOC from "../HOC";
import "./Admin.css";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
class Admin extends Component {
  render() {
    return (
      <div>
        <div className="headingadmin">
        <Grid container>
          <Grid item md={8}>
          <Card className="stylecard">
            <h1 className="">Admin Page</h1>
            <p>
              This one is a clean and professional-looking dashboard with all
              the features and elements you want. The developer has given you
              advanced elements like wizards, validations and much more to make
              an interactive dashboard design. Apart from the elements you also
              get widgets with tabs, datepicker, and range sliders to make the
              input option easier for the user. Since it is an HTML5 based admin
              template you can easily integrate and use it with other frameworks
              to make a powerful admin template. The developer gives us both
              premium and free version, this one is a premium version, the free
              version is mentioned below in this post.
            </p>
           
              <div className="cardflex">
                <img src="https://tse2.mm.bing.net/th?id=OIP.DF-VcakLwF0LyzGToilzgAHaEf&pid=Api&P=0&w=255&h=155"></img>
               
              
              </div>
              <h4 className="profileset">Profile</h4>
              <div>
              <p className="profileset1">
              The CEO Story is a platform for and about exceptional
              entrepreneurs and business leaders. Our adept team of writers
              performs accurate research on the career trajectories of
              world-renowned C-Suite Executives and distil it into the
              exemplary advice and best practices for everyone. Our ‘ezine’
              offers outright coverage from start-ups to legacy businesses
              and anyone in between willing to give back by sharing their
              journey to success with The CEO Story’s global readership.
            </p>
            </div>
            </Card>
          </Grid>
          <Grid item md={4}>
            <Card className="secondcard">
            <div class="card-body">
            <h5 className="cardtitle">Viewers</h5>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">No.</th>
                  <th scope="col">First</th>
                  <th scope="col">Last</th>
                  <th scope="col">Handle</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Nitin</td>
                  <td>Developer</td>
                  <td>@nitin</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Ujjawal</td>
                  <td>Developer</td>
                  <td>@ujjawal</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Punit</td>
                  <td>Tester</td>
                  <td>@punit</td>
                </tr>
                <tr>
                <th scope="row">4</th>
                <td>Tushar</td>
                <td>Developer</td>
                <td>@tushar</td>
              </tr>
              <tr>
              <th scope="row">5</th>
              <td>Bhawna</td>
              <td>Developer</td>
              <td>@bhawna</td>
            </tr>
            <tr>
            <th scope="row">6</th>
            <td>Riya</td>
            <td>HR</td>
            <td>@riya</td>
          </tr>
      
              </tbody>
            </table>
          </div>
            </Card>
            <Card className="secondcard1">
            <div className="aboutcard">
            <h4>Brief</h4><hr/>
            <p>Personal Details</p>
            <p>Education</p>
            <p>Profession</p>
            <p>Online Profile</p>
            <p>Destination</p>
            </div>
            </Card>
          </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}
export default HOC(Admin);
