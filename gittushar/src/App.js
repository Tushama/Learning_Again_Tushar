import "./App.css";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Login from "../src/Tushar_login/Login";
import Dashboard from "./Dashboard/Dashboard";
import Home from "../src/Home/Home";
import Admin from "../src/Admin/Admin";
import Admin2 from "../src/Admin2/Admin2";
import Candidate from "../src/Candidate/Candidate";
import Recruiter from "../src/Recruiter/Recruiter";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login}></Route>
          <Route path="/dashboard"  component={Dashboard}></Route>
          <Route exact path="/" component={Login}></Route>
          <Route path="/home" component={Home}></Route>
          <Route path="/admin" component={Admin}></Route>
          <Route path="/admin2" component={Admin2}></Route>
          <Route path="/Candidate-User" component={Candidate}></Route>
          <Route path="/Recruiter-User" component={Recruiter}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
