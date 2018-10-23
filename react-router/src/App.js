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

  constructor(props) {
    super(props);
    this.state = { 
      account:null,
      balance:null,
      transactions:null,
      loggedIn: false
   }
  };

  setStates = (account, balance,transactions) => {
    this.setState({ account: account });
    localStorage.setItem("account", JSON.stringify(account));
    this.setState({ balance: balance });
    localStorage.setItem("balance", JSON.stringify(balance));
    this.setState({ transactions: transactions});
    localStorage.setItem("transactions", JSON.stringify(transactions));

  }

  hydrateStateWithLocalStorage() {
    // for all items in state
    for (let key in this.state) {
      // if the key exists in localStorage
      if (localStorage.hasOwnProperty(key)) {
        // get the key's value from localStorage
        let value = localStorage.getItem(key);
  
        // parse the localStorage string and setState
        try {
          value = JSON.parse(value);
          this.setState({ [key]: value });
        } catch (e) {
          // handle empty string
          this.setState({ [key]: value });
        }
      }
    }
        }

    async componentDidMount() {
      await this.hydrateStateWithLocalStorage();
    }


  

 render() {
    
      return (
        <BrowserRouter history={history}>
          <div className="App">
            <BackHeader history={history}/>
            <Route path="/" render={(props) => <Landing {...props} account={this.state.account} /> }exact />
            <Route path="/accounts" render={(props) => <Account {...props} setStates={this.setStates} /> }/>
            <Route path="/goal" render={(props) => <Goal {...props} balance={this.state.balance} transactions={this.state.transactions} /> } />
            <Route path="/friends" component={Friends} />
            <Route path="/landing" render={(props) => <Landing {...props} account={this.state.account} /> } />
            <Route path="/newGoal" component={NewGoal} />
            <Route path="/financialGoals" component={FinancialGoals} />

            <ThumbNail />
          </div>
        </BrowserRouter>
      );
    }
}

export default App;
