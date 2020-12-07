import express from 'express';
import config from './config';
import path from 'path';
import assets from '../../public/assets.json';

const app = express();

app.use(express.static('public'));

app.set('views', path.join(__dirname, './', 'views'));

app.set('view engine', 'ejs');

// to handle aplication views form client side
app.get('/*', (req, res) => {
  res.render('index', {
    title: 'FDT Dashboard',
    assets,
  });
});

app.listen(config.port, () => {
  console.info(`Running on port ${config.port}...`);
});
