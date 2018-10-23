import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import ThumbNail from './components/thumbNail';

import BackHeader from './components/backHeader'
import history from './components/history';
import Login from './Login.js'
import { Redirect } from 'react-router'

// Pages
import Landing from './landing';
import FinancialGoals from './financialGoals';
import Friends from './friends';
import Goal from './goal';
import NewGoal from './newGoal';
import Account from './Account';

class App extends Component {



  

 render() {
    
      return (
        <BrowserRouter history={history}>
          <div className="App">
            <BackHeader history={history}/>
            <Route path="/" component={Landing} exact />
            <Route path="/accounts" component={Account} />
            <Route path="/goal" component={Goal} />
            <Route path="/friends" component={Friends} />
            <Route path="/landing" component={Landing} />
            <Route path="/newGoal" component={NewGoal} />
            <Route path="/financialGoals" component={FinancialGoals} />

            <ThumbNail />
          </div>
        </BrowserRouter>
      );
    }
}

export default App;
