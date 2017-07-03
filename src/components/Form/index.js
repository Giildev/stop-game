import React from 'react'

import { Avatar, TextField, RaisedButton, FlatButton } from 'material-ui'
import { Grid, Row, Col } from 'react-flexbox-grid'
// import { Link } from 'react-router-dom'
import DB from "../../config";
import Firebase from "firebase";

import Login from './Login'
import SignUp from './SignUp'

import CSSModules from 'react-css-modules';
import styles from './styles.scss';

class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      form: "signup",
      label: "login"
    }
  }

  // switch ({this.state.form}) {
  //   case signup:
  //     console.log('signup');
  //     break;
  //
  //   case login:
  //     console.log('login');
  //     break;
  // }

  form = () => {
    if (this.state.form === "signup") {
      this.setState({label: "signup", form: "login"})

    } else {
      this.setState({label: "login", form: "signup"})
    }
  }

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
          <Row center="xs">
            <Col xs={12}>
              <FlatButton onClick={this.form} label={this.state.label} />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default CSSModules(Form, styles);
