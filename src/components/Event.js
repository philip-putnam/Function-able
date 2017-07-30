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
    event.target.contribute.value = '';
  }

  contributeStretchGoal = (event) => {
    event.preventDefault();
    let contribAmount = event.target.contribute.value;
    let newAmount = parseInt(this.state.event[0].stretchGoals[event.target.stretchGoalId.value].currentContrib) + parseInt(contribAmount);
    let tempStretchGoals = this.state.event[0].stretchGoals;
    tempStretchGoals[event.target.stretchGoalId.value].currentContrib = newAmount;
    api.updateStretchGoals(this.state.event[0]._id, tempStretchGoals);
    event.target.contribute.value = '';
    this.updateState();
  }

  newStretchGoal = (event) => {
    event.preventDefault();
    let newStretchGoal = {
      name: event.target.newStretchName.value,
      goal: event.target.newStretchGoal.value,
      currentContrib: '0'
    };
    let tempStretchGoals = this.state.event[0].stretchGoals;
    tempStretchGoals.push(newStretchGoal);
    api.updateStretchGoals(this.state.event[0]._id, tempStretchGoals);
    this.updateState();
    event.target.newStretchName.value = '';
    event.target.newStretchGoal.value = '';
  }

  render() {
    return (
      <div className='eventBody'>
        {this.state.event.map((event) => {
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
              <div>
                <h3>Create a new stretch goal!</h3>
                <form onSubmit={this.newStretchGoal}>
                  <label>New Stretch Goal Name: </label>
                  <input type='text' name='newStretchName'/>
                  <label>Monetary Goal: </label>
                  <input type='number' name='newStretchGoal'/>
                  <button type='submit'>Create</button>
                </form>
              </div>
              <div className='stretchGoals'>
                {event.stretchGoals.map((goal, key) => {
                  return (
                    <div key={key}>
                      <p>Goal Name: {goal.name}</p>
                      <p>Goal ${goal.goal}</p>
                      <p>Current Contribution: ${goal.currentContrib}</p>
                      <form onSubmit={this.contributeStretchGoal}>
                        <label>Contribute: </label>
                        <input type='number' name='contribute'/>
                        <input type='hidden' name='stretchGoalId' value={key} />
                        <button type='submit'>Contribute</button>
                      </form>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
