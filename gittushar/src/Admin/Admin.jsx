import React, { Component } from "react";
import HOC from "../HOC";
import "./Admin.css";
import Grid from "@material-ui/core/Grid";
class Admin extends Component {
  render() {
    return (
      <div>
        <div className="headingadmin">
          <Grid item md={10}>
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



            
          </Grid>
          <Grid item md={2}></Grid>
        </div>
      </div>
    );
  }
}
export default HOC(Admin);
