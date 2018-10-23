import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';


class ThumbNail extends Component {
  render() {
    return (
      <div style={{backgroundColor: '#dedede'}}>
        <div className="table-responsive table-bordered">
            <table className="table table-bordered table-sm">
                <tbody>
                    <tr>
                        <td className="justify-content-center align-items-center align-content-center align-self-center" style={{width: '20%'}}>
                          <Link to="/landing">
                            <i className="fa fa-home align-items-center align-content-center align-self-center" style={{padding: '0px 25%',fontSize: '42px',color: '#888888'}}></i>
                          </Link>
                        </td>
                        <td style={{width: '20%'}}>
                          <Link to="/financialGoals">
                            <i className="fa fa-user align-items-center align-content-center align-self-center" style={{padding: '0px 25%',fontSize: '42px',color: '#888888'}}></i>
                          </Link>
                        </td>
                        <td style={{width: '20%'}}>
                          <Link to="/friends">
                            <i className="fa fa-group align-items-center align-content-center align-self-center" style={{padding: '0px 0px 0px 15%',fontSize: '42px', color: 'rgb(136,136,136)'}}></i>
                            <i className="fa fa-dot-circle-o d-table-cell float-right" style={{padding: '0px 20px 0px 0px', color: '#fe0707'}}></i>
                          </Link>
                        </td>
                        <td style={{width: '20%'}}>
                          <Link to="/accounts">
                            <i className="fa fa-credit-card align-items-center align-content-center align-self-center" style={{padding: '0px 25%',fontSize: '42px',color: '#888888'}}></i>
                          </Link></td>
                        <td style={{width: '20%'}}>
                          <Link to="/goal">
                            <i className="fa fa-compass align-items-center align-content-center align-self-center" style={{padding: '0px 25%',fontSize: '42px',color: '#888888'}}></i>
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


