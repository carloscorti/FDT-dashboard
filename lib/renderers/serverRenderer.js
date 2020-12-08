import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

import App from '../../public/ssr/App';

/**
 * Function serverRender: sets initial markup for server side rendering
 *
 * @return {Object}
 * -initialMarkup: App wrapped with StaticRouter as string to server render with routing
 */
const serverRender = (req, context) => {
  // Send the rendered page with preloaded state

  const initialMarkup = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  );

  return {
    initialMarkup,
  };
};

export default serverRender;
