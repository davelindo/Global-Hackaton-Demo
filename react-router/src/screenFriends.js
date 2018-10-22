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
  render() {
    return (
      <Responsive >
        <section style={{height: '626px' }}>
            <FriendsHeader/>
            <FriendsList/>
        </section>
      </Responsive>
    );
  }

  }

  export default ScreenFriends;