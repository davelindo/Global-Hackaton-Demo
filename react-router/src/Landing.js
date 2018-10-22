import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import GoalTile from './components/goalTile';
import ContributionsTile from './components/contributionsTile';


class Landing extends Component {
  render() {
    return (
      <div>
        <h3>Good morning</h3>
        <div class="d-inline-flex flex-grow-1" style={{height: '362.3px',backgroundImage: 'url("assets/img/playground.png")'}}>
            <div class="carousel slide" data-ride="carousel" id="carousel-2">
                <div class="carousel-inner flex-grow-0" role="listbox">
                    <div class="carousel-item" style={{backgroundImage: 'url("assets/img/playground.png")',height: '243.884px',width: '569px'}}><img class="w-100 d-block"/>
                        <div class="carousel-caption">
                            <h4 class="text-left text-dark">You have</h4>
                            <h3 class="text-dark">$1,826.23</h3>
                            <p class="text-left text-muted">1 active account</p>
                        </div>
                    </div>
                    <div class="carousel-item active" style={{backgroundImage: 'url("assets/img/playground.png")',height: '243.884px',width: '569px'}}><img class="w-100 d-block"/>
                        <div class="carousel-caption">
                            <h4 class="text-left text-dark">You owe</h4>
                            <h3 class="text-dark">-$213.11</h3>
                            <p class="text-left text-muted">1 active account</p>
                        </div>
                    </div>
                </div>
                <div><a class="carousel-control-prev" href="#carousel-2" role="button" data-slide="prev"><span class="carousel-control-prev-icon"></span><span class="sr-only">Previous</span></a><a class="carousel-control-next" href="#carousel-2" role="button"
                        data-slide="next"><span class="carousel-control-next-icon"></span><span class="sr-only">Next</span></a></div>
                <ol class="carousel-indicators">
                    <li data-target="#carousel-2" data-slide-to="0"></li>
                    <li data-target="#carousel-2" data-slide-to="1" class="active"></li>
                </ol>
            </div>
        </div>
        <div class="d-block" style={{height: '140px'}}>
            <div class="card"><img class="card-img w-100 d-block"/>
                <div class="card-img-overlay" style={{height: '91px'}}>
                    <p class="lead" style={{padding: '0px'}}>Your Birthday is in 7 days.Reach your goals faster by sharing your financial goals with friends.</p>
                </div>
            </div>
        </div>
        <div class="d-block" style={{height: '70px'}}>
            <div class="btn-group float-right" role="group" style={{padding: '10px 49px'}}><button class="btn btn-secondary" type="button" style={{padding: '12px 24px'}}>Maybe later</button><button class="btn btn-success" type="button" style={{padding: '12px 24px'}}>Tell me more</button></div>
        </div>
    </div>
    );
  }

  }

  export default Landing;