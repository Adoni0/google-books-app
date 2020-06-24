import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Books from './pages/Books';
import Save from './pages/Save';
import Search from './pages/Search';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
    <div>
      <Switch>
      <Route exact path = '/' component = {Search}/>
      <Route exact path = '/books' component = {Search}/>
      <Route exact path = '/books/:id' component = {Save}/>
      </Switch>
    </div>
    </Router>
    );
  }
}

export default App;
