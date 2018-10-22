import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import history from './history';



class BackHeader extends Component {

  constructor(props) {
    super(props);
   
  }
  
  render() {
    return (
      <div style={{backgroundColor: '#f8f9fa'}}><button class="btn btn-light btn-lg" onClick={this.props.history.goBack} type="button" style={{margin: '0px 16px',width: '58px'}}><i class="fa fa-chevron-left" style={{fontXize: '24px',color: '#888888'}}></i></button></div>

    );
  }

  }

  export default BackHeader;