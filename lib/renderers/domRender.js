/**
 * Starting point for react application
 */
import React from 'react';
import ReactDOM from 'react-dom';

import App from '../client/component/App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);