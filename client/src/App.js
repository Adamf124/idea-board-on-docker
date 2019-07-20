import React, { Component } from 'react';
// eslint-disable-next-line
import { Link, Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import LogInPage from './components/LogInPage'
import SignUpPage from './components/SignUpPage'
import IdeaView from './components/IdeaView';



class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/login" component={LogInPage}/>
        <Route path="/signup" component={SignUpPage}/>
        <Route path='/user/:id' component={IdeaView}/>
        </Switch>
      </Router>
        );
      }
    }
    
    export default App;
