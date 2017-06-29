import express from 'express';

import config from './config';
import serverRender from './serverRender';

const server = express();
server.set('view engine', 'ejs');

server.get('/', (req, res) => {
  res.render('index', {
    content: serverRender()
  });
});


server.use(express.static('public'));

server.listen(config.port, () => {
  console.info('Express listening on port ', config.port);
});
