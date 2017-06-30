import React from 'react'

import {Avatar, TextField, RaisedButton} from 'material-ui'
import { Grid, Row, Col } from 'react-flexbox-grid'
import DB from "../../../config";
import Firebase from "firebase";

import CSSModules from 'react-css-modules';
import styles from './styles.scss';

class Login extends React.Component {

  constructor() {
    super();
    this.state = {
      loginEmail: "",
      loginPassword: ""
    };
  }

  updateState = data => {
    this.setState(data);
  }

  login = () => {
    Firebase.auth()
      .signInWithEmailAndPassword(this.state.loginEmail, this.state.loginPassword)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error)
      })
  }

  render() {
    return (
      <div>
        <Row center="xs">
          <Col xs={12}>
            <TextField
              floatingLabelText="Email"
              onChange={e => this.updateState({ loginEmail: e.target.value })}
            />
          </Col>
        </Row>
        <Row center="xs">
          <Col xs={12}>
            <TextField
              floatingLabelText="Password"
              type="password"
              onChange={e => this.updateState({ loginPassword: e.target.value })}
            />
          </Col>
        </Row>
        <Row center="xs">
          <Col xs={12}>
            <RaisedButton
              label="GO"
              styleName="loginForm__button"
              primary={true}
              onClick={this.login}
            />
          </Col>
        </Row>
      </div>
    );
  }
}

export default CSSModules(Login, styles);
