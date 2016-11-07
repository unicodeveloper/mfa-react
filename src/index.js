import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App/App';
import './app.css';

import 'bootstrap/dist/css/bootstrap.css'

import {hashHistory} from 'react-router';
import makeRoutes from './routes';

const routes = makeRoutes()

ReactDOM.render(
  <App history={hashHistory}
        routes={routes}/>,
  document.getElementById('root')
);
