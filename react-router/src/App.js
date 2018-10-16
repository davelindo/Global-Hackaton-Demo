import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from './Home';
import Account from './Account';
import TestView1 from './TestView1';
import TestView2 from './TestView2';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Savings</h1>
          </header>
          
          <Route path="/" component={Home} exact />
          <Route path="/test1" component={TestView1} />
          <Route path="/test2" component={TestView2} />
          <Route path="/accounts/:account" component={Account} />

          <Link to="/">Home</Link> | 
          <Link to="/test1">Test 1</Link> | 
          <Link to="/test2">Test 2</Link> |
          <Link to="/accounts">Account</Link>
          
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
