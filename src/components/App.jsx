import React, { Component } from 'react';
import { Header, Footer } from './layout';
import Exercises from './exercises';
class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Exercises />
        <Footer />
      </>
    );
  }
}

export default App;
