import React from 'react'
import CSSModules from 'react-css-modules';
import styles from './styles.scss';

class Header extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <h1 styleName="hit">Hit</h1>
    );
  }
}

export default CSSModules(Header, styles);
