import React, { Component } from 'react';
import MaterialTable from "material-table";
import "./Recruitertable.css"
import axios from "axios";
import HOC from "../HOC"
class RecruiterTable extends Component {
    constructor(props){
    super(props)
    this.state = {
alldata:[],
    }
};
componentDidMount=()=>{
    let url =
    "http://seo.srcservicesltd.com:8000/projectlist/all/0" 

   
  axios.get(url).then(
    (response) => { 
        console.log("======",response.data.data)
      this.setState({
    alldata:response.data.data,
      });
    },

    (error) => {}
  );
  }

    render() {
        return (
            <div>
                <div className="fortable">
            <MaterialTable 
           
              
           
              columns={[
                { title: 'id', field: 'id' },
                { title: 'Project Name', field: 'Project_Title' },
                { title: 'Status', field: 'Project_Status'},
                { title: 'Last Modified Date', field: 'Last_modification',}
              ]}
              data={this.state.alldata}
              title="Recruiter Table"
            />
          </div>
          


         
            
 
      </div>
      
        );
    }
}

export default HOC(RecruiterTable);