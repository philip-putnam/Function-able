import config from './config';
import express from 'express';

const server = express();

server.get('/', (req, res) => {
  res.send('hello world!');
});

server.listen(config.port, () => {
  console.info('Express listening on port ', config.port);
});
