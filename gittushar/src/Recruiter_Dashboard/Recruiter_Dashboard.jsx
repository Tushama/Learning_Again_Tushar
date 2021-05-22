import React, { Component } from "react";
import "./Recruiter_Dashboard.css";
import axios from "axios";
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
      id: "",
      projectopen:false,
    };
  }
 
  componentDidMount = (item) => {
 
    let url = "http://seo.srcservicesltd.com:8000/projectlist/all/0";

    axios.get(url).then(
      (response) => {
        console.log("======alldata", response.data.data);
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

  actionlive = () => {
    let url = "http://localhost:8000/ProjectLive/303/384";
    axios.get(url).then(
      (response) => {
        console.log("======alldata", response.data.data);
        this.setState({
          alldata: response.data.data,
        });
      },

      (error) => {}
    );
  };
  valueselect = (s) => {
    console.log("======ggghhghhthtgggh", s);
    // this.setState({
    //   value:event.target.value,
    // });
    // console.log("======ggghhghhthtgggh", event.target.value);
    let url = `http://seo.srcservicesltd.com:8000/projectlist/${s}/0` ;
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
  Projectpro=(id)=>{
    let url = `http://www.localhost:8000/projectdata/${id}`;
    axios.get(url).then(
      (response) => {
        console.log("======alldata", response);
        this.setState({
          projectopen:true,
        })
      },

      (error) => {}
    );

  }
  render() {
    return (
      <div>
        <div className="blankspace">
          <h1>Recruiter</h1>
        </div>
        <div className="displaytable1">
          <table className="table1 table table-striped displaytable tableoutline " >
            <thead>
              <tr className="colorback">
                <th scope="row">id</th>
                <th scope="col">Project Name</th>
                <th scope="col">
                  {" "}
                  <select
                        
                       onChange={(e)=>{
                        this.valueselect(e.target.value)
                       }}
                  >
                
<option value={"all"}>Status</option>
                    <option value={"Live"}>Live</option>
                    <option value={"Draft"}>Draft</option>
                    <option value={"Decline"}>Decline</option>
                    {/* <option value="Deleted">live</option>
                    <option value="Decline">Delete</option> */}
                  </select>
                </th>

                <th scope="col">Last Modified Date</th>
                <th scope="col">Action</th>
              </tr>
            </thead>

            <tbody>
              {this.state.alldata.map((item,index) => (
                <tr  onClick={() => {
                  console.log(item)
                  this.Projectpro(item.id);
                }}>
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
                      <ReportProblemIcon
                        className="deleteicon"
                        onClick={this.decline}
                      />
                      <PlayCircleOutlineIcon
                        className="deleteicon ml-3"
                        onClick={this.actionlive}
                      />
                    </label>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Dialog
                  className=""
                  open={this.state.projectopen}
                  aria-labelledby="form-dialog-title"
                  maxWidth="md"
                  fullWidth="fullWidth"
                >
                  <DialogTitle className="">
                 Project Summary
                    <span
                      className="floatright"
                      onClick={() => {
                        this.setState({
                          projectopen: false,
                        });
                      }}
                    >
                      <i class="fa fa-times " aria-hidden="true"></i>{" "}
                    </span>
                  </DialogTitle>
                  <DialogContent>
                    <Grid>
                      <Grid item md={12}>
                      
                      <input/>
                      </Grid>
                    </Grid>
                  </DialogContent>
                  <DialogActions>
                    <div className="text-right">
                      <Button
                        onClick={() => {
                          this.setState({
                            projectopen: false,
                          });
                        }}
                        color="primary"
                      >
                        Cancel
                      </Button>
                      <Button onClick="" color="primary">
                        Save{" "}
                      </Button>

                    </div>
                  </DialogActions>
                </Dialog>
      </div>
    );
  }
}

export default HOC(Recruiter_Dashboard);
