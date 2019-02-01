import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Product from './components/Product';
import ToolBar from './components/ToolBar';


class App extends Component {

  //////////////////
  componentWillMount() {
      console.log('Component WILL MOUNT!')
  }
  componentDidMount() {
      console.log('Component DID MOUNT!')
  }
  //////////////////
  componentWillReceiveProps(newProps) {    
      console.log('Component WILL RECIEVE PROPS!')
  }
  //////////////////
  shouldComponentUpdate(newProps, newState) {
      return true;
  }
  componentWillUpdate(nextProps, nextState) {
      console.log('Component WILL UPDATE!');
  }
  componentDidUpdate(prevProps, prevState) {
      console.log('Component DID UPDATE!')
  }
  componentWillUnmount() {
      console.log('Component WILL UNMOUNT!')
  }

  render() {
    return (
      <div>
          <Header/>
          <ToolBar/>
          <Product/>
      </div>
    );
  }
}

export default App;
