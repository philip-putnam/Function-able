import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Events extends Component {
  render() {
    return (
      <div>
        <h1>Events</h1>
        <Link to='/create-a-function'>Create New Function</Link>
      </div>
    );
  }
}
