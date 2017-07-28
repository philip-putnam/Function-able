import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CreateFunction extends Component {

  handleSubmit = (event) => {
    let newEvent = {
      name: event.target.eventName.value,
      date: event.target.eventDate.value,
      deadline: event.target.eventDeadline.value,
      dependency: event.target.dependency.value,
      key: '3',
    };
    event.preventDefault();
    this.props.newEvent(newEvent);
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
          <label>Function Date: </label>
          <input type='date' name='eventDate' /><br/>
          <label>Funding Deadline: </label>
          <input type='date' name='eventDeadline' /><br/>
          <label>Is this function dependent on meeting budget goals? </label>
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
