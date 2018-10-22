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

  constructor(props) {
    super(props);
    this.state = { 
      sub: '',
      clientAssertionResponse: '',
      tokenClientCredentialsResponse: '',
      AccountRequestId: '',
      accountsRespone: '',
      generateurl: '',
      authorisationCode: '',
      tokenAuthorisationResponse: '',
      accountListResponse: '',
      accountId: '',
      accountBalanceResponse: '',
      accountTransactionsResponse: '',
      redirect: false,
      loading: true
   }
   this.login = this.login.bind(this);

  }

  async login(){
    const refresh = await this.hydrateStateWithLocalStorage();
    console.log("Need to refresh:  " + refresh)
    if (refresh) {
      console.log('misssing state in local storage')
      try {
        const clientAssertion = await this.clientAssertion();
        const accessToken = await this.tokenClientCredentials(clientAssertion);
        const intentId = await this.retrieveAccountRequest(accessToken);
        const generateurl = await this.generateUrl(intentId);
        this.setState( {loading: false})
      }
        catch(err){
            console.log(err)
        }
    }
}

async tokenClientCredentials(clientAssertion){
    
  console.log(`------------> clientAssertion = ${clientAssertion}`);
  
  try {
    let body = `grant_type=client_credentials&scope=accounts&client_assertion_type=urn%3Aietf%3Aparams%3Aoauth%3Aclient-assertion-type%3Ajwt-bearer&client_assertion=${clientAssertion}`;

    console.log(body);

    let response = await fetch(`https://api.hsbc.qa.xlabs.one/invoauth2/as/token-client-credentials`, {
      method: 'POST',
      body: body,
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/x-www-form-urlencoded' }
      })
    
    let json = await response.json()
    console.log(json.access_token);
  
    this.setState( {tokenClientCredentialsResponse: json.access_token })
    localStorage.setItem("tokenClientCredentialsResponse", json.access_token);
  
    return json.access_token
  } catch (err){
    console.log(err)
  }
}

async clientAssertion(){
  try{

    var randomstring = require("randomstring");

    let sub = randomstring.generate({
      length: 7,
      charset: 'alphabetic',
      capitalization: 'uppercase'
    });

    console.log("----------> sub =")
    console.log(sub);

    this.setState({ sub: sub });
    localStorage.setItem("sub", sub);

    let body = { 
      "iss": "2s5j8qga43p9oa91abgh2vv19o", 
      "sub": `${this.state.sub}`, 
      "jti": "id123456",  
      "aud": "https://api.hsbc.qa.xlabs.one/as/token.oauth2"
    };

    console.log(body);

    let response = await fetch(`https://api.hsbc.qa.xlabs.one/invoauth2/client-assertion`, {
      method: 'POST',
      body:    JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' },
    })

    let json =  await response.json()

    console.log(response);
    
    this.setState({ clientAssertionResponse: json });
    localStorage.setItem("clientAssertionResponse", json);
    
    return json;
  } catch (err){
    console.log(err)
  }
}

async retrieveAccountRequest(access_token){
    
  console.log(`------------> bearer = ${access_token}`);
  
  try {
    let body = {
        "Data": { 
          "Permissions": [
            "ReadAccountsBasic",
            "ReadAccountsDetail",
            "ReadBalances", 
            "ReadBeneficiariesBasic", 
            "ReadBeneficiariesDetail", 
            "ReadDirectDebits",
            "ReadProducts", 
            "ReadStandingOrdersBasic", 
            "ReadStandingOrdersDetail", 
            "ReadTransactionsBasic", 
            "ReadTransactionsCredits", 
            "ReadTransactionsDebits", 
            "ReadTransactionsDetail" 
          ], 
          "ExpirationDateTime": "2018-11-20T11:11:33+00:00",
          "TransactionFromDateTime": "2018-10-01T00:00:00+00:00", 
          "TransactionToDateTime": "2018-10-31T00:00:00+00:00"
        }
    }
    let headers = {
      'Accept': 'application/json', 
      'Content-Type': 'application/json; charset=utf-8', 
      'Accept': 'application/json', 
      'x-fapi-customer-last-logged-time' : 'Sun, 10 Sep 2017 19:43:31 UTC', 
      'x-fapi-customer-ip-address' : '10.23.143.98', 
      'x-fapi-interaction-id' : '2c96efd2-6566-490a-81d7-24dd51340196', 
      'x-fapi-financial-id' : 'OB/2017/001', 
      'Authorization' : `bearer ${access_token}`
    }

    console.log('headers = ');
    console.log(headers);
    console.log('body = ');
    console.log(body);

    let response = await fetch(`https://api.hsbc.qa.xlabs.one/invais/open-banking/v1.1/account-requests`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: headers,

      })
    
    let json = await response.json()
    console.log(json.Data.AccountRequestId);
  
    this.setState( {AccountRequestId: json.Data.AccountRequestId })
    localStorage.setItem("AccountRequestId", json.Data.AccountRequestId);
    
    return json.Data.AccountRequestId;
  } catch (err){
    console.log(err)
  }
}

async generateUrl(intentId){
    
  console.log(`------------> intentId = ${intentId}`);
  
  try {
    
    let body = {
        "client_id": "2s5j8qga43p9oa91abgh2vv19o",
        "sub": `${this.state.sub}`, 
        "scope": "accounts", 
        "redirect_uri": "https://www.test.com/lab126", 
        "intent_id": `${intentId}` 
    }

    let headers = {
      'Content-Type' : 'application/json',
      'Accept' : 'application/json'
    }

    console.log(body);

    let response = await fetch(`https://api.hsbc.qa.xlabs.one/invoauth2/authorize-url-generate`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: headers,
      })
    
    let json = await response.json()
    console.log(json);
  
    // URL returned contain spaces, must use function to replace space with %20
    json = json.replace(/\s/g, "%20");
    this.setState( {generateurl: json })
    localStorage.setItem("generateurl", json);
  
    return json
  } catch (err){
    console.log(err)
  }
}  


  hydrateStateWithLocalStorage = () => {
    // for all items in state
  var refresh = true
  for (let key in this.state) {
    // if the key exists in localStorage
    if (localStorage.hasOwnProperty(key)) {
      // get the key's value from localStorage
      let value = localStorage.getItem(key);

      // parse the localStorage string and setState
      try {
        // value = JSON.parse(value);
        console.log(value)
        this.setState({ [key]: value });
        refresh = false
        //only set refresh true if getting a state fails
      } catch (e) {
        // handle empty string
        this.setState({ [key]: value });
        console.log("refresh is true")
        return true
        
      }
    } else {
      return true
    }
  }
  return refresh
}

  render() {
    if (this.state.sub.length === 0){
      return (
        <div className="App">
          <Login login = {this.login} />
        </div>        
      )
    }
    else {
      return (
        <BrowserRouter history={history}>
          <div className="App">
            {/* <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Savings</h1>
            </header> */}
            <BackHeader history={history}/>
            <Route path="/" component={Home} exact />
            <Route path="/test1" component={TestView1} />
            <Route path="/test2" component={TestView2} />
            <Route path="/accounts" render={(props) => <Account {...props} state={this.state} />} />
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
}

export default App;
