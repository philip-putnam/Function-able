import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Login from './Login';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { user: '',
      loggedIn: false };
  }

  loggedIn = (user) => {
    let tempUser = user;
    if (!tempUser) {
      this.setState({
        user: tempUser,
        loggedIn: false
      });
    } else {
      this.setState({
        user: tempUser,
        loggedIn: true
      });
    }
  }

  checkLogin = () => {
    return this.state.loggedIn;
  }

  render() {
    return (
      <header>
        <h1>Links</h1>
        <h3>Current User: {this.state.user}</h3>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/registration'>Register</Link></li>
          <li><Link to='/events'>Events</Link></li>
        </ul>
        <Login loggedIn={this.loggedIn} checkLogin={this.checkLogin}/>
      </header>
    );
  }
}
