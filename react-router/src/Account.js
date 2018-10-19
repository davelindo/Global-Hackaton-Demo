import React, { Component } from 'react';


class Account extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      clientAssertionResponse: '',
      tokenClientCredentialsResponse: '',
      AccountRequestId: '',
      accountsRespone: '',
      generateurl: '',
      authorisationCode: ''
   };

  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({authorisationCode: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.authorisationCode.value);
    event.preventDefault();
  }

  async clientAssertion(){
    try{
      let body = { 
        "iss": "2s5j8qga43p9oa91abgh2vv19o", 
        "sub": "lab126", 
        "jti": "id123456",  
        "aud": "https://api.hsbc.qa.xlabs.one/as/token.oauth2"
      };

      let response = await fetch(`https://api.hsbc.qa.xlabs.one/invoauth2/client-assertion`, {
        method: 'POST',
        body:    JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' },
      })

      let json =  await response.json()

      console.log(response);
      
      this.setState({ clientAssertionResponse: json });
      
      return json;
    } catch (err){
      console.log(err)
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
    
      return json.access_token
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
            "ExpirationDateTime": "2018-10-30T11:11:33+00:00",
            "TransactionFromDateTime": "2018-10-01T00:00:00+00:00", 
            "TransactionToDateTime": "2018-01-31T00:00:00+00:00"
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
          "sub": "lab126", 
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
    
      return json
    } catch (err){
      console.log(err)
    }
  }  

  
  async componentDidMount(){
    try {
      const clientAssertion = await this.clientAssertion();
      const accessToken = await this.tokenClientCredentials(clientAssertion);
      const intentId = await this.retrieveAccountRequest(accessToken);
      const generateurl = await this.generateUrl(intentId);

    }
      catch(err){
          console.log(err)
      }
}

  render() {
    console.log(this.props);
    const { account } = this.props.match.params;
    return (
      <div>
        <h1>Account {account}</h1>
        <h2>Step 1: POST /client-assertion </h2>
        {this.state.clientAssertionResponse}
        <h2>Step 2: POST /as/token-client-credentials </h2>
        {this.state.tokenClientCredentialsResponse}
        <h2>Step 3: POST /open-banking/v1.1/account-requests</h2>
        {this.state.AccountRequestId}
        <h2>Step4: POST /authorize-url-generate</h2>
        <a href={this.state.generateurl} target="_blank">Authorize Request</a>
        <h2>POST /as/token-authorization-code (Please type in the code that you obtained from the redirect):</h2>
        <form onSubmit={this.handleSubmit}>
        <label>
          Authorisation code:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      </div>
    );
  }
}

export default Account;