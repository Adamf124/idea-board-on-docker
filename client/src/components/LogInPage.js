import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


class LogInPage extends Component {
    state = {
      users: []
    }
    componentDidMount (){
         axios.get('/api/users')
         .then(res => {
            console.log(res.data)
          this.setState({users: res.data.users})
        })
    }

      render () {
        return (
          <div>
            <h1>Log-In</h1>
            <h3>Please Select YOURSELF</h3>
            {this.state.users.map(user => {
              return (<Link to={`/user/${user._id}`}>{user.username}</Link>)
            })}
          </div>
        )
      }
    }
    
    export default LogInPage