import React from 'react'

import { Avatar, FlatButton, RaisedButton, Dialog} from 'material-ui'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Grid, Row, Col } from 'react-flexbox-grid'

import SignUp from '../Form/SignUp'

import CSSModules from 'react-css-modules';
import styles from './styles.scss';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      loginModalOpen: false,
      SignUpModalOpen: false
    };
  }

  openLogin = () => {
    this.setState({loginModalOpen: true});
  };

  openSignup = () => {
    this.setState({SignUpModalOpen: true});
  };

  handleClose = () => {
    this.setState({loginModalOpen: false, SignUpModalOpen: false});
  };

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        key="1"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        key="2"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleClose}
      />,
    ];

    return (
      <div>
        <Grid fluid styleName="header">
          <Row styleName="header" middle="xs">
            <Col xs={6}>
              <Avatar
                src="https://goo.gl/tUwC9L"
                size={50}
              />
            </Col>
            <Col xs={6}>
              <Row styleName="header" end="xs" middle="xs">
                <Col xs={6}>
                  <FlatButton label="Login" onTouchTap={this.openLogin} />
                </Col>
                <Col xs={6}>
                  <FlatButton label="Sign Up" onTouchTap={this.openSignup} />
                </Col>
              </Row>
            </Col>
          </Row>
        </Grid>

        <Dialog
          title="Login"
          actions={actions}
          modal={false}
          open={this.state.loginModalOpen}
          onRequestClose={this.handleClose}
        >
          Login
        </Dialog>
        <Dialog
          title="Signup"
          actions={actions}
          modal={false}
          open={this.state.SignUpModalOpen}
          onRequestClose={this.handleClose}
          autoScrollBodyContent={true}
        >
          <SignUp />
        </Dialog>
      </div>
    );
  }
}

export default CSSModules(Header, styles);
