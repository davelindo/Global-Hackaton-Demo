import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import FriendsHeader from './components/friendsHeader';
import FriendsList from './components/friendsList';

import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'

class ScreenFriends extends Component {

    handleLogin = (data) => {
        console.log("Got this: " + data);
        this.socialEvents.enrichSocialEvents(data);
        //FriendsList.enrichSocialEvents(data);
    }

  render() {
    return (
      <Responsive >
        <section style={{height: '626px' }}>
            <FriendsHeader onLogin={this.handleLogin}/>
            <FriendsList ref={(child) => { this.socialEvents = child; }} />
        </section>
      </Responsive>
    );
  }

  }

  export default ScreenFriends;