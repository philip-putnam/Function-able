import React, { Component } from 'react';
// import PropTypes from 'prop-types';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '' };
  }

  onRegister = e => {
    this.setState({ name: e.target.value});
  }

  // onSubmit = e => {
  //   e.preventDefault();
  // }

  render() {
    return (
      <form
        method='POST'
        action='/api/register'
        onSubmit={this.onSubmit}>
        <input type='text' onChange={this.onRegister} />
        <input type='submit' value='Submit' />
      </form>
    );
  }
}
