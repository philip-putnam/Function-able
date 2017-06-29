import React from 'react';
import ReactDOMServer from 'react-dom/server';
// import axios from 'axios';

import App from './src/components/App';
// import config from './config';

const serverRender = () => {
  return ReactDOMServer.renderToString(
    <App />
  );
};

export default serverRender;
