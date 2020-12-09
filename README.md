# FDT Dashboard

FDT Dashboard, its a responsive web app to display dashboards

![GIF](/FDTDashboard.gif)

## Features

- Node server side rendering React with React router application, view engine ejs
- Custom page design (no css frameworks)
- Client side pagination
- Reusable styled components design
- Node with ES6 features (uses import statements)
- Separeted config for build react and node with babel
- Webpack builds vendor an main css and js hashed files to prevent browser future updates chaching
- Client side with React, components with prop-types
- eslint custom config
- Uses pm2 for production start, forks one app instance for each core avaiable in deployment server
- Builds webpack and build version directly on deployment server
- Documented following JSdoc standard

## Getting Started

### Installing

To download the project use git clone

```
Git clone https://github.com/carloscorti/FDT-dashboard.git
```

On projects root folder, install dependencies

```
npm i
```

### Development

First

```
npm run webpack
```

Starts webpack assets bundler watching files for development

Then

```
npm run webpack-ssr
```

Starts webpack server side rendering bundler watching files for development

Finally

```
npm run dev
```

Runs the app in development mode. Open http://localhost:5000 to view it in the browser. The page will reload if you make edits.

### Production (follow the order below)

First

```
npm run build-webpack
```

Builds the app for production in ./public folder. Build is minified and filenames include hashes to prevent bowser cache in future updates.

Then

```
npm run build-node
```

Builds node server with ES6 features. It builds server aplication on ./dist

Finally

```
npm start
```

Starts app for production (uses pm2 for core load optimization)

## Deployment

Production version deployed at https://fdtdashboard.herokuapp.com

## Built With

- Dependency Manager: npm
- Server side: Node + Express
- Bundler: webpack + babel
- Client side: React

## Author

- **Carlos Corti**
