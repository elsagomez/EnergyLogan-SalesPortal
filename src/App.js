import React, { Component } from 'react';
import logo from './logo.svg';

import TopNav from './components/TopNav';
import Project from './components/Project';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      	<TopNav />
        <Project />
      </div>
    );
  }
}

export default App;
