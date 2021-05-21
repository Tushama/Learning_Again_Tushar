import "./App.css";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Login from "../src/Tushar_login/Login";



import Dashboard from "../src/Dashboard/Dashboard";
import Candidate from "../src/Candidate/Candidate";

import Recruiter_Dashboard from "./Recruiter_Dashboard/Recruiter_Dashboard";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login}></Route>
          
          <Route exact path="/" component={Login}></Route>
         
          
          <Route path="/dashboard" component={Dashboard}></Route>
          <Route path="/Candidate-User" component={Candidate}></Route>
         
          <Route path="/recruiter-dashboard" component={Recruiter_Dashboard}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
