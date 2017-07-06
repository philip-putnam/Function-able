import React from 'react';
import express from 'express';
import serverRender from '../serverRender';
import Register from '../src/components/Register';
let router = express.Router();

router.get('/', (req, res) => {
  return res.render('index', {
    content: serverRender()
  });
});

// router.get('/register', (req, res) => {
//   return <Register />;
// });

export default router;
