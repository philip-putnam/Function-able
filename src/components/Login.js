import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as users from '../user.js';

class Login extends Component {

  handleSubmit = event => {
    event.preventDefault();
    users.loginUser(event.target.username.value, event.target.password.value)
      .then(res => {
        let user = res.username;
        this.props.loggedIn(user);
      });
    event.target.username.value = '';
    event.target.password.value = '';
  }

  logOut = event => {
    event.preventDefault();
    users.logoutUser();
    this.props.loggedIn('');
  }

  loginForm = (func) => {
    if (func) {
      return (
        <form onSubmit={this.logOut}>
          <button type='submit'>Logout</button>
        </form>
      );
    }
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Username: </label>
        <input name='username'/><br/>
        <label>Password: </label>
        <input name='password'/><br/>
        <button type='submit'>Login</button>
      </form>
    );
  }

  render() {
    return (
      <div className='login'>
        {this.loginForm(this.props.checkLogin())}
      </div>
    );
  }
}

Login.propTypes = {
  checkLogin: PropTypes.func,
  loggedIn: PropTypes.func
};

export default Login;
