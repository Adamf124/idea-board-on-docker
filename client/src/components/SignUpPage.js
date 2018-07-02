import React, { Component } from 'react';
import 'bulma/css/bulma.css'
import axios from 'axios'
// eslint-disable-next-line
import { Link, Switch, BrowserRouter as Router, Route } from 'react-router-dom'

class SignupPage extends Component {
  state = {
    name: '',
    userName: '',
    password: '',
    email_address: ''

  }

  handleChange = (event) => {
    const inputName = event.target.name
    const userInput = event.target.value

    this.setState({
      [ inputName ]: userInput
    })
  }
  handleSubmit = (event) => {
    event.preventDefault()
    axios.post('/api/users', this.state).then((res) => {
      console.log(res.data)
      this.props.history.push(`/users/${res.data._id}`)
    })
}

  render() {
    return (

<div>
  <h3>Create a User</h3>
  <form onSubmit={this.handleSubmit}>
    <input
    placeholder="Full Name"
    name="name"
    type="text"
    value={this.state.name}
    onChange={this.handleChange}
    />

    <input
      placeholder="User Name"
      type="text"
      name="username"
      value={this.state.username}
      onChange={this.handleChange}
    />

    <input
      placeholder="Password"
      type="password"
      name="password"
      value={this.state.password}
      onChange={this.handleChange}
    />
    <input
      placeholder="Email Address"
      type="email"
      name="email_address"
      value={this.state.email_address}
      onChange={this.handleChange}
    />

    <button type="submit">Submit</button>
  </form>
      </div>
    )
  }
}

export default SignupPage 