import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route } from 'react-router-dom'

import styles from './styles.scss';

import Home from './containers/Home'

const router = (
  <Router>
    <div>
      <Route exact path="/" component={Home}/>
      {/* <Route path="/component" component={component}/> */}
    </div>
  </Router>
)


ReactDOM.render(router, document.getElementById('root'));
