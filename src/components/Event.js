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
    url = url.replace(/%20/, ' ');
    api.fetchEvent(url)
      .then(res => {
        res.map(event => {
          console.log(event);
          tempEvent.push(event);
          this.setState({
            event: tempEvent
          });
        });
        console.log(this.state.event);
      });
  }

  render() {
    return (
      <div>
        <h1>hello</h1>
        <h3>{this.state.event.map((event) => {
          return (
            <div key={event._id}>
              <h3>{event.name}</h3>
            </div>
          );
        })}</h3>
        <h3></h3>
      </div>
    );
  }
}
