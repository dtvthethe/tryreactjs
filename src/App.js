import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Product from './components/Product';


class App extends Component {
  render() {
    return (
      <div>
          <Header/>
          <Product/>
      </div>
    );
  }
}

export default App;
