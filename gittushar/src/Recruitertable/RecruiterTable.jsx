import React, { Component } from "react";
import "./Recruitertable.css";
import axios from "axios";
import HOC from "../HOC";
class RecruiterTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alldata: [
    
      ],
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

  render() {
    return (
        <div >
            <div className="blankspace">

            </div>
            <div className="displaytable1">
           <table className="table table-striped displaytable">
<thead>
<tr>
<th scope="row">id</th>
  <th scope="col">Project Name</th>
  <th scope="col">Status</th>
  <th scope="col">Last Modified Date</th>
  <th scope="col">Action</th>
</tr>
</thead>




<tbody>
{this.state.alldata.map((item,index)=>(
<tr>
<th>{item.id}</th>
<th scope="col"><p>{item.Project_Title}</p></th>
<th scope="col"><p>{item.Project_Status}</p></th>
<th scope="col"><p>{item.Last_modification}</p></th>
<th scope="col"><p>fgdxgdf</p></th >
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
