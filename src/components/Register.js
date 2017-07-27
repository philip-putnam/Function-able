import React, { Component } from 'react';
import * as users from '../user.js';
// import PropTypes from 'prop-types';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '' };
  }

  handleSubmit = event => {
    event.preventDefault();
    users.registerUser(
      event.target.username.value,
      event.target.firstName.value,
      event.target.lastName.value,
      event.target.email.value,
      event.target.password.value,
      event.target.confirmPassword.value
    );

  };

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}>
        <label>Username: </label>
        <input type='text' name='username' /><br/>
        <label>First Name: </label>
        <input type='text' name='firstName' /><br/>
        <label>Last Name: </label>
        <input type='text' name='lastName' /><br/>
        <label>Email: </label>
        <input type='text' name='email' /><br/>
        <label>Password: </label>
        <input type='text' name='password' /><br/>
        <label>Confirm Password: </label>
        <input type='text' name='confirmPassword' /><br/>
        <input type='submit' value='Submit' /><br/>
      </form>
    );
  }
}
