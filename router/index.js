import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../src/components/App';
import Home from '../src/components/Home';
import Register from '../src/components/Register';

const routes = () => (
  <Route path='/' component={App}>
    <IndexRoute component={Home} />
    <Route path='/registration' component={Register} />
  </Route>
);

// import express from 'express';
// import serverRender from '../serverRender';
// let router = express.Router();
//
// router.get('/', (req, res) => {
//   return res.render('index', {
//     content: serverRender()
//   });
// });
//
// router.get('/register', (req, res) => {
//   return res.render('index', {
//     content: serverRender('register')
//   });
// });


export default routes;
