import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import Home from './Home';
import Register from './Register';
import Events from './Events';
import Event from './Event';
import Login from './Login';
import CreateFunction from './CreateFunction';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <div>
            <div className='container'>
              <Route exact path='/' component={Home} />
              <Route path='/registration' component={Register} />
              <Route path='/events' component={Events} />
              <Route path='/event/:name' component={Event} />
              <Route path='/login' component={Login} />
              <Route path='/create-a-function' component={CreateFunction} />
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
