import React, { Component } from 'react';
import HeaderComponent from './components/HeaderComponent';
import WeekComponent from './components/WeekComponent';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderComponent />
        <WeekComponent />
      </div>
    );
  }
}

export default App;
