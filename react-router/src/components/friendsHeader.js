import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login';

class FriendsHeader extends Component {
  constructor(props) {
    super(props);
    this.state = { 
   };
  }

  
  responseFacebook = (response) => {
    console.log(response);
  }

  componentClicked = (data) => {
    console.log(data);
  }

  render() {
    return (
        <div class="card">
            <div class="table-responsive">
                <table class="table">
                    <tbody>
                        <tr>
                            <td style={{width: '50%'}}>
                                <h5 class="text-muted">Friends</h5>
                                <h3 class="text-dark mb-2">Updates</h3>
                            </td>
                            <td style={{width: '50%', padding: '30px 0px 0px 0px'}}>
                                <FacebookLogin
                                    appId="1014821845390241"
                                    autoLoad={true}
                                    fields="name,email,picture"
                                    scope="public_profile,email,user_friends,user_posts,user_events,user_birthday"
                                    returnScopes="true"
                                    onClick={this.componentClicked}
                                    callback={this.responseFacebook} />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="row" style={{width: '100%', padding: '0px', margin: '0px' }}>
                <div class="col m-auto" data-bs-hover-animate="tada" style={{backgroundColor: '#fcf8f8', width: '20%', padding: '25px 15px' }}>
                    <h5 class="text-center text-black-50 m-auto">SEP</h5>
                </div>
                <div class="col m-auto" style={{backgroundColor: '#fcf8f8', width: '20%', padding: '25px 15px' }}>
                    <h5 class="text-center text-black-50 m-auto" data-bs-hover-animate="tada">OCT</h5>
                </div>
                <div class="col m-auto" style={{backgroundColor: '#fcf8f8', width: '20%', padding: '25px 15px' }}>
                    <h5 class="text-center text-black-50 m-auto" data-bs-hover-animate="tada">NOV</h5>
                </div>
                <div class="col m-auto" style={{backgroundColor: '#fcf8f8', width: '20%', padding: '25px 15px' }}>
                    <h5 class="text-center text-black-50 m-auto" data-bs-hover-animate="tada">DEC</h5>
                </div>
                <div class="col m-auto" style={{backgroundColor: '#fcf8f8', width: '20%', padding: '25px 15px' }}>
                    <h5 class="text-center text-dark m-auto" data-bs-hover-animate="tada">JAN</h5>
                </div>
            </div>
        </div>
    );
  }
}

export default FriendsHeader;