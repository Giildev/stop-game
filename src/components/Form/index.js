import React from 'react'

import {Avatar, TextField, RaisedButton} from 'material-ui'
import { Grid, Row, Col } from 'react-flexbox-grid'
import DB from "../../config";
import Firebase from "firebase";

import Login from './Login'
import SignUp from './SignUp'

import CSSModules from 'react-css-modules';
import styles from './styles.scss';

class Form extends React.Component {
  render() {
    return (
      <div>
        <Grid fluid styleName="form">
          <Row center="xs">
            <Col xs={12}>
              <Avatar
                src="https://goo.gl/n6nrq6"
                size={150}
              />
            </Col>
          </Row>
          <SignUp />
        </Grid>
      </div>
    );
  }
}

export default CSSModules(Form, styles);
