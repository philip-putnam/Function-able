import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Login from './Login';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { user: '',
      userId: '',
      loggedIn: false };
  }

  loggedIn = (user, id) => {
    let tempUser = user;
    if (!tempUser) {
      this.setState({
        user: tempUser,
        id: id,
        loggedIn: false
      });
    } else {
      this.setState({
        user: tempUser,
        id: id,
        loggedIn: true
      });
    }
  }

  checkLogin = () => {
    return this.state.loggedIn;
  }

  userNav = () => {
    if (!this.checkLogin()) {
      return (
        <li><Link to='/registration'>Register</Link></li>
      );
    }
  }

  render() {
    return (
      <header>
        <h1>Links</h1>
        <h3>Current User: {this.state.user}</h3>
        <ul>
          <li><Link to='/'>Home</Link></li>
          {this.userNav()}
          <li><Link to='/events'>Events</Link></li>
        </ul>
        <Login loggedIn={this.loggedIn} checkLogin={this.checkLogin}/>
      </header>
    );
  }
}
