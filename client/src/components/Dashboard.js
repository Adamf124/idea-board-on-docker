import React, { Component } from 'react';
import '../css/Dashboard.css';
import drawingboard from '../StockVideos/mandrawingboard.mp4';
import 'bulma/css/bulma.css'
// eslint-disable-next-line
import { Link, Switch, BrowserRouter as Router, Route } from 'react-router-dom'

class Dashboard extends Component {
  render() {
    return (

      <div className="App">
      {/* // content container */}
        <div className="main-container">
          <div className="Intro-words">
            <div className="Main-title">Reachspace: An Idea Launchpad</div>
            <h1>
              <div>Where</div> <div>ideas</div> <div>come</div> <div>to</div> <div>reach</div> <div>their</div> <div>platform.</div>
            </h1>
          </div>
          {/* parallax video */}
        <div className="parallax-container">
          <video id="background-video" loop autoPlay>
            <source src={drawingboard} type="video/mp4" />
          </video>
        </div>
        
        <div className="Description-Container">
          <div className="Description">
              <h1>We are in the business of spreading ideas.</h1>
              <p> Catering to the creative community and enhancing your ability to distribute your ideas and proposals, Reachspace will offer a quick way to create and distribute your brilliance. </p>

            <div className='button-container'>
                <div className='signup-button'>
                  <button class="button is-link is-inverted">Sign Up</button>
                </div>
                <div className='login-button'>
                  <Link to='/login'><button class="button is-link is-inverted">Log-in</button></Link>
                </div>
            </div >
          </div>
        <div className="Description-picture"></div>  
        </div>
      </div>
      </div>
        );
      }
    }
    
    export default Dashboard;
