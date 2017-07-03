import React from 'react'


import {Avatar, TextField, RaisedButton} from 'material-ui'
import { Grid, Row, Col } from 'react-flexbox-grid'
import DB from "../../../config";
import Firebase from "firebase";

import CSSModules from 'react-css-modules';
import styles from './styles.scss';

class SignUp extends React.Component {

  constructor() {
    super();
    this.state = {
      username: "",
      email: "",
      password: ""
    };
  }

  updateState = data => {
    this.setState(data);
  }

  signup = () => {
    Firebase.auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(response => {
        DB.on('user', snap => {
          console.log(snap);
        })
        DB.child('user').push({
          username: this.state.username
        })
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
              floatingLabelText="User Name"
              onChange={e => this.updateState({ username: e.target.value })}
            />
          </Col>
        </Row>
        <Row center="xs">
          <Col xs={12}>
            <TextField
              floatingLabelText="Email"
              onChange={e => this.updateState({ email: e.target.value })}
            />
          </Col>
        </Row>
        <Row center="xs">
          <Col xs={12}>
            <TextField
              floatingLabelText="Password"
              type="password"
              onChange={e => this.updateState({ password: e.target.value })}
            />
          </Col>
        </Row>
      </div>
    );
  }
}

export default CSSModules(SignUp, styles);
