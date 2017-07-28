import React, { Component } from 'react';
import * as api from '../api';

export default class Event extends Component {
  constructor(props) {
    super(props);
    this.state = { event: [] };
  }

  componentWillMount() {
    let url = window.location.href;
    let tempEvent = [];
    url = url.replace(/http:\/\/localhost:8080\/event\//, '');
    url = url.replace(/%20/g, ' ');
    api.fetchEvent(url)
      .then(res => {
        res.map(event => {
          tempEvent.push(event);
          this.setState({
            event: tempEvent
          });
        });
      });
  }

  updateState = () => {
    let eventName = this.state.event[0].name;
    let tempEvent = [];
    api.fetchEvent(eventName)
      .then(res => {
        res.map(event => {
          tempEvent.push(event);
          this.setState({
            event: tempEvent
          });
        });
      });
  }

  contribute = (event) => {
    event.preventDefault();
    let contribAmount = event.target.contribute.value;
    let newAmount = parseInt(this.state.event[0].currentContrib) + parseInt(contribAmount);
    api.contribute(this.state.event[0].name, newAmount);
    this.updateState();
  }

  render() {
    return (
      <div>
        <h3>{this.state.event.map((event) => {
          return (
            <div key={event._id}>
              <div className='mainDescrip'>
                <h3>{event.name}</h3>
                <p>Description: {event.description}</p>
              </div>
              <div className='sidebarDescrip'>
                <p>Goal: ${event.goal}.00</p>
                <p>Current Contribution: ${event.currentContrib}</p>
                <p>Date: {event.date}</p>
                <p>Deadline: {event.deadline}</p>
                <form onSubmit={this.contribute}>
                  <label>Contribute: </label>
                  <input type='number' name='contribute'/>
                  <button type='submit'>Contribute</button>
                </form>
              </div>
            </div>
          );
        })}</h3>
        <h3></h3>
      </div>
    );
  }
}
