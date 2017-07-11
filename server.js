const express =  require('express');
const path = require('path');
import mongoose from 'mongoose';
import config from './config';

const index = require('./router/index');

mongoose.connect('mongodb://localhost:27017/functionable');
const db = mongoose.connection;
db.on('error',  x => console.error(x, 'connection error'));

const app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/*', index);

app.listen(config.port, () => {
  console.info('Express listening on port ', config.port);
});
