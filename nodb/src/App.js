import React, { Component } from 'react';
import './App.css';

import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer"
import ExternalInfo from "./Components/ExternalInfo/ExternalInfo"
import InternalInfo from "./Components/InternalInfo/InternalInfo"

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <ExternalInfo />
        <InternalInfo />
        <Footer />
      </div>
    );
  }
}

export default App;
