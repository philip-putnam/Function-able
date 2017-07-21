import React, { Component } from 'react';
// import PropTypes from 'prop-types';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '' };
  }

  onRegister = e => {
    console.log('onRegister', e.target.value);
    this.setState({ name: e.target.value}); 
  }

  onSubmit = e => {
    e.preventDefault();
  }

  render() {
    console.log(this.state.name);
    return (
      <form onSubmit={this.onSubmit}>
        <input type='text' onChange={this.onRegister} />
        <input type='submit' value='Submit' />
      </form>
    );
  }
}
