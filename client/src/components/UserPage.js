import React, { Component } from 'react'
import 'bulma/css/bulma.css'
// eslint-disable-next-line
import axios from 'axios'
import '../css/SignupPage.css'
// eslint-disable-next-line
import { Link, Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import EditPage from './EditPage';

class UserPage extends Component {
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
    
  render() {
      console.log(this.props.match.params.id)
      const userId = this.props.match.params.id
    return (
       <div> 
           <Router>
            <Route path={`/user/${userId}/edit`} component={EditPage}/>
        </Router>
        
        <Link to={`/user/${userId}/edit`}><button className="button is-info">Edit Me</button></Link>
        </div>

    )
  }
}
export default UserPage


