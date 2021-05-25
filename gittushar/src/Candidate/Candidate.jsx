import React, { Component } from "react";
import HOC from "../HOC";
import "./Candidate.css";
import Swal from "sweetalert2";
import DeleteIcon from "@material-ui/icons/Delete";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import axios from "axios";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";

export class Candidate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabledata: [],
      value: "",
      candidateResume: false,
      resumeDetails: {
        Profile: {
          First_Name: "",
        },
      },
    };
  }
  componentDidMount = () => {
    let url = "http://seo.srcservicesltd.com:8000/resumelist/all/0";
    axios.get(url).then(
      (response) => {
        console.log("detariskssssssssss", response.data.data);
        this.setState({
          tabledata: response.data.data,
        });
      },

      (error) => {}
    );
  };
  resumeDelete = (data) => {
    try {
      let url = `http://seo.srcservicesltd.com:8000/resume/${data.userid}/${data.Id}`;
      axios.delete(url).then(
        (response) => {
          if (response.status == 200) {
            Swal.fire({
              icon: "success",
              title: "success",
              text: response.data.message,
            });
          }
          window.location.reload();
        },
        (error) => {
          console.log("ere", error);
        }
      );
    } catch (error) {
      console.log("ty err", error);
    }
  };
  playAction = (data) => {
    let url = `http://seo.srcservicesltd.com:8000/resumelive/${data.userid}/${data.Id}`;
    axios.get(url).then(
      (response) => {
        if (response.status == 200) {
          Swal.fire({
            icon: "success",
            title: "success",
            text: response.data.message,
          });
        }
        window.location.reload();
      },

      (error) => {}
    );
  };

  valueHandler = (all) => {
    let url = `http://seo.srcservicesltd.com:8000/resumelist/${all}/0`;
    axios.get(url).then(
      (response) => {
        this.setState({
          tabledata: response.data.data,
        });
      },

      (error) => {}
    );
  };

  render() {
    const { resumeDetails } = this.state;
    console.log(
      "details0000000000000000000000000000000000000",
      this.state.resumeDetails
    );
    return (
      <div>
        <div className="displaying">
          <table class="table displaytable tableoutline">
            <thead class="thead-dark">
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Candidate Name</th>
                <th scope="col">Resume Name</th>

                <th scope="col">Last modification</th>
                <th scope="col">
                  {" "}
                  <select
                    style={{ color: "black" }}
                    onChange={(e) => {
                      this.valueHandler(e.target.value);
                    }}
                  >
                    {" "}
                    <option value="all"> All</option>
                    <option value="Draft">Draft</option>
                    <option value="Live">Live</option>
                    <option value="Delete Requested">Deleted</option>
                  </select>
                </th>
                <th scope="col">Action</th>
              </tr>
            </thead>

            <tbody>
              {this.state.tabledata.map((item, Id, index) => (
                <tr>
                  <th>{item.Id}</th>
                  <th scope="col">
                    <p>{item.Full_Name}</p>
                  </th>
                  <th scope="col">
                    <a
                      href={
                        `resume-view/${item.userid}/${item.Id} ` +
                        "/" +
                        "heading"
                      }
                      target="_blank"
                    >
                      Resume name
                    </a>
                  </th>
                  <th scope="col">
                    {new Intl.DateTimeFormat("en-US", {
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                      hour: "2-digit",
                      minute: "2-digit",
                    }).format(item.Last_Modifyed)}
                  </th>
                  <th scope="col">
                    <p>{item.resume_status}</p>
                  </th>
                  <th scope="col">
                    <label>
                      <DeleteIcon
                        className="deletebutton"
                        onClick={() => {
                          confirmAlert({
                            title:
                              "Are you sure You won't be able to revert this! ",
                            buttons: [
                              {
                                label: "Yes",
                                onClick: () => this.resumeDelete(item),
                              },
                              {
                                label: "No",
                                onClick: () => console.log("Click No"),
                              },
                            ],
                          });
                        }}
                      />
                      <PlayCircleOutlineIcon
                        className="deletebutton"
                        onClick={() => this.playAction(item)}
                      />
                    </label>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* <Dialog
          className=""
          open={this.state.candidateResume}
          aria-labelledby="form-dialog-title"
          maxWidth="md"
          fullWidth="fullWidth"
        >
          <DialogTitle className=" d-flex justify-content-center ">
            Resume
            <span
              className="floatright"
              onClick={() => {
                this.setState({
                  candidateResume: false,
                });
              }}
            >
              <i class="fa fa-times " aria-hidden="true"></i>{" "}
            </span>
          </DialogTitle>
          <DialogContent>
            <Grid>
              <Grid item md={12}>
                <h1> Title</h1>
                <p>{resumeDetails.Profile.First_Name}</p>
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <div className="d-flex justify-content-end">
              <div>
                <Button
                  onClick={() => {
                    this.setState({
                      candidateResume: false,
                    });
                  }}
                  color="primary"
                >
                  Close
                </Button>
              </div>
              <div></div>
            </div>
          </DialogActions>
        </Dialog> */}
      </div>
    );
  }
}

export default HOC(Candidate);
