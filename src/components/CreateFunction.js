import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CreateFunction extends Component {

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.newEvent(this.refs.eventName.value, 3);
  };

  render() {
    return (
      <div>
        <h1>Create a new Function</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Function/Event Name: </label>
          <input type='text' ref='eventName' /><br/>
          <label>Function Date: </label>
          <input type='text' /><br/>
          <label>Funding Deadline: </label>
          <input type='text' /><br/>
          <label>Is this function dependent on meeting budget goals? </label>
          <input type='text' /><br/>
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
