import './App.css';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Login from "../src/Tushar_login/Login"
import Dashboard from './Dashboard/Dashboard';
function App() {
  return (
    <div className="App">
 <BrowserRouter>
 <Switch>
   <Route path="/login" component={Login}>

   </Route>
   <Route path="/dashboard" component={Dashboard}>

</Route>
  
 </Switch>
 
 
 </BrowserRouter>
    </div>
  );
}

export default App;
