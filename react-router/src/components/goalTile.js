import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

class GoalTile extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      goal:{
        name: "Trip to Paris",
        amount: 2000.00,
        own_contribution: 798.00,
        other_contribution: 200.00
      } 
   };
  }

  computeProgress = (contributor) => {
    if (contributor === 'self'){
      return 100 * this.state.goal.own_contribution/this.state.goal.amount
    } else if (contributor == 'other'){
      return 100 * this.state.goal.other_contribution/this.state.goal.amount
    } else {
      return 100 * (1 - this.state.goal.other_contribution/this.state.goal.amount - this.state.goal.own_contribution/this.state.goal.amount )
    }
  }

  render() {
    return (
      <div class="card">
      <div class="card-body">
          <h5 class="text-muted card-title">Saving goal</h5>
          <h3 class="text-dark card-subtitle mb-2">{this.state.goal.name}</h3>
          <div class="table-responsive table-borderless">
              <table class="table table-bordered">
                  <tbody>
                      <tr>
                          <td style={{fontSize: '45px', padding: '0px'}}>{`$${this.state.goal.own_contribution + this.state.goal.other_contribution}`}</td>
                          <td style={{fontSize: '40px',color: '#888888',padding: '0px'}}>27 days</td>
                      </tr>
                      <tr>
                          <td style={{color: '#8f8f8f',padding: '0px 10px'}}>{`${this.state.goal.amount} goal`}</td>
                          <td style={{color: '#8f8f8f',padding: '0px'}}>until target date</td>
                      </tr>
                  </tbody>
              </table>
          </div>
          <div class="card">
              <div class="card-body" style={{padding: '0px 20px 20px 20px'}}>
                  <div class="table-responsive table-borderless" style={{height: '27px'}}>
                      <table class="table table-bordered table-sm">
                          <tbody>
                              <tr style={{height: '30px'}}>
                                  <td style={{height: '30px', width: '350px'}}>
                                      <h6 class="text-muted mb-2" style={{margin: '0px',height: '15px'}}>{`Your Contribution - ${this.computeProgress('self')}%`}</h6>
                                  </td>
                                  <td style={{height: '30px'}}>
                                      <h6 class="text-muted mb-2" style={{margin: '0px',height: '15px'}}>{`$${this.state.goal.own_contribution}`}</h6>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                  </div>
                  <div class="progress pulse animated" style={{height: '9px'}}>
                      <div class="progress-bar bg-success progress-bar-striped progress-bar-animated" aria-valuenow="39" aria-valuemin="0" aria-valuemax="100" style={{width: `${this.computeProgress('self')}%`}}><span class="sr-only">{`${this.computeProgress('self')}%`}</span></div>
                  </div>
              </div>
              <div class="card-body" style={{padding: '0px 20px 20px 20px'}}>
                  <div class="table-responsive table-borderless" style={{height: '27px'}}>
                      <table class="table table-bordered table-sm">
                          <tbody>
                              <tr style={{height: '30px'}}>
                                  <td style={{height: '30px',width: '350px'}}>
                                      <h6 class="text-muted mb-2" style={{margin: '0px',height: '15px'}}>{`Other Contributions - ${this.computeProgress('other')}%`}</h6>
                                  </td>
                                  <td style={{height: '30px'}}>
                                      <h6 class="text-muted mb-2" style={{margin: '0px',height: '15px'}}>{`$${this.state.goal.other_contribution}`}</h6>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                  </div>
                  <div class="progress pulse animated" style={{height: '9px'}}>
                      <div class="progress-bar bg-danger progress-bar-striped progress-bar-animated" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" style={{width: `${this.computeProgress('other')}%`}}><span class="sr-only">{`${this.computeProgress('other')}%`}</span></div>
                  </div>
              </div>
              <div class="card-body" style={{padding: '0px 20px 20px 20px'}}>
                  <div class="table-responsive table-borderless" style={{height: '27px'}}>
                      <table class="table table-bordered table-sm">
                          <tbody>
                              <tr style={{height: '30px'}}>
                                  <td style={{height: '30px',width: '350px'}}>
                                      <h6 class="text-muted mb-2" style={{margin: '0px',height: '15px'}}>{`Remaining - ${this.computeProgress()}%`}</h6>
                                  </td>
                                  <td style={{height: '30px'}}>
                                      <h6 class="text-muted mb-2" style={{margin: '0px',height: '15px'}}>{`${this.state.goal.amount - this.state.goal.own_contribution - this.state.goal.other_contribution }`}</h6>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                  </div>
                  <div class="progress pulse animated" style={{height: '9px'}}>
                      <div class="progress-bar bg-warning progress-bar-striped progress-bar-animated" aria-valuenow="51" aria-valuemin="0" aria-valuemax="100" style={{width: `${this.computeProgress()}%`}}><span class="sr-only">{`${this.computeProgress()}%`}</span></div>
                  </div>
              </div>
          </div>
      </div>
  </div>
    );
  }
}

export default GoalTile;