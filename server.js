const express =  require('express');
const path = require('path');
import config from './config';
import bodyParser from 'body-parser';

const index = require('./router/index');
const api = require('./router/api/index');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', api);
app.use('/*', index);

app.listen(config.port, () => {
  console.info('Express listening on port ', config.port);
});
