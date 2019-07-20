import React, { Component } from 'react'
import 'bulma/css/bulma.css'
import axios from 'axios'

class IdeaView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        userName: ''
      },
      projects: [{
        title: '',
        description: '',

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
      const userId  = this.props.match.params.id
    axios.post(`/api/users/${userId}`)
    .then(res => {
      console.log(res.data)
      const newProjects = [...this.state.user.projects]
      newProjects.unshift(res.data)
      this.setState({projects: newProjects})
    })
  }
  deleteProject = (project) => {
    console.log(project.target.id)
    const userId  = this.props.match.params.id
    axios.delete(`/api/users/${userId}`)
  }
  handleChange = (project, event) => {
    const newProjects = [...this.state.user.projects]
    const projects = newProjects.map((savedProject) => {
      if (savedProject._id === project._id) {
        savedProject[event.target.name] = event.target.value
      }
      return savedProject
    })
    this.setState({projects: projects})
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
                    <div key={i} className='column is-one-third' >
                      <div className="card" >
                        <header className="card-header">
                          {/* <p className="card-header-title">{project.title}</p> */}
                          <input className="input card-header-title" onChange={(event) => this.handleChange(project, event)}
                            type="text" 
                            name="title" 
                            value={project.title}
                            />
                        </header>

                        <div className="card-content">
                        <input onChange={(event) => this.handleChange(project, event)} className="is-large content input"
                        type='text' 
                        name='description'
                        value={project.description}/>
                            <br/>
                            <time dateTime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                        </div>
                        {/* eslint-disable */}
                        <footer className="card-footer">
                          <a href="#" className="card-footer-item">Edit</a>
                          <a href="#" id={project._id} className="card-footer-item" onClick={this.deleteProject}>Delete</a>
                          {/* eslint-enable */}
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
