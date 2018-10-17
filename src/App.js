import React, { Component } from 'react';
import Sidebar from './home/Sidebar'
import {
  BrowserRouter as Router
} from 'react-router-dom';


class App extends Component { 
  
  render() { 
    return (
      <div className="App">
      <Router>
      <div>
        <Sidebar /> 
      </div>
      </Router>
      </div>
    );
  }
}

export default App;  
