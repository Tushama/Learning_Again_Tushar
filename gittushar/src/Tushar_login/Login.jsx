import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Swal from "sweetalert2";
import axios from "axios";
import HOC1 from "../HOC1";
import "./Login.css";
class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: "",
      Confirmpassword: "",
      checcck: "",
      check:"",

    }
  }

// create function for sending details to the backend
 sendDetailsToServer = () => {
  
  
  if (this.state.username == "") {
    Swal.fire({
      icon: 'error',
      title: '',
      text: 'Type your user Name',
      
    });
    return;
  } 
  if (this.state.password == "") {
      Swal.fire({
        icon: 'error',
        title: '',
        text: 'Type your Password',
        
      });
      return;
    } 


  axios.post("http://localhost:8000/adminute/login" ,{
    "username":this.state.username,
    "password":this.state.password
}).then((data) =>{
    console.log(data)
    if(data.status ==201){
      Swal.fire({
        icon: 'warning',
        title: 'Error',
        text: data.data.message,
        
      });
    }
    if(data.status ==200){
      this.props.history.push('/dashboard',data.data);
    }
  }).catch((error) =>{
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'please provide username and password',
      
    });
  })
  }

 


  checcck = () => {
    this.setState({
      checcck: false,
    })
  }
  // succes = () => {
  //   let regex = /[a-zA-Z]+\\.?/;

  //   if (this.state.name == "" || this.state.name == null) {
  //     Swal.fire({
  //       icon: 'error',
  //       title: '',
  //       text: 'Type your Username',
  //       // footer: '<a href>Why do I have this issue?</a>'
  //     })
  //   }
    // else if (!this.state.name.match(regex)) {
    //   Swal.fire({
    //     icon: 'error',
    //     title: '',
    //     text: 'Atleast One Lower Case',
    //     // footer: '<a href>Why do I have this issue?</a>'
    //   })

    //   return;
    // }

    // else if (this.state.password == "") {
    //   Swal.fire({
    //     icon: 'error',
    //     title: '',
    //     text: 'Type your Password',
    //     // footer: '<a href>Why do I have this issue?</a>'
    //   })
    // }
    // else if (this.state.Confirmpassword != this.state.password) {
    //   Swal.fire({
    //     icon: 'error',
    //     title: '',
    //     text: 'Your Password Did Not Match',
    //     // footer: '<a href>Why do I have this issue?</a>'
    //   })
    // }
    // else {
    //   Swal.fire(
    //     'Good job!',
    //     'Login Successfully',
    //     'success'
    //   )
    //   this.props.history.push("/dashboard", {
    //     name: this.state.name
    //   })

    // }

 // }
  checking = (e, value) => {
    this.setState({
      value: true,
    });
  };
  render() {
    return (
      <div className="fulldisplay">
        <div className="">
          <Card className="newcardsize">
            <form className=" ">
              <div className="imgcontainer ">
                {/* <span onclick="document.getElementById('id01').style.display='none'" className="close" title="Close Modal">×</span> */}
                <AccountCircleIcon
                  style={{ fontSize: "40px" }}
                  color="primary"
                />
                <h2>Login</h2>
              </div>
              <div className="container">
                <label className="lefthand"><b>Username</b></label>
                <div className="typing ">
                  <input className="typing" type="text" placeholder="Enter Username" name="uname" value={this.state.name}
                    onChange={(e) => this.setState({
                      username: e.target.value
                    })}
                  /></div>
                <label className="lefthand mt-3"><b>Password</b></label>
                <div className="typing ">
                  <input className="typing" type="password" placeholder="Enter Password" name="psw" value={this.state.password}
                    onChange={(e) => this.setState({
                      password: e.target.value
                    })} />
                    </div>             
                <div className="typing ">
                  <button type="button" className="loginbutton " onClick={this.sendDetailsToServer}>Login</button>
                </div>

              </div>
              <div className="container " style={{ backgroundColor: '#f1f1f1' }}>

              </div>
            </form>
          </Card>
        </div>

      </div>

    )
  }
}

export default (Login)