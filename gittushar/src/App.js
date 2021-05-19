import "./App.css";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Login from "../src/Tushar_login/Login";
import Dashboard from "./Dashboard/Dashboard";
import Home from "../src/Home/Home";
import Admin from "../src/Admin/Admin";
import Admin2 from "../src/Admin2/Admin2";
import Candidate from "../src/Candidate/Candidate";
import Recruiter from "../src/Recruiter/Recruiter";
import history from "../src/Historyservices";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/login" history={history} component={Login}></Route>
          <Route
            path="/dashboard"
            history={history}
            component={Dashboard}
          ></Route>
          <Route path="/home" history={history} component={Home}></Route>
          <Route path="/admin" history={history} component={Admin}></Route>
          <Route path="/admin2" history={history} component={Admin2}></Route>
          <Route
            path="/Candidate-User"
            history={history}
            component={Candidate}
          ></Route>
          <Route
            path="/Recruiter-User"
            history={history}
            component={Recruiter}
          ></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
