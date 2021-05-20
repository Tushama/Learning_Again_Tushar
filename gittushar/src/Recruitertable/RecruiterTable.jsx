import React, { Component } from "react";
import "./Recruitertable.css";
import axios from "axios";
import HOC from "../HOC";
import DeleteIcon from "@material-ui/icons/Delete";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import Swal from "sweetalert2";
class RecruiterTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alldata: [],
    };
  }
  componentDidMount = () => {
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
  delete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };
  render() {
    return (
      <div>
        <div className="blankspace">
          <h1>Recruiter</h1>
        </div>
        <div className="displaytable1">
          <table className="table1 table table-striped displaytable tableoutline">
            <thead>
              <tr className="colorback">
                <th scope="row">id</th>
                <th scope="col">Project Name</th>
                <th scope="col">Status</th>
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
                    <p>{item.Project_Status}</p>
                  </th>
                  <th scope="col">
                    <p>{item.Last_modification}</p>
                  </th>
                  <th scope="col">
                    <label>
                      <DeleteIcon
                        className="deleteicon"
                        onClick={this.delete}
                      />
                      <PlayCircleOutlineIcon
                        className="deleteicon ml-3"
                        onClick={this.delete}
                      />
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

export default HOC(RecruiterTable);
