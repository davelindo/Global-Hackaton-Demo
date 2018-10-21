/*global FB*/

import React, { Component } from 'react';
import FbLoginBtn from '../src/components/FbLoginBtn'

class TestView1 extends Component {
 

  testFBAccessToken() {
    console.log('trigger function to validate access token')
    FB.getLoginStatus(function(response) {
      if (response.status === 'connected') {
        console.log(response.authResponse.accessToken);
      }
    });
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

  async componentDidMount(){
    const refresh = await this.hydrateStateWithLocalStorage();
    console.log("Need to refresh:  " + refresh)
    if (refresh) {
      console.log('misssing state in local storage')
      try {
        this.testFBAccessToken();
      }
        catch(err){
            console.log(err)
        }
    }
}
  render() {
    return (
      <div>
      <h1>Test View 1</h1>
      
        <FbLoginBtn 
          width="250" 
          dataScope="public_profile,email,user_friends,user_posts,user_events" 
          //onSuccess={callback} 
          //onFailure={optionalCallback} 
          //afterLogin={optionalCallback} 
          />
          
      </div>
      

    );
  }
}

export default TestView1;
