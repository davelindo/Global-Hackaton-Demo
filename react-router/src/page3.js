import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import GoalTile from './components/goalTile';
import ContributionsTile from './components/contributionsTile';

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

class Page3 extends Component {
  render() {
    return (
      <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
        < GoalTile />
        <ContributionsTile/>
      </Responsive>
    );
  }

  }

  export default Page3;