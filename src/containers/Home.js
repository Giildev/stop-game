import React from 'react'

import Header from '../components/Header'
import Form from '../components/Form'
import Footer from '../components/Footer'

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Form />
        <Footer />
      </div>
    );
  }
}
