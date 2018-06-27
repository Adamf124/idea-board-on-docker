import React, { Component } from 'react';
import '../css/Dashboard.css';
import drawingboard from '../StockVideos/mandrawingboard.mp4';

class Dashboard extends Component {
  render() {
    return (
      <div className="App">
    {/* // content container */}
    <div className="main-container">
      <div className="Intro-words">
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
          <div className="Description-Container"><h1>We are in the business of spreading ideas.</h1>
          </div>
    </div>    
        </div>

        );
      }
    }
    
    export default Dashboard;
