/*global FB*/
import React, {Component} from 'react';

class FbLoginBtn extends Component{
    componentDidMount() {
        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {
                return;
            }
            js = d.createElement(s);
            js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));


        window.fbAsyncInit = ()=> {
            FB.init({
                appId: '1014821845390241',//Change with your Facebook app id
                autoLogAppEvents: true,
                xfbml: true,
                version: 'v3.0'
            });

            FB.Event.subscribe('auth.statusChange', response => {
                if (response.authResponse) {
                    this.checkLoginState();
                } else {
                    console.log('[FacebookLoginButton] User cancelled login or did not fully authorize.');
                }
            });
        };
    }

    checkLoginState(){
        FB.getLoginStatus(function(response) {
            console.log(response.authResponse.accessToken);
            this.statusChangeCallback(response);

            // Test the open banking api
            
        }.bind(this));
    }

    login(){
        FB.login(this.checkLoginState(), {scope: 'email'});
    }

    statusChangeCallback(response) {
        if (response.status === 'connected') {
            this.testAPI();
        } else if (response.status === 'not_authorized') {
            console.log("[FacebookLoginButton] Person is logged into Facebook but not your app");
        } else {
            console.log("[FacebookLoginButton] Person is not logged into Facebook");
        }
    }

    testAPI() {
        FB.api('/me', function(response) {
            console.log('[FacebookLoginButton] Successful login for: ', response);
        });
    }

    render(){
        return (
            <button className="btn btn-block btn-fb" onClick={()=>this.login()}>
                <i className="fa fa-facebook"/> Connect with Facebook
            </button>
        )
    }                                                                                                                                                                                                                                     z
}

export default FbLoginBtn;