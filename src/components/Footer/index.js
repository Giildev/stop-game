import React from 'react'

import { Grid, Row, Col } from 'react-flexbox-grid'

import CSSModules from 'react-css-modules';
import styles from './styles.scss';

class Footer extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <Grid fluid styleName="footer">
        <Row>
          <Col xs={3} md={3}>
            Logo
          </Col>
          <Col xs={6} md={6}>
            Content
          </Col>
          <Col xs={3} md={3}>
            More Content
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default CSSModules(Footer, styles);
