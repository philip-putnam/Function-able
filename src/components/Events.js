import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as api from '../api';

import CreateFunction from './CreateFunction';

export default class Events extends Component {
  constructor(props) {
    super(props);
    this.state = { events: [] };
  }

  componentWillMount() {
    let tempEvents = [];
    api.fetchEvents()
      .then(res => {
        res.map(event => {
          tempEvents.push(event);
          this.setState({
            events: tempEvents
          });
        });
      });
  }

  newEvent = () => {
    let tempEvents = [];
    api.fetchEvents()
      .then(res => {
        res.map(event => {
          tempEvents.push(event);
          this.setState({
            events: tempEvents
          });
        });
      });
  }

  render() {
    return (
      <div>
        <div className='eventList'>
          <h1>Events</h1>
          <h2>Functions & Events:</h2>

          <ul>
            {this.state.events.map((event) => {
              return (
                <li key={event._id}>
                  <Link to={`/event/${event.name}`}>{event.name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <CreateFunction
          events={this.state.events}
          newEvent={this.newEvent} />
      </div>
    );
  }
}
