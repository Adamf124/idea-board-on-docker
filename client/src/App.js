import React, { Component } from 'react';
// eslint-disable-next-line
import { Link, Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import LogInPage from './components/LogInPage'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/login" component={LogInPage}/>
        </Switch>
      </Router>
        );
      }
    }
    
    export default App;
