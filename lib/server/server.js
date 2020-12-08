import express from 'express';
import config from './config';
import path from 'path';
import assets from '../../public/build/assets.json';

import serverRenderer from '../renderers/serverRenderer';

const app = express();

app.use(express.static('public'));

app.set('views', path.join(__dirname, './', 'views'));

app.set('view engine', 'ejs');

// to handle aplication views form client side
app.get('/*', (req, res) => {
  const context = {};

  const { initialMarkup } = serverRenderer(req, context);

  res.render('index', {
    title: 'FDT Dashboard',
    assets,
    initialMarkup,
  });
});

app.listen(config.port, () => {
  console.info(`Running on port ${config.port}...`);
});
