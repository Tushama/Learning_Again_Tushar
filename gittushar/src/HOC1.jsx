import React, { Fragment,Component } from 'react'
import Recruiterheader from "../src/Recruiterheader/Recruiterheader"
const Update_component =(Recruiter)=>{

 return class extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              
         }
     }
     
    render() {
        return (
            <Fragment>
            <div>
                
                <Recruiterheader/>
                
                <Recruiter {...this.props}/>
            </div>
            </Fragment>
        )
    }
}
};
export default Update_component
