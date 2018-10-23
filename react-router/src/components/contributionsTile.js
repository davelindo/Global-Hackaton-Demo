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

  monthNumToName = (monthnum) => {
    var months = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May',
        'Jun', 'Jul', 'Aug', 'Sep',
        'Oct', 'Nov', 'Dec'
        ];
    return months[monthnum - 1] || '';
}

  mapContributors = (transactions) => {
    const listItems = transactions.map((transaction) =>
    <tr key={transaction.TransactionId}>
      <td>
        <h4 className="text-muted">{transaction.ValueDateTime.split("-")[2].substring(0,2)}</h4>
        <h6 className="text-muted">{this.monthNumToName(transaction.ValueDateTime.split("-")[1])}</h6>
      </td>
      <td>
          <h4 className="text-muted">{transaction.MerchantDetails.MerchantName}</h4>
          <h6 className="text-muted" style={{fontSize: '13px'}}>Have Fun!!</h6>
      </td>
      <td className="align-items-center align-content-center" style={{padding: '26px 0px',color: '#8f8f8f'}}>{`$${transaction.Amount.Amount}`}</td>
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
                   {this.mapContributors(this.props.transactions.Data.Transaction)}
                </table>
            </div>
        </div>
    </div>
    );
  }
}

export default ContributionsTile;

