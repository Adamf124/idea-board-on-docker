import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import '../css/LogInPage.css'

class LogInPage extends Component {
    state = {
      users: []
    }
    componentDidMount (){
         axios.get('/api/users')
         .then(res => {
            console.log(res.data)
          this.setState({users: res.data})
        })
    }

      render () {
        return (
          <div>
            <div className="login-container card">
            <h1>Log-In</h1>
            <h3>Please Select YOURSELF</h3>
            {this.state.users.map(user => {
              return (
              <div>
                <Link to={`/user/${user._id}`}>{user.name + ' - ' + user.username}</Link>
                </div>)
            })}
            </div>
          </div>
        ) 
      }
    }
    
    export default LogInPage