import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NameCard from './components/NameCard';
import LikesButton from './components/LikesButton';
import DigitalClock from './components/DigitalClock'
import CommentBox from './components/CommentBox'
const tags = ['空灵', '神经质']

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
     
          </a>
        </header>
        <a>dsafasd</a>
        <NameCard name="Watson" number={34567890} isHuman tags={tags} />
        <LikesButton  />
        <DigitalClock />
       <CommentBox />
      
      </div>
    );
  }
}

export default App;
