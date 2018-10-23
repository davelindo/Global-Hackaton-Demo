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

class Goal extends Component {
  constructor(props) {
    super(props);
  };
  
  render() {
    if (this.props.balance === null){
      return null
    } else {
    return (
      <Responsive>
        < GoalTile balance={this.props.balance}/>
        <ContributionsTile/>
      </Responsive>
    );
  }
  }

  }

  export default Goal;