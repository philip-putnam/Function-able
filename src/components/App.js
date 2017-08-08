import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import Home from './HomeContainer';
import Register from './Register';
import Events from './Events';
import Event from './Event';
import Login from './Login';
import CreateFunction from './CreateFunction';

export default function App(props) {
  return (
    <BrowserRouter>
      <div className='container'>
        <Header />
        <p>{props.progress}</p>
        <Route exact path='/' component={Home} />
        <Route path='/registration' component={Register} />
        <Route path='/events' component={Events} />
        <Route path='/event/:name' component={Event} />
        <Route path='/login' component={Login} />
        <Route path='/create-a-function' component={CreateFunction} />
      </div>
    </BrowserRouter>
  );
}
