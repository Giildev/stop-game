import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from "react-router";
import App from './App.js';
import AuthTest from './containers/AuthTest'

const router = (
  <Router history={hashHistory}>
    <Route path="/" component={AuthTest}>
      <IndexRoute component={App} />
      <Route path="/authtest" component={AuthTest} />
    </Route>
  </Router>
)


ReactDOM.render(router, document.getElementById('root'));
