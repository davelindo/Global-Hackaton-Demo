import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login';

class FinancialGoalsHeader extends Component {
  constructor(props) {
    super(props);
    this.state = { 
   };
  }

  render() {
    return (
        <div class="card">
            <div class="card-body" style={{ padding: '0px 20px' }}>
                <div class="table-responsive">
                    <table class="table">
                        <tbody>
                            <tr>
                                <td>
                                    <h5 class="text-muted">Your Financial Goals</h5>
                                    <h3 class="text-right text-dark mb-2" style={{width: '100%' }}>$7000 / $18000 (39%)</h3>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="progress" style={{height: '10px'}}>
                    <div class="progress-bar bg-success progress-bar-striped progress-bar-animated" aria-valuenow="39" aria-valuemin="0" aria-valuemax="100" style={{width: '39%'}}><span class="sr-only">39%</span></div>
                </div>
            </div>
            <div class="row" style={{width: '100%', padding: '0px', margin: '0px'}}>
                <div class="col m-auto" data-bs-hover-animate="tada" style={{backgroundColor: '#fcf8f8', width: '20%', padding: '15px'}}>
                    <h5 class="text-center text-black-50 m-auto">SEP</h5>
                </div>
                <div class="col m-auto" style={{backgroundColor: '#fcf8f8', width: '20%', padding: '15px' }}>
                    <h5 class="text-center text-black-50 m-auto" data-bs-hover-animate="tada">OCT</h5>
                </div>
                <div class="col m-auto" style={{backgroundColor: '#fcf8f8', width: '20%', padding: '15px' }}>
                    <h5 class="text-center text-black-50 m-auto" data-bs-hover-animate="tada">NOV</h5>
                </div>
                <div class="col m-auto" style={{backgroundColor: '#fcf8f8', width: '20%', padding: '15px' }}>
                    <h5 class="text-center text-black-50 m-auto" data-bs-hover-animate="tada">DEC</h5>
                </div>
                <div class="col m-auto" style={{backgroundColor: '#fcf8f8', width: '20%', padding: '15px'}}>
                    <h5 class="text-center text-dark m-auto" data-bs-hover-animate="tada">JAN</h5>
                </div>
            </div>
        </div>
    );
  }
}

export default FinancialGoalsHeader;