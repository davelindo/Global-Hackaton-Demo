import React, { Component } from 'react';


class Account extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      clientAssertionResponse: '',
      tokenClientCredentialsResponse: ''
   };
  }
  
  
async componentDidMount(){
    try{

      var body = { 
        "iss": "2s5j8qga43p9oa91abgh2vv19o", 
        "sub": "lab126", 
        "jti": "id123456",  
        "aud": "https://api.hsbc.qa.xlabs.one/as/token.oauth2"
      };

      
      const response = await fetch(`https://api.hsbc.qa.xlabs.one/invoauth2/client-assertion`, {
        method: 'POST',
        body:    JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' },
      })

      const json =  await response.json()

      console.log(response);
      this.setState({ clientAssertionResponse: json });
        
      const body1 = `grant_type=client_credentials&scope=accounts&client_assertion_type=urn%3Aietf%3Aparams%3Aoauth%3Aclient-assertion-type%3Ajwt-bearer&client_assertion=${json}`;

      console.log(body1);

      const response1 = await fetch(`https://api.hsbc.qa.xlabs.one/invoauth2/as/token-client-credentials`, {
        method: 'POST',
        body: body1,
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/x-www-form-urlencoded' }
        })
      
      const json2 = await response1.json()
      
      console.log(json2.access_token);
      this.setState( {tokenClientCredentialsResponse: json2.access_token })
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
      </div>
    );
  }
}

export default Account;