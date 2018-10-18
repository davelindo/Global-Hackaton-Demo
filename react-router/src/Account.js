import React, { Component } from 'react';


class Account extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      clientAssertionResponse: '',
      tokenClientCredentialsResponse: '',
      AccountRequestId: '',
      accountsRespone: ''
   };
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

  
  async componentDidMount(){
    try {
      const clientAssertion = await this.clientAssertion();
      const accessToken = await this.tokenClientCredentials(clientAssertion);
      const intentId = await this.retrieveAccountRequest(accessToken);
      console.log(`tokenClientCredentialsResponse = ${intentId}`);
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
        {this.state.authorize-url-generate}
      </div>
    );
  }
}

export default Account;