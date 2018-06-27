import React, { Component } from 'react';
import { Link, Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard'

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Dashboard} />
      </Router>
        );
      }
    }
    
    export default App;
