import React, { Component } from "react";
import HOC from "../HOC";
export class Candidate extends Component {
  render() {
    return (
      <div>
        <table class="table fortable">
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
            <tr>
              <th scope="row">1</th>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default HOC(Candidate);
