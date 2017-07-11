import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Links</h1>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/registration'>Register</Link></li>
      </ul>
    </header>
  );
};

export default Header;
