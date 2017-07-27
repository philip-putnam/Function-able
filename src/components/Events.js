import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as api from '../api';
import axios from 'axios';

import CreateFunction from './CreateFunction';

export default class Events extends Component {
  constructor(props) {
    super(props);
    this.state = { temp: 'hullo',
      events: [{
        name: 'hi', date: '10/3/2017', deadline: '09/24/2017', dependency: 'no', key: '1' },
      {name: 'bye', date: '7/29/2017', deadline: '07/20/2017', dependency: 'yes', key: '2'}]};
  }
  
  componentWillMount() {
    api.fetchEvents()
      .then(res => {
        this.setState({
          temp: res[0].name
        });
      });
  }

  newEvent = (event) => {
    this.state.events.push(event);
    this.setState({
      events: this.state.events
    });
  }

  render() {
    return (
      <div>
        <h1>Events</h1>
        <h2>Your Functions & Events:</h2>
        <h3>{this.state.temp}</h3>
        <ul>
          {this.state.events.map((event) => {
            return (
              <li key={event.key}>{event.name} {event.date} {event.deadline} {event.dependency}</li>
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
