import React, { Component } from 'react';


class Account extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      clientAssertionResponse: '',
      tokenClientCredentialsResponse: ''
   };
  }

 clientAssertion(){
    let jsonResponse = '';
    var body = { 
      "iss": "2s5j8qga43p9oa91abgh2vv19o", 
      "sub": "lab126", 
      "jti": "id123456",  
      "aud": "https://api.hsbc.qa.xlabs.one/as/token.oauth2"
    };

    fetch(`https://api.hsbc.qa.xlabs.one/oauth2/client-assertion`, {
      method: 'POST',
      body:    JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' },
    })
    .then(res => res.json()) 
    .then(json => {
      console.log(json);
      this.setState({ clientAssertionResponse: json});
    });
    return jsonResponse;
  }

 tokenClientCredentials(clientAssertion){
    let jsonResponse = '';
    console.log("------------> clientAssertion = " + clientAssertion);
    var body = "grant_type=client_credentials&scope=accounts&client_assertion_type=urn%3Aietf%3Aparams%3Aoauth%3Aclient-assertion-type%3Ajwt-bearer&client_assertion=${clientAssertion}";
    
    fetch(`https://api.hsbc.qa.xlabs.one/oauth2/as/token-client-credentials`, {
      method: 'POST',
      body:    body,
      headers: { 'Content-Type': 'application/json' },
    })
    .then(res => res.json()) 
    .then(json => {
      console.log(json);
      this.setState({ tokenClientCredentialsResponse: json });
      
    });
    return jsonResponse;
  }

  componentDidMount() {
    const { account } = this.props.match.params;
    
    let clientAssertionResponse = this.clientAssertion();
    console.log("clientAssertionResponse = " + clientAssertionResponse);
   //this.setState({ clientAssertionResponse: clientAssertionResponse});
    let tokenClientCredentialsResponse = this.tokenClientCredentials(clientAssertionResponse);
    //this.setState({ tokenClientCredentialsResponse: tokenClientCredentialsResponse });
    
  }

  componentDidUpdate(prevProps) {
    // const { breed } = this.props.match.params;
    // if (breed !== prevProps.match.params.breed) {
    //   fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    //   .then(response => response.json())
    //   .then(json => {
    //     this.setState({ dogImage: json.message });
    //   });
    // }
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
