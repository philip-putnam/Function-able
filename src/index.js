import React from 'react';
import { render } from 'react-dom';

import App from './components/App';
require('style-loader!../public/css/styles.css');

render(
  <div>
    <App />
  </div>,
  document.querySelector('#react-app')
);
