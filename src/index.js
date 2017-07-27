import React from 'react';
import { render } from 'react-dom';

import App from './components/App';

render(
  <App req='hello'/>,
  document.querySelector('#react-app')
);
