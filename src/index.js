import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './containers/Home'

const router = (
  <Router>
    <div>
      <Route exact path="/" component={Home}/>
    </div>
  </Router>
)


ReactDOM.render(router, document.getElementById('root'));
