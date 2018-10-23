import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

class NewGoal extends Component {
  render() {
    return (
      <div class="card">
        <div class="card-body">
            <h5 class="text-muted card-title">Saving goal</h5>
            <h3 class="text-dark card-subtitle mb-2">Trip to Paris</h3>
            <div class="form-group">
                <section style={{padding: '20px 0px 40px 0px'}}>
                    <h5 class="text-black-50" style={{margin: '0px 0px 15px'}}>Goal name</h5><input type="text" name="goal_name" placeholder="Trip to Paris for 2" style={{width: '95%',margin: '0px 20px'}}/></section>
                <section style={{padding: '20px 0px 40px 0px'}}>
                    <h5 class="text-black-50" style={{margin: '0px 0px 15px'}}>Goal amount</h5><input type="text" name="goal_amount" placeholder="2000" style={{margin: '0px 20px'}}/></section>
                <section style={{padding: '20px 0px 40px 0px'}}>
                    <h5 class="text-black-50" style={{margin: '0px 0px 15px'}}>Target date</h5>
                    <div class="row" style={{width: '100%'}}>
                        <div class="col-sm-12" style={{width: '100%',margin: '0px 20px',color: '#808080'}}><select class="display-inline-block" style={{color: '#9e9e9e',height: '30px',margin: '5px'}}><optgroup label="Year"><option value="2018" selected="">2018</option><option value="2019">2019</option><option value="2020">2020</option><option value="2021">2021</option><option value="2022">2022</option></optgroup></select>
                            <select
                                class="display-inline-block" style={{color: '#b3b3b3',height: '30px',margin: '5px'}}>
                                <optgroup label="Month">
                                    <option value="01">January</option>
                                    <option value="02">February</option>
                                    <option value="03">March</option>
                                    <option value="04">April</option>
                                    <option value="05">May</option>
                                    <option value="06">Jun</option>
                                    <option value="07">July</option>
                                    <option value="08">August</option>
                                    <option value="09">September</option>
                                    <option value="10">October</option>
                                    <option value="11">November</option>
                                    <option value="12" selected="">December</option>
                                </optgroup>
                                </select><select class="display-inline-block" style={{color: '#b3b3b3',height: '30px',margin: '5px'}}><optgroup label="Day"><option value="01">01</option><option value="02">02</option><option value="03">03</option><option value="04">04</option><option value="05">05</option><option value="06">06</option><option value="07">07</option><option value="08">08</option><option value="09">09</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21" selected="">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option><option value="25">25</option><option value="26">26</option><option value="27">27</option><option value="28">28</option><option value="29">29</option><option value="30">30</option><option value="31">31</option></optgroup></select></div>
                    </div>
                </section>
            </div>
            <p style={{color: '#808080'}}>Who do you want to share this with?</p><select name="SharedFriends" value="shared_friends" style={{color: '#9e9e9e',margin: '0px 20px',width: '300px',height: '30px'}}><optgroup label="List of friends"><option value="" selected="">Shared (All Friends)</option><option value="friend_01">Royce</option><option value="friend_02">Jadeler</option><option value="friend_03">Leo</option><option value="friend_04">Calvin</option><option value="friend_05">Andrew</option></optgroup></select></div>
    </div>
    );
  }

  }

  export default NewGoal;