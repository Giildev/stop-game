import React from 'react'

import Header from '../components/Header'
import Login from '../components/LoginForm'
import Footer from '../components/Footer'

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Login />
        <Footer />
      </div>
    );
  }
}
