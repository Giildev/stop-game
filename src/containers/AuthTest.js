import React from "react";
import CSSModules from "react-css-modules";
import styles from "./styles.scss";
import firebase from "firebase";

import EDB from "../config";

class AuthTest extends React.Component {
  constructor() {
    super();
    this.state = {
      logged: "not logged",
      signUpEmail: "",
      signUppPssword: "",
      loginEmail: "",
      loginpPssword: ""
    };
  }

  register = e => {
    const data = {
      email: this.state.signUpEmail,
      password: this.state.signUpPassword
    }
    firebase.auth()
      .createUserWithEmailAndPassword(data.email, data.password)
      .then(user => {
        console.log(user)
      })
      .catch(err => {
        console.log(err)
      })
  };

  login = e => {
    const data = {
      email: this.state.loginEmail,
      password: this.state.loginPassword
    }
    firebase.auth()
      .signInWithEmailAndPassword(data.email, data.password)
      .then(user => {
        this.setState(() => {
          return {logged: 'logged'}
        });
      })
      .catch(err => {
        console.log('logged',err)
      })
  };

  updateState = data => {
    this.setState(data);
  };

  render() {
    return (
      <div styleName="form">
        <form>
          <div>
            Email
            {" "}
            <input
              styleName="form__email"
              type="text"
              onChange={e => this.updateState({ signUpEmail: e.target.value })}
            />
          </div>
          <div>
            Password
            {" "}
            <input
              styleName="form__password"
              type="text"
              onChange={e => this.updateState({ signUpPassword: e.target.value })}
            />
          </div>
          <button onClick={this.register} styleName="form__button" type="submit">
            SIGN UP
          </button>
        </form>

        <div styleName="form__login">
          <form>
            <div>
              Email
              {" "}
              <input
                styleName="form__email"
                type="text"
                onChange={e => this.updateState({ loginEmail: e.target.value })}
              />
            </div>
            <div>
              Password
              {" "}
              <input
                styleName="form__password"
                type="text"
                onChange={e => this.updateState({ loginPassword: e.target.value })}
              />
            </div>
            <button onClick={this.login} styleName="form__button" type="submit">
              LOGIN
            </button>
            <div>
              <h3>{this.state.logged}</h3>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

  export default CSSModules(AuthTest, styles);
