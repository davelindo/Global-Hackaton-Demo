import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

class FinancialGoalsList extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        socialEvents : [{
                "name": "Bleake's wedding", 
                "daysToEvent": "52 days - Jan 6",
                "eventIcon": "fas fa-gift",
                "color": "#56aa1c"
            },
            {
                "name": "Melissa's baby shower", 
                "daysToEvent": "61 days - Jan 15",
                "eventIcon": "fab fa-odnoklassniki-square",
                "color": "#fcbf49"
            },
            {
                "name": "Calvin's graduation", 
                "daysToEvent": "83 days - Feb 6",
                "eventIcon": "fas fa-user-graduate",
                "color": "#0051ba"
            }
        ]
   };
  }

  listSocialEvents = (socialEvents) => {
    const listItems = socialEvents.map((friend, index) =>
        <tr key={index} style={{width: '100%' }}>
            <td style={{width: '15%' }}><i className={`${friend.eventIcon} d-flex justify-content-center align-items-center align-content-center m-auto rubberBand animated`} style={{fontSize: '32px', padding: '12px', color: friend.color }}></i></td>
            <td style={{width: '60%' }}>
                <h5>{friend.name}</h5>
                <h6 class="text-muted">{friend.daysToEvent}</h6>
            </td>
            <td style={{width: '25%' }}><button class="btn btn-success" type="button" style={{padding: '12px', width: '100%' }}>Contribute</button></td>
        </tr>
    );
    return (
        <table class="table">
            <tbody style={{width: '100%' }}>
                {listItems}      
            </tbody>
        </table>
    );
  }

  render() {
    return (
        <div>
            <div class="card" style={{ width: '100%' }}>
                <h3 style={{ padding: '30px 10px 5px 10px', backgroundColor: '#eeeeee', margin: '0px' }}>Shared Goals</h3>
                <ul class="list-group list-group-flush" style={{ width: '100%' }}>
                    <li class="list-group-item" style={{ padding: '0px 5px', width: '100%' }}>
                        <div class="table-responsive" style={{ width: '100%' }}>
                            <table class="table">
                                <tbody style={{ width: '100%' }}>
                                    <tr style={{ width: '100%' }}>
                                        <td style={{ width: '15%', padding: '5px' }}><i class="material-icons d-flex justify-content-center align-items-center align-content-center m-auto rubberBand animated" style={{ fontSize: '32px', padding: '12px', color: '#56aa1c' }}>card_travel</i></td>
                                        <td style={{ width: '60%', padding: '5px' }}>
                                            <h5 style={{ margin: '0px 0px 5px' }}>Trip to Paris</h5>
                                            <h6 class="text-muted">$1000 of $2000 (50%)</h6>
                                        </td>
                                        <td style={{ width: '25%', padding: '5px 10px' }}><button class="btn btn-success" type="button" style={{ padding: '8px 12px', width: '100%', margin: '6px 0px 0px 0px' }}>Contribute</button></td>
                                    </tr>
                                    <tr style={{ width: '100%' }}>
                                        <td style={{ width: '15%', padding: '5px' }}><i class="icon ion-university d-none d-flex justify-content-center align-items-center align-content-center m-auto rubberBand animated" style={{ fontSize: '32px', padding: '12px', color: '#9b301c' }}></i></td>
                                        <td style={{ width: '60%', padding: '5px' }}>
                                            <h5 style={{ margin: '0px 0px 5px' }}>MBA Tuition</h5>
                                            <h6 class="text-muted">$3000 of $12000 (25%)</h6>
                                        </td>
                                        <td style={{ width: '25%', padding: '5px 10px' }}><button class="btn btn-success" type="button" style={{ padding: '8px 12px', width: '100%', margin: '6px 0px 0px 0px' }}>Contribute</button></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="card" style={{ width: '100%' }}>
                <h3 style={{ padding: '30px 10px 5px 10px', backgroundColor: '#eeeeee', margin: '0px' }}>Private Goals</h3>
                <ul class="list-group list-group-flush" style={{ width: '100%' }}>
                    <li class="list-group-item" style={{ padding: '0px 5px', width: '100%' }}>
                        <div class="table-responsive" style={{ width: '100%' }}>
                            <table class="table">
                                <tbody style={{ width: '100%' }}>
                                    <tr style={{ width: '100%' }}>
                                        <td style={{ width: '15%', padding: '5px' }}><i class="material-icons d-flex justify-content-center align-items-center align-content-center m-auto rubberBand animated" style={{ fontSize: '32px', padding: '12px', color: '#56aa1c' }}>card_travel</i></td>
                                        <td style={{ width: '60%', padding: '5px' }}>
                                            <h5 style={{ margin: '0px 0px 5px' }}>Engagement Ring</h5>
                                            <h6 class="text-muted">$3000 of $4000 (75%)</h6>
                                        </td>
                                        <td style={{ width: '25%', padding: '5px 10px' }}><button class="btn btn-success" type="button" style={{ padding: '8px 12px', width: '100%', margin: '6px 0px 0px 0px' }}>Contribute</button></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </li>
                </ul>
            </div>
            <section>
                    <button class="btn btn-primary d-flex flex-row ml-auto" type="button" style={{ margin: '15px 17px', fontSize: '25px', padding: '0px 12px 4px 12px' }}><Link to="/newGoal" class="d-flex flex-row ml-auto" style={{color: 'white', textDecoration: 'none'}}>+ </Link></button>
            </section>
        </div>
    );
  }
}

export default FinancialGoalsList;