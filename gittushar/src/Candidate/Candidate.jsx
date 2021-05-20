import React, { Component } from "react";
import HOC from "../HOC";
import "./Candidate.css";
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
    };
  }
  componentDidMount = () => {
    let url = "http://seo.srcservicesltd.com:8000/resumelist/draft/0";

    axios.get(url).then(
      (response) => {
        console.log("thedata", response);
        this.setState({
          tabledata: response.data.data,
        });
      },

      (error) => {}
    );
  };
  render() {
    return (
      <div>
        <div className="space">
          <h1> Candidate</h1>
        </div>
        <div className="displaying">
          <table class="table displaytable tableoutline">
            <thead class="thead-dark">
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Candidate Name</th>
                <th scope="col">Last modification</th>
                <th scope="col">Status</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.tabledata.map((item, index) => (
                <tr>
                  <th>{item.Id}</th>
                  <th scope="col">
                    <p>{item.Full_Name}</p>
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

                                onClick: () => alert("Click Yes"),
                              },
                              {
                                label: "No",
                                onClick: () => alert("Click No"),
                              },
                            ],
                          });
                        }}
                      />
                      <PlayCircleOutlineIcon className="deletebutton" />
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

export default HOC(Candidate);
