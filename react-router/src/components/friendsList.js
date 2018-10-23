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
                <h6 className="text-muted">{friend.daysToEvent}</h6>
            </td>
            <td style={{width: '25%' }}><button className="btn btn-success" type="button" style={{padding: '12px', width: '100%' }}>Contribute</button></td>
        </tr>
    );
    return (
        <table className="table">
            <tbody style={{width: '100%' }}>
                {listItems}      
            </tbody>
        </table>
    );
  }

  enrichSocialEvents = (socialEvents) => {
    console.log("Need to enrich with: ");
    console.log(socialEvents);
    var newEvents = this.state.socialEvents;
    var self = this;

    window.FB.api(
        '/me',
        'GET',
        {"fields":"events,posts,interested_in,birthday"},
        function(response) {
            // Insert your code here
            var eventsData = response.events.data;
            for (var eventItem of eventsData){
                if (!newEvents.find(function(anEvent){
                    return anEvent.name === eventItem.description
                })){
                    var parsedDate = Date.parse(eventItem.start_time);
                    var noDays = Math.round((parsedDate - (new Date()))/(1000*60*60*24));
                    var options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };

                    newEvents.push({
                        "name": eventItem.description, 
                        "daysToEvent": noDays + ' days - ' + (new Date(parsedDate)).toLocaleDateString("en-US", options),
                        "eventIcon": "fas fa-info-circle",
                        "color": "#f77f00"
                    })
                }
            }
            self.setState({socialEvents : newEvents});
        }
      );
  }

  render() {
    return (
        <div className="card" style={{width: '100%' }}>
            <ul className="list-group list-group-flush" style={{width: '100%' }}>
                <li className="list-group-item" style={{padding: '0px 5px', width: '100%' }}>
                    <div className="table-responsive" style={{width: '100%' }}>
                        {this.listSocialEvents(this.state.socialEvents)}
                    </div>
                </li>
            </ul>
        </div>
    );
  }
}

export default FriendsList;