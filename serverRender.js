import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from './src/components/App';
import Register from './src/components/Register';

const serverRender = (url) => {
  if (url === 'register') {
    return ReactDOMServer.renderToString(
      <Register />
    );
  } else {
    return ReactDOMServer.renderToString (
      <App />
    );
  }
};

export default serverRender;
