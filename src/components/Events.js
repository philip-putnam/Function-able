import React from 'react';
import { Link } from 'react-router-dom';

const Events = () => {
  return (
    <div>
      <h1>Events</h1>
      <Link to='/create-a-function'>Create New Function</Link>
    </div>
  );
};

export default Events;
