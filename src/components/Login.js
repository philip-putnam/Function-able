import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as users from '../user.js';

class Login extends Component {

  handleSubmit = event => {
    event.preventDefault();
    users.loginUser(event.target.username.value, event.target.password.value)
      .then(res => {
        let user = res.username;
        let id = res._id;
        this.props.loggedIn(user, id);
      });
    event.target.username.value = '';
    event.target.password.value = '';
  }

  logOut = event => {
    event.preventDefault();
    users.logoutUser();
    this.props.loggedIn('');
  }

  render() {
    return (
      <div className='login'>
        <form onSubmit={this.handleSubmit}>
          <input name='username' placeholder='Username'/><br/>
          <input name='password' placeholder='Password'/><br/>
          <button type='submit'>Login</button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  checkLogin: PropTypes.func,
  loggedIn: PropTypes.func
};

export default Login;
