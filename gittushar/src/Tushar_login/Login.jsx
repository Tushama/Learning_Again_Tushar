import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Swal from 'sweetalert2';
import Checkbox from '@material-ui/core/Checkbox';


import "./Login.css"
 class Login extends Component {
constructor(props) {
  super(props)
  this.state = {
     name:"",
     password:"",
     Confirmpassword:"",
     checcck:"",
  
  }
}
checcck=()=>{
  this.setState({
    checcck:false,
  })
}
succes=()=>{
 let regex = /[a-zA-Z]+\\.?/;

  if(this.state.name=="" || this.state.name==null)
  {
    Swal.fire({
      icon: 'error',
      title: '',
      text: 'Type your Username',
      // footer: '<a href>Why do I have this issue?</a>'
    })
  }
  // else if (!this.state.name.match(regex)) {
  //   Swal.fire({
  //     icon: 'error',
  //     title: '',
  //     text: 'Atleast One Lower Case',
  //     // footer: '<a href>Why do I have this issue?</a>'
  //   })

  //   return;
  // }

  else if(this.state.password=="")
  {
    Swal.fire({
      icon: 'error',
      title: '',
      text: 'Type your Password',
      // footer: '<a href>Why do I have this issue?</a>'
    })
  }
  else if (this.state.Confirmpassword!=this.state.password)
  {
    Swal.fire({
      icon: 'error',
      title: '',
      text: 'Your Password Did Not Match',
      // footer: '<a href>Why do I have this issue?</a>'
    })
  }
  else{
    Swal.fire(
      'Good job!',
      'Login Successfully',
      'success'
    )
    this.props.history.push("/dashboard",{
      name:this.state.name
    })
  
  }

}
    render() {
        return (
          <div className="fulldisplay">
               
                 
                     <div className="">
                       <Card className="newcardsize">
                   <form className=" ">
        <div className="imgcontainer ">
          {/* <span onclick="document.getElementById('id01').style.display='none'" className="close" title="Close Modal">×</span> */}
          <AccountCircleIcon 
          style={{fontSize:"40px"}}
          color="primary"
          />
          <h2>Login</h2>
        </div>
        <div className="container">
          <label className="lefthand"><b>Username</b></label>
          <div  className="typing ">
          <input className="typing" type="text" placeholder="Enter Username" name="uname"  value={this.state.name} 
          onChange ={(e )=>this.setState({
            name:e.target.value
          })}
          /></div>
          <label className="lefthand mt-3"><b>Password</b></label>
          <div className="typing ">
          <input className="typing" type="password" placeholder="Enter Password" name="psw" value={this.state.password}
           onChange ={(e)=>this.setState({
            password:e.target.value
          })}
          /></div>
            <label className="lefthand mt-3"><b>Confirm Password</b></label>
            <div className="typing ">
          <input className="typing" type="password" placeholder="Enter Password" name="psw" value={this.state.Confirmpassword}
           onChange ={(e)=>this.setState({
            Confirmpassword:e.target.value
          })}
          /></div>
          <label className="lefthand">
          <Checkbox color="primary"
          value={this.state.checked}
          onChange={this.checcck}
          // onChange ={(e)=>this.setState({
          //   check:e.target.check
           
          // })}
          
          /> Remember me
          </label>
          <div className="typing ">
          <button type="button" className="loginbutton " onClick={this.succes}>Login</button>
         </div>
          
        </div>
        <div className="container " style={{backgroundColor: '#f1f1f1'}}>
          
        </div>
      </form>
      </Card>
      </div>
    
    </div>
   
        )
    }
}

export default Login
