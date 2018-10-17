import React, { Component } from 'react';
import Auth from '../auth/Auth'
import Logout from './Logout'
// import Splash from './Splash'
import NavBar from './NavBar'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';


class Log extends Component {
  constructor() {
    super();
    this.state = {
      sessionToken: '' 
    }
  }
  
  componentWillMount() {
    const token = localStorage.getItem('token');
    if (token && !this.state.sessionToken) {
        this.setState({ sessionToken: token})
    }
} 

setSessionState = (token) => {
    localStorage.setItem('token', token);
    this.setState({ sessionToken: token});
}

logout = () => { 
  this.setState({
    sessionToken: '' 
  })
  localStorage.clear();   
}

protectedViews = () => {
  if(this.state.sessionToken === localStorage.getItem('token') && this.state.sessionToken !== 'undefined') {
  return (
      <Route path='/splash' exact>
        <div>
          <NavBar sessionToken={this.state.sessionToken} clickLogout={this.logout} />
        </div>
      </Route> 
    )
  } else {
    return (
    <Route path='/auth'> 
      <Auth setToken={this.setSessionState}/> 
    </Route>
    )
  }
} 
  render() { 
    return (
      <Router>
      <div className="App">
        {this.protectedViews()}
      </div>
      </Router>
    );
  }
} 

export default Log;