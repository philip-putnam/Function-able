import React from 'react';
import { Link } from 'react-router-dom';

import Login from './Login';

const Header = () => {
  return (
    <header>
      <h1>Links</h1>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/registration'>Register</Link></li>
        <li><Link to='/events'>Events</Link></li>
      </ul>
      <Login />
    </header>
  );
};

export default Header;
