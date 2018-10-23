import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import FinancialGoalsHeader from './components/financialGoalsHeader';
import FinancialGoalsList from './components/financialGoalsList';

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

class FinancialGoals extends Component {
  render() {
    return (
      <Responsive>
        <section style={{height: '626px' }}>
          <FinancialGoalsHeader/>
          <FinancialGoalsList/>
        </section>
      </Responsive>
    );
  }

  }

  export default FinancialGoals;