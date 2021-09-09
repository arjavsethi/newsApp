
import './App.css';

import React, { Component } from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
export default class App extends Component {
  render() {
    return (
     <Router>
        <div>
        <NavBar/>  
        <Switch>
    
          <Route exact  path="/business"> <News pageSize={18} country="in" category="business" key="business"/> </Route>
          <Route exact path="/entertainment"> <News pageSize={18} country="in" category="entertainment" key="entertainment"/> </Route>
          <Route exact path="/"> <News pageSize={18} country="in" category="general" key="general"/> </Route>
          <Route exact path="/health"> <News pageSize={18} country="in" category="health" key="health"/> </Route>
          <Route exact path="/science"> <News pageSize={18} country="in" category="science" key="science"/> </Route>
          <Route exact path="/sports"> <News pageSize={18} country="in" category="sports" key="sports"/> </Route>
          <Route exact path="/technology"> <News pageSize={18} country="in" category="technology" key="technology"/> </Route>
        </Switch>
        </div>
      </Router>
     
    )
  }
}

