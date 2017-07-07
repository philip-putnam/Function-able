import express from 'express';
import mongoose from 'mongoose';
import React from 'react';

import config from './config';
// import routes from './router/index';
import App from './src/components/App';

mongoose.connect('mongodb://localhost:27017/functionable');
const db = mongoose.connection;
db.on('error',  x => console.error(x, 'connection error'));

const server = express();
server.set('view engine', 'ejs');

server.get('/', (req, res) => {
  return res.render('index', {
    content: <App /> });
});

server.use(express.static('public'));

server.listen(config.port, () => {
  console.info('Express listening on port ', config.port);
});
