import React, { Component } from 'react';
import 'bulma/css/bulma.css'
// eslint-disable-next-line
import { Link, Switch, BrowserRouter as Router, Route } from 'react-router-dom'

class SignupPage extends Component {


  
  render() {
    return (

<div>
  <h3>Create a User</h3>
  <form onSubmit={this.handleSubmit}>
    <input
      placeholder="User Name"
      type="text"
      name="userName"
      value={this.state.userName}
      onChange={this.handleChange}
    />
    <input
      placeholder="Password"
      type="password"
      name="password"
      value={this.state.password}
      onChange={this.handleChange}
    />

    <button type="submit">Submit</button>
  </form>
      </div>
    )
  }
}

export default SignupPage 