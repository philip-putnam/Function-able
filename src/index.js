import React from 'react';

import { Provider } from 'react-redux';
import { render } from 'react-dom';

import Store from './store';
import TemplateContainer from './components/TemplateContainer';
require('style-loader!../public/css/styles.css');

const renderApp = (Component) => {
  render (
    <div>
      <Provider store={Store}>
        <Component />
      </Provider>
    </div>,
    document.querySelector('#react-app')
  );
};

renderApp(TemplateContainer);


// render(
//   <div>
//     <App />
//   </div>,
//   document.querySelector('#react-app')
// );
