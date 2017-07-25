import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import Home from './Home';
import Register from './Register';
import Events from './Events';

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>Function-able!</h1>
        <Header />
        <Route exact path='/' component={Home} />
        <Route path='/registration' component={Register} />
        <Route path='/events' component={Events} />
      </div>
    </BrowserRouter>
  );
}
