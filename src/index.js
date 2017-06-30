import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route } from 'react-router-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import styles from './styles.scss';

import Home from './containers/Home'


injectTapEventPlugin();
const router = (
  <Router>
    <MuiThemeProvider>
      <Route exact path="/" component={Home}/>
      {/* <Route path="/component" component={component}/> */}
    </MuiThemeProvider>
  </Router>
)


ReactDOM.render(router, document.getElementById('root'));
