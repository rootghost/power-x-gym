import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Fileupload from './Components/Shared/Fileupload/Fileupload';
import SharedHeader from './Components/Shared/Header/SharedHeader';
import Classes from './Components/Classes/Classes';
import Services from './Components/Services/Services';
import Pricing from './Components/Pricing/Pricing';
import Membership from './Components/Membership/Membership';

function App() {
  return (
    <Router>
        <Switch>
            <Route path="/home">
                <Home></Home>
            </Route>
            <Route exact path="/">
                <Home></Home>
            </Route>
            <Route path="/add">
                <Fileupload></Fileupload>
            </Route>
            <Route path="/classes">
               <Classes></Classes>
            </Route>
            <Route path="/service/:title">
                <Services></Services>
            </Route>
            <Route path="/pricing">
                <Pricing></Pricing>
            </Route>
            <Route path="/membership">
                <Membership></Membership>
            </Route>
        </Switch>
    </Router>
  );
}

export default App;
