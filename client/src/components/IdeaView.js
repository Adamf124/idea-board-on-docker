import React, { Component } from 'react'
import 'bulma/css/bulma.css'
import axios from 'axios'
import { BrowserRouter as Router, Route } from 'react-router-dom'

class IdeaView extends Component {
  state = {
    user: {
      userName: 'adam'
    },
    projects: [{
      id: 1,
      title: 'hello',
      description: 'world'
    }, {
      id: 2,
      title: 'hola',
      description: 'mundo'
    }, {
      id: 3,
      title: 'goodnight',
      description: 'moon'
    }, {
      id: 4,
      title: 'greetings',
      description: 'earthlings'
    }]
  }

  render () {
    return (
      <div>
        <div>
          <h1>{this.state.user.userName}'s Idea Board</h1>
          <button className='button is-primary'>New Idea</button>
        </div>
        <div>
          {this.state.projects.map( project => {
              return (
                    <div className='column is-one-third'>
                      <div className="card">
                        <header className="card-header">
                          <p className="card-header-title">{project.title}</p>
                          <a href="#" className="card-header-icon" aria-label="more options">
                          <span className="icon"><i className="fas fa-angle-down" aria-hidden="true"></i></span>
                          </a>
                        </header>

                        <div className="card-content">
                        <div className="content">{project.description}
                            <a href="#">@bulmaio</a>. <a href="#">#css</a> <a href="#">#responsive</a>
                            <br/>
                            <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                        </div>
                        </div>
                        <footer className="card-footer">
                          <a href="#" className="card-footer-item">Save</a>
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
//       <div>
//     <input type="text" name="title"/>
//     <textarea name="description"/>
//     <button className='button is-danger'>Delete project</button>
//   </div>