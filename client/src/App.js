import React, { Component } from "react";
import "./App.css";
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
      <Route exact path = '/books' component = {Save}/>
      {/* <Route exact path = '/google' component = {Search}/> */}
      <Route exact path = '/books/:id' component = {Save}/>
      </Switch>
    </div>
    </Router>
    );
  }
}

export default App;
