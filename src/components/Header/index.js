import React from 'react'

import Avatar from 'material-ui/Avatar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import { Grid, Row, Col } from 'react-flexbox-grid'

import CSSModules from 'react-css-modules';
import styles from './styles.scss';

class Header extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {

    return (
      <MuiThemeProvider>
        <Grid fluid styleName="header">
          <Row>
            <Col xs={6}>
              <Avatar
                src="https://goo.gl/tUwC9L"
                size={50}
                styleName="header__logo"
              />
            </Col>
            <Col xs={6}>
              <Avatar
                src="https://goo.gl/n6nrq6"
                size={50}
                styleName="header__avatar"
              />
            </Col>
          </Row>
        </Grid>
      </MuiThemeProvider>
    );
  }
}

export default CSSModules(Header, styles);
