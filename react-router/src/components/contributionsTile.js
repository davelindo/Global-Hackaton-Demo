import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'

class ContributionsTile extends Component {
  
  constructor(props) {
    super(props);
    this.state = { 
      contributions: [{"contributor":"Leo Chan Barclays", "date":"Sept 01", "message": "Happy Birthday!", "amount": 540.00}, {"contributor":"HSBC Bank", "date":"Sept 12", "message": "Transfer in 1% Bonus Match", "amount": 100.00}]
    }
      
  }

  mapContributors = (contributions) => {
    const listItems = contributions.map((contribution,index) =>
    <tr key={index}>
      <td>
          <h4 className="text-muted">{contribution.date.split(" ")[1]}</h4>
          <h6 className="text-muted">{contribution.date.split(" ")[0]}</h6>
      </td>
      <td>
          <h4 className="text-muted">{contribution.contributor}</h4>
          <h6 className="text-muted" style={{fontSize: '13px'}}>{contribution.message}</h6>
      </td>
      <td className="align-items-center align-content-center" style={{padding: '26px 0px',color: '#8f8f8f'}}>{`$${contribution.amount}`}</td>
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
      <div className="card">
        <div className="card-body">
            <div className="table-responsive">
                <table className="table">
                   {this.mapContributors(this.state.contributions)}
                </table>
            </div>
        </div>
    </div>
    );
  }
}

export default ContributionsTile;

