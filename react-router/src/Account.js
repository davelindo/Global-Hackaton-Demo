import React, { Component } from 'react';


class Account extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      clientAssertionResponse: '',
      tokenClientCredentialsResponse: ''
   };
  }
  
  
componentDidMount(){
    try{

      var body = { 
        "iss": "2s5j8qga43p9oa91abgh2vv19o", 
        "sub": "lab126", 
        "jti": "id123456",  
        "aud": "https://api.hsbc.qa.xlabs.one/as/token.oauth2"
      };

      
      fetch(`https://api.hsbc.qa.xlabs.one/invoauth2/client-assertion`, {
        method: 'POST',
        body:    JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' },
      })
    .then(response => response.json()) 
      .then(response => {

        console.log(response);
        this.setState({ clientAssertionResponse: response });
        
        const body1 = 'grant_type=client_credentials&scope=accounts&client_assertion_type=urn%3Aietf%3Aparams%3Aoauth%3Aclient-assertion-type%3Ajwt-bearer&client_assertion=' + response;


        console.log(body1);
        fetch(`https://api.hsbc.qa.xlabs.one/invoauth2/as/token-client-credentials`, {
          method: 'POST',
          body: body1,
          headers: { 'Accept': 'application/json', 'Content-Type': 'application/x-www-form-urlencoded' }
          }).then(response1 => response1.json())
          .then(response1 => {
            console.log(response1.access_token);
            this.setState( {tokenClientCredentialsResponse: response1.access_token });
          });
      //.then(response1 => this.setState( {tokenClientCredentialsResponse: response1.data }));
      });
    

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