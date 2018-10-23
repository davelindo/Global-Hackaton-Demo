import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import GoalTile from './components/goalTile';
import ContributionsTile from './components/contributionsTile';


class Landing extends Component {
    constructor(props) {
        super(props);
      }

  render() {
    return (
      <div>
        <h3>{`Good morning ${this.props.account.Data.Account[0].Account.Name}`}</h3>
        <div className="d-inline-flex flex-grow-1" style={{height: '362.3px',backgroundImage: 'url(' + require('./assets/img/playground.png') + ')'}}>
            <div className="carousel slide" data-ride="carousel" id="carousel-2">
                <div className="carousel-inner flex-grow-0" role="listbox">
                    <div className="carousel-item" style={ { backgroundImage: 'url(' + require('./assets/img/playground.png') + ')', height: '243.884px', width: '569px' } }><img className="w-100 d-block"/>
                        <div className="carousel-caption">
                            <h4 className="text-left text-dark">You have</h4>
                            <h3 className="text-dark">$1,826.23</h3>
                            <p className="text-left text-muted">1 active account</p>
                        </div>
                    </div>
                    <div className="carousel-item active" style={{backgroundImage: 'url(' + require('./assets/img/playground.png') + ')',height: '243.884px',width: '569px'}}><img className="w-100 d-block"/>
                        <div className="carousel-caption">
                            <h4 className="text-left text-dark">You owe</h4>
                            <h3 className="text-dark">-$213.11</h3>
                            <p className="text-left text-muted">1 active account</p>
                        </div>
                    </div>
                </div>
                <div><a className="carousel-control-prev" href="#carousel-2" role="button" data-slide="prev"><span className="carousel-control-prev-icon"></span><span className="sr-only">Previous</span></a><a className="carousel-control-next" href="#carousel-2" role="button"
                        data-slide="next"><span className="carousel-control-next-icon"></span><span className="sr-only">Next</span></a></div>
                <ol className="carousel-indicators">
                    <li data-target="#carousel-2" data-slide-to="0"></li>
                    <li data-target="#carousel-2" data-slide-to="1" className="active"></li>
                </ol>
            </div>
        </div>
        <div className="d-block" style={{height: '140px'}}>
            <div className="card"><img className="card-img w-100 d-block"/>
                <div className="card-img-overlay" style={{height: '91px'}}>
                    <p className="lead" style={{padding: '0px'}}>Your Birthday is in 7 days.Reach your goals faster by sharing your financial goals with friends.</p>
                </div>
            </div>
        </div>
        <div className="d-block" style={{height: '70px'}}>
            <div className="btn-group float-right" role="group" style={{padding: '10px 49px'}}><button className="btn btn-secondary" type="button" style={{padding: '12px 24px'}}>Maybe later</button><Link to="/financialGoals"><button className="btn btn-success" type="button" style={{padding: '12px 24px'}}>Tell me more</button></Link></div>
        </div>
    </div>
    );
  }

  }

  export default Landing;
