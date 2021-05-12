import logo from './logo.svg';
import './App.css';
import HOC from "../src/HOC"
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Login from "../src/Tushar_login/Login"
function App() {
  return (
    <div className="App">
 <BrowserRouter>
 <Switch>
   <Route path="/" component={Login}>

   </Route>
   <Route path="/try" component={HOC}>

</Route>
 </Switch>
 
 
 </BrowserRouter>
    </div>
  );
}

export default App;
