import React, { Component } from 'react'
import 'bulma/css/bulma.css'
import axios from 'axios'
import '../css/SignupPage.css'
// eslint-disable-next-line
import { Link, Switch, BrowserRouter as Router, Route } from 'react-router-dom'

 class EditPage extends Component {
    state = {
        name: '',
        userName: '',
        password: '',
        email_address: ''
    
      }
      componentDidMount (){
        axios.get('/api/users')
        .then(res => {
           console.log(res.data)
         this.setState({users: res.data.users})
       })
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
        axios.post(`/api/user/${this.props.match.params.id}`, this.state).then((res) => {
            console.log(res.data)
            this.props.history.push(`/users/${res.data._id}`)
        })
    }
    render() {
    return (
      <div>
          <div class="page-container">
            <div className="form-container">
              <h1>Edit a User</h1>
              <form onSubmit={this.handleSubmit}>
                
                <div className="field">
                  <h3 class="label">Name</h3>
                  <input 
                    class="input"
                    placeholder="Full Name"
                    name="name"
                    type="text"
                    value={this.state.name}
                    onChange={this.handleChange}/>
                </div>

                <div className="field">
                  <h3 class="label">Username</h3>
                  <input 
                    class="input"
                    placeholder="Enter Username"
                    type="text"
                    name="username"
                    value={this.state.username}
                    onChange={this.handleChange}/>
                </div>

                <div className="field">
                  <h3 class="label">Password</h3>
                  <input 
                    class="input"
                    placeholder="Enter Password"
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}/>
                </div>

                <div className="field">
                  <h3 class="label">Email Address</h3>
                  <input 
                    class="input" 
                    placeholder="Enter Valid Email Address"
                    type="email"
                    name="email_address"
                    value={this.state.email_address}
                    onChange={this.handleChange}/>
                </div>

                <div class="field is-grouped">
                    <p class="control">
                    <button type='submit' class="button is-primary">Submit</button>
                    </p>
                    <p class="control">
                    <Link to="/user/:id">
                {/* eslint-disable */}
                    <a class="button is-light">Cancel</a>
                {/* eslint-enable */}
                    </Link>
                    </p>
                </div>
              </form>
            </div>
          </div>
        </div>
    )
  }
}
export default EditPage