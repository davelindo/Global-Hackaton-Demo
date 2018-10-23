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
      return 40
    } else if (contributor == 'other'){
      return 10
    } else {
      return 50
    }
  }

  

monthNumToName = (monthnum) => {
    var months = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May',
        'Jun', 'Jul', 'Aug', 'Sep',
        'Oct', 'Nov', 'Dec'
        ];
    return months[monthnum - 1] || '';
}
  
  convertAccountBalance = (number) => {
    
    let noCommas = number.split(',').join('');
    /* number now equips 3456789.12 */
    return parseFloat(noCommas).toPrecision(4);
  }


  render() {
    if (!this.props.balance){
        return (<div><h1> Loading ...</h1></div>)
    } else {
        console.log("goal tile")
        console.log(this.props.balance)
    return (
      <div className="card">
      <div className="card-body">
          <h5 className="text-muted card-title">Saving goal</h5>
          <h3 className="text-dark card-subtitle mb-2">{this.state.goal.name}</h3>
          <div className="table-responsive table-borderless">
              <table className="table table-bordered">
                  <tbody>
                      <tr>
                          <td style={{fontSize: '45px', padding: '0px'}}>{`$${this.props.balance.Data.Balance[0].Amount.Amount}`}</td>
                          <td style={{fontSize: '40px',color: '#888888',padding: '0px'}}>27 days</td>
                      </tr>
                      <tr>
                          <td style={{color: '#8f8f8f',padding: '0px 10px'}}>{`${this.state.goal.amount} goal`}</td>
                          <td style={{color: '#8f8f8f',padding: '0px'}}>until target date</td>
                      </tr>
                  </tbody>
              </table>
          </div>
          <div className="card">
              <div className="card-body" style={{padding: '0px 20px 20px 20px'}}>
                  <div className="table-responsive table-borderless" style={{height: '27px'}}>
                      <table className="table table-bordered table-sm">
                          <tbody>
                              <tr style={{height: '30px'}}>
                                  <td style={{height: '30px', width: '350px'}}>
                                      <h6 className="text-muted mb-2" style={{margin: '0px',height: '15px'}}>{`Your Contribution - ${this.computeProgress('self')}%`}</h6>
                                  </td>
                                  <td style={{height: '30px'}}>
                                      <h6 className="text-muted mb-2" style={{margin: '0px',height: '15px'}}>{`$${this.convertAccountBalance(this.props.balance.Data.Balance[0].Amount.Amount) * 0.40 }`}</h6>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                  </div>
                  <div className="progress pulse animated" style={{height: '9px'}}>
                      <div className="progress-bar bg-success progress-bar-striped progress-bar-animated" aria-valuenow="39" aria-valuemin="0" aria-valuemax="100" style={{width: `${this.computeProgress('self')}%`}}><span className="sr-only">{`${this.computeProgress('self')}%`}</span></div>
                  </div>
              </div>
              <div className="card-body" style={{padding: '0px 20px 20px 20px'}}>
                  <div className="table-responsive table-borderless" style={{height: '27px'}}>
                      <table className="table table-bordered table-sm">
                          <tbody>
                              <tr style={{height: '30px'}}>
                                  <td style={{height: '30px',width: '350px'}}>
                                      <h6 className="text-muted mb-2" style={{margin: '0px',height: '15px'}}>{`Other Contributions - ${this.computeProgress('other')}%`}</h6>
                                  </td>
                                  <td style={{height: '30px'}}>
                                      <h6 className="text-muted mb-2" style={{margin: '0px',height: '15px'}}>{`$${this.convertAccountBalance(this.props.balance.Data.Balance[0].Amount.Amount) * 0.10 }`}</h6>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                  </div>
                  <div className="progress pulse animated" style={{height: '9px'}}>
                      <div className="progress-bar bg-danger progress-bar-striped progress-bar-animated" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" style={{width: `${this.computeProgress('other')}%`}}><span className="sr-only">{`${this.computeProgress('other')}%`}</span></div>
                  </div>
              </div>
              <div className="card-body" style={{padding: '0px 20px 20px 20px'}}>
                  <div className="table-responsive table-borderless" style={{height: '27px'}}>
                      <table className="table table-bordered table-sm">
                          <tbody>
                              <tr style={{height: '30px'}}>
                                  <td style={{height: '30px',width: '350px'}}>
                                      <h6 className="text-muted mb-2" style={{margin: '0px',height: '15px'}}>{`Remaining - ${this.computeProgress()}%`}</h6>
                                  </td>
                                  <td style={{height: '30px'}}>
                                      <h6 className="text-muted mb-2" style={{margin: '0px',height: '15px'}}>{`$${this.convertAccountBalance(this.props.balance.Data.Balance[0].Amount.Amount) * 0.50 }`}</h6>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                  </div>
                  <div className="progress pulse animated" style={{height: '9px'}}>
                      <div className="progress-bar bg-warning progress-bar-striped progress-bar-animated" aria-valuenow="51" aria-valuemin="0" aria-valuemax="100" style={{width: `${this.computeProgress()}%`}}><span className="sr-only">{`${this.computeProgress()}%`}</span></div>
                  </div>
              </div>
          </div>
      </div>
  </div>
    );
}
  }
}

export default GoalTile;