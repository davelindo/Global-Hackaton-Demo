import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from './Home';
import Account from './Account';
import TestView1 from './TestView1';
import TestView2 from './TestView2';
import logo from './logo.svg';
import './App.css';
import ThumbNail from './components/thumbNail';
import Page3 from './page3';
import ScreenFriends from './screenFriends';
import Landing from './Landing';
import NewGoal from './NewGoal';
import BackHeader from './components/backHeader'
import history from './components/history';
import Login from './Login.js'
import { Redirect } from 'react-router'

class App extends Component {



  

 render() {
    
      return (
        <BrowserRouter history={history}>
          <div className="App">
            <BackHeader history={history}/>
            <Route path="/" component={Home} exact />
            <Route path="/test1" component={TestView1} />
            <Route path="/test2" component={TestView2} />
            <Route path="/accounts" component={Account} />
            <Route path="/page3" component={Page3} />
            <Route path="/screenFriends" component={ScreenFriends} />
            <Route path="/landing" component={Landing} />
            <Route path="/newGoal" component={NewGoal} />
            
            

            <Link to="/">Home</Link> | 
            <Link to="/test1">Test 1</Link> | 
            <Link to="/test2">Test 2</Link> |
            <Link to="/accounts">Account</Link>|
            <Link to="/Page3">Page3</Link> | 
            <Link to="/ScreenFriends">ScreenFriends</Link>|
            <Link to="/Landing">Landing</Link>|
            <Link to="/newGoal">New Goal</Link>
            

            <ThumbNail />
            
          </div>
        </BrowserRouter>
      );
    }
}

export default App;
