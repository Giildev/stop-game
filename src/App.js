import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Home from './containers/Home.js'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <Home />
        </MuiThemeProvider>
      </div>
    );
  }
}
