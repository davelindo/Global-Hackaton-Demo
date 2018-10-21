import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

class FriendsHeader extends Component {
  constructor(props) {
    super(props);
    this.state = { 
   };
  }

  render() {
    return (
        <div class="card">
            <div class="card-body">
                <h5 class="text-muted card-title">Friends</h5>
                <h3 class="text-dark card-subtitle mb-2">Updates</h3>
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