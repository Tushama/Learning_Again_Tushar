import React, { Component } from "react";
import "./Recruiter_Dashboard.css";
import axios from "axios";
import CloseIcon from "@material-ui/icons/Close";
import HOC from "../HOC";
import DeleteIcon from "@material-ui/icons/Delete";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import Swal from "sweetalert2";
import ReportProblemIcon from "@material-ui/icons/ReportProblem";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import Grid from "@material-ui/core/Grid";
import Dialog from "@material-ui/core/Dialog";
import { DialogActions } from "@material-ui/core";
import Button from "@material-ui/core/Button";
class Recruiter_Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alldata: [],
      value: "",
    };
  }

  componentDidMount = (item) => {
    let url = "http://seo.srcservicesltd.com:8000/projectlist/all/0";

    axios.get(url).then(
      (response) => {
        this.setState({
          alldata: response.data.data,
        });
      },

      (error) => {}
    );
  };

  decline = (item) => {
    // let url = "http://seo.srcservicesltd.com:8000/project/status";
    // let temp = {
    //   User_id: this.state.User_id,
    //   id: this.state.id,
    //   project_status: "Decline",
    // };
    // axios.patch(url, temp).then(
    //   (response) => {
    //     console.log("======alldata", response.data.data);
    //     this.setState({
    //       Project_Status: this.state.alldata.Project_Status,
    //     });
    //   },
    //   (error) => {}
    // );
    // Swal.fire({
    //   title: "Are you sure?",
    //   text: "You won't be able to revert this!",
    //   icon: "warning",
    //   showCancelButton: true,
    //   confirmButtonColor: "#3085d6",
    //   cancelButtonColor: "#d33",
    //   confirmButtonText: "Yes, delete it!",
    // }).then((result) => {
    //   if (result.isConfirmed) {
    //     Swal.fire("Deleted!", "Your file has been deleted.", "success");
    //   }
    // });
  };

  actionlive = (data) => {
    try {
      let url = `http://localhost:8000/ProjectLive/${data.User_id}/${data.id}/Live`;
      console.log("bhawna", url);
      axios.patch(url).then(
        (response) => {
          if (response.status == 200) {
            Swal.fire({
              icon: "success",
              title: "success",
              text: response.data.message,
            });
          }
          window.location.reload();
          console.log("======alldata", response.data.data);
        },

        (error) => {
          console.log("ere", error);
        }
      );
    } catch (error) {
      console.log("ty err", error);
    }
  };
  valueselect = (s) => {
    console.log("======ggghhghhthtgggh", s);

    let url = `http://seo.srcservicesltd.com:8000/projectlist/${s}/0`;
    axios.get(url).then(
      (response) => {
        console.log("======alldata", response.data.data);
        this.setState({
          alldata: response.data.data,
          // User_id: item.User_id,
          // id: item.id,
        });
      },

      (error) => {}
    );

    console.log("--------------", this.state.value);
  };
  Projectpro = (id) => {
    let url = `http://www.localhost:8000/projectdata/${id}`;
    axios.get(url).then(
      (response) => {
        console.log("======alldata", response);
        this.setState({
          Project_Title: response.data.project.Project_Title,
          Project_Description: response.data.project.Project_Description,
          Budget_Limit: response.data.project.Budget_Limit,
          Budget_Currency: response.data.project.Budget_Currency,
          Last_modification: response.data.project.Last_modification,
        });
      },

      (error) => {}
    );
  };
  render() {
    return (
      <div>
        <div className="displaytable1">
          <table className=" table table-striped displaytable tableoutline ">
            <thead>
              <tr className="colorback">
                <th scope="col">Id</th>
                <th scope="col">Project Name</th>
                <th scope="row">
                  {" "}
                  <select
                    onChange={(e) => {
                      this.valueselect(e.target.value);
                    }}
                  >
                    <option value="all">All</option>
                    <option value="Live">Live</option>
                    <option value="pending for Review">pending</option>
                    <option value="Decline">Decline</option>
                  </select>
                </th>

                <th scope="col">Last Modified Date</th>
                <th scope="col">Action</th>
              </tr>
            </thead>

            <tbody>
              {this.state.alldata.map((item, index) => (
                <tr>
                  <th>{item.id}</th>
                  <th scope="col">
                    <p>{item.Project_Title}</p>
                  </th>
                  <th scope="col">
                    <p> {item.Project_Status}</p>
                  </th>
                  <th scope="col">
                    <p>
                      {new Intl.DateTimeFormat("en-US", {
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit",
                        hour: "2-digit",
                        minute: "2-digit",
                      }).format(item.Last_modification)}
                    </p>
                  </th>
                  <th scope="col">
                    <label>
                      <Button className="deleteicon" onClick={this.decline}>
                        {" "}
                        Decline
                      </Button>

                      <Button
                        className="deleteicon1 mt-1 "
                        onClick={() => this.actionlive(item)}
                      >
                        Live
                      </Button>
                    </label>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default HOC(Recruiter_Dashboard);
