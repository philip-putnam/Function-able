import express from 'express';
import mongoose from 'mongoose';
import config from './config';

const index = require('./router/index');

mongoose.connect('mongodb://localhost:27017/functionable');
const db = mongoose.connection;
db.on('error',  x => console.error(x, 'connection error'));

const server = express();
server.set('view engine', 'ejs');

server.use('/', index);

server.use(express.static('public'));

server.listen(config.port, () => {
  console.info('Express listening on port ', config.port);
});
