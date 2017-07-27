import React, { Component } from 'react';
import * as users from '../user.js';

export default class Login extends Component {
  handleSubmit = event => {
    event.preventDefault();
    users.loginUser(event.target.username.value, event.target.password.value);
  };

  render() {
    return (
      <div className='login'>
        <form onSubmit={this.handleSubmit}>
          <label>Username: </label>
          <input name='username'/><br/>
          <label>Password: </label>
          <input name='password'/><br/>
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}
