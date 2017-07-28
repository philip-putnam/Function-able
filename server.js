const express =  require('express');
const path = require('path');
import config from './config';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
import sassMiddleware from 'node-sass-middleware';

const index = require('./router/index');
const api = require('./router/api/index');
const user = require('./router/api/user');

const app = express();

app.use(sassMiddleware({
  src: path.join(__dirname, 'sass'),
  dest: path.join(__dirname, '/public/css')
}));

mongoose.connect(config.mongodbUri);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('express-session')({
  secret: 'events and functions whoa!',
  resave: false,
  saveUninitialised: false
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/user', user);
app.use('/api', api);
app.use('/*', index);

const User = require('./models/user');
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.listen(config.port, () => {
  console.info('Express listening on port ', config.port);
});
