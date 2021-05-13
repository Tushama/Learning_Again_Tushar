import React, { Fragment,Component } from 'react'
import Header from "../src/Header/Header";
import Sidebar from "./Sidebar/Sidebar"
const Update_component =(World)=>{

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
                
                <Header/>
                <Sidebar/>
                <World {...this.props}/>
            </div>
            </Fragment>
        )
    }
}
};
export default Update_component
