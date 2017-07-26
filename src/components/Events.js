import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import CreateFunction from './CreateFunction';

export default class Events extends Component {
  constructor(props) {
    super(props);
    this.state = { events: [{
      name: 'hi', key: '1' },
    {name: 'bye', key: '2'}] };
  }

  newEvent = (name, key) => {
    this.state.events.push({name, key});
    this.setState({
      events: this.state.events
    });
  }

  render() {
    return (
      <div>
        <h1>Events</h1>
        <h2>Your Functions & Events:</h2>
        <ul>
          {this.state.events.map((event) => {
            return (
              <li key={event.key}>{event.name}</li>
            );
          })}
        </ul>
        <Link to='/create-a-function'>Create New Function</Link>
        <CreateFunction
          events={this.state.events}
          newEvent={this.newEvent} />
      </div>
    );
  }
}
