import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';


class ThumbNail extends Component {
  render() {
    return (
      <div style={{backgroundColor: '#dedede'}}>
        <div class="table-responsive table-bordered">
            <table class="table table-bordered table-sm">
                <tbody>
                    <tr>
                        <td class="justify-content-center align-items-center align-content-center align-self-center" style={{width: '20%'}}>
                          <Link to="/landing">
                            <i class="fa fa-home align-items-center align-content-center align-self-center" style={{padding: '0px 25%',fontSize: '42px',color: '#888888'}}></i>
                          </Link>
                        </td>
                        <td style={{width: '20%'}}>
                          <Link to="/financialGoals">
                            <i class="fa fa-user align-items-center align-content-center align-self-center" style={{padding: '0px 25%',fontSize: '42px',color: '#888888'}}></i>
                          </Link>
                        </td>
                        <td style={{width: '20%'}}>
                          <Link to="/friends">
                            <i class="fa fa-group align-items-center align-content-center align-self-center" style={{padding: '0px 0px 0px 15%',fontSize: '42px', color: 'rgb(136,136,136)'}}></i>
                            <i class="fa fa-dot-circle-o d-table-cell float-right" style={{padding: '0px 20px 0px 0px', color: '#fe0707'}}></i>
                          </Link>
                        </td>
                        <td style={{width: '20%'}}>
                          <Link to="/accounts">
                            <i class="fa fa-credit-card align-items-center align-content-center align-self-center" style={{padding: '0px 25%',fontSize: '42px',color: '#888888'}}></i>
                          </Link></td>
                        <td style={{width: '20%'}}>
                          <Link to="/goal">
                            <i class="fa fa-compass align-items-center align-content-center align-self-center" style={{padding: '0px 25%',fontSize: '42px',color: '#888888'}}></i>
                          </Link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
      </div>
      
    );
  }
}

export default ThumbNail;


