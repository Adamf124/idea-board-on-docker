import React, { Component } from 'react'
import 'bulma/css/bulma.css'
import axios from 'axios'

class IdeaView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        userName: 'adam'
      },
      projects: [{
        id: 1,
        title: 'hello',
        description: 'world'
      }]
    }
  }
  
  componentWillMount () {
    if (this.props.match.params) {
      const userId = this.props.match.params.id
      console.log(userId)

      axios.get(`/api/users/${userId}`)
      .then(res => {
        
        const projects = res.data.projects
        const user = {
          _id: res.data._id,
          userName: res.data.userName,
          projects: projects,
        }
        console.log(res.data.projects)
        this.setState({user, projects})
      })
    }
  }
  createProject = () => {
      console.log('something ')
      const userId  = this.props.match.params.id
    axios.post(`/api/users/${userId}`)
    .then(res => {
      console.log(this.state.user.project)
      const newProjects = this.state.user.projects
      newProjects.unshift(res.data)
      this.setState({projects: newProjects})
    })
  }

  render () {
    return (
      <div>
        <div>
          <h1>{this.state.user.userName}'s Project Board</h1>
          <button onClick={this.createProject} className='button is-primary'>New Project</button>
        </div>
        <div>
          {this.state.projects.map( (project, i) => {
              return (
                    <div className='column is-one-third' key={i}>
                      <div className="card" >
                        <header className="card-header">
                          <p className="card-header-title">{project.title}</p>
                          <a href="#" className="card-header-icon" aria-label="more options">
                          <span className="icon"><i className="fas fa-angle-down" aria-hidden="true"></i></span>
                          </a>
                        </header>

                        <div className="card-content">
                        <div className="content">{project.description}
                            <br/>
                            <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                        </div>
                        </div>
                        <footer className="card-footer">
                          <a href="#" className="card-footer-item">Edit</a>
                          <a href="#" className="card-footer-item">Delete</a>
                        </footer>
                      </div>
                    </div>
                  )
                })}
        </div>
      </div>
    )
}
}

export default IdeaView
