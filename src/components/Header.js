import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
        <Link to='/registration'>Register</Link>
      );
    }
  }

  render() {
    return (
      <header className='navbar'>
        <div className='leftNavColumn'>
          <Link to='/'>Home</Link>
        </div>
        <div className='midNavColumn'>
          <h1>Function-able!</h1>
        </div>
        <div className='navLinks'>
          {this.userNav()}
          <Link to='/events'>Events</Link>
          <Link to='/login'>Login</Link>
        </div>
      </header>
    );
  }
}
