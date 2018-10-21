import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

class FriendsList extends Component {
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
        <tbody>
        {listItems}      
        </tbody>
    );
  }

  render() {
    return (
        <div class="card" style={{width: '100%' }}>
            <ul class="list-group list-group-flush" style={{width: '100%' }}>
                <li class="list-group-item" style={{padding: '0px 5px', width: '100%' }}>
                    <div class="table-responsive" style={{width: '100%' }}>
                        <table class="table">
                            <tbody style={{width: '100%' }}>
                                {this.listSocialEvents(this.state.socialEvents)}
                            </tbody>
                        </table>
                    </div>
                </li>
            </ul>
        </div>
    );
  }
}

export default FriendsList;