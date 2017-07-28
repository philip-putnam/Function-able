import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../api';

class CreateFunction extends Component {

  handleSubmit = (event) => {
    event.preventDefault();
    api.createEvent(
      event.target.eventName.value,
      event.target.eventDescription.value,
      event.target.eventGoal.value,
      event.target.eventDate.value,
      event.target.eventDeadline.value,
      event.target.dependency.value,
      event.target.privacy.value,
    );
    this.props.newEvent();
    event.target.eventName.value = '';
    event.target.eventDate.value = '';
    event.target.eventDeadline.value = '';
  };

  render() {
    return (
      <div>
        <h1>Create a new Function</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Function/Event Name: </label>
          <input type='text' name='eventName' /><br/>
          <label>Primary Monetary Goal: </label>
          <input type='number' name='eventGoal' /><br/>
          <label>Function/Event Description: </label>
          <input type='textarea' name='eventDescription' /><br/>
          <label>Function Date: </label>
          <input type='date' name='eventDate' /><br/>
          <label>Funding Deadline: </label>
          <input type='date' name='eventDeadline' /><br/>
          <label>Is this function dependent on meeting the primary monetary goal? </label>
          <select name='dependency' >
            <option value='yes'>Yes</option>
            <option value='no'>No</option>
          </select><br/>
          <select name='privacy' >
            <option value='true'>Private</option>
            <option value='false'>Public</option>
          </select><br/>
          <input type='submit' value='Submit' />
        </form>
      </div>
    );
  }
}

CreateFunction.propTypes = {
  events: PropTypes.array,
  newEvent: PropTypes.func,
};

export default CreateFunction;
