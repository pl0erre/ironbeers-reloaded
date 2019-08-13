import React, { Component } from 'react';
import '../css/Profile.css';

export default class Profile extends Component {
  render() {
    return (
      <div className="App-Profile">
        <h2>This is your Profilepage</h2>
        <img src="https://image.flaticon.com/icons/png/512/55/55089.png" alt="user-png" width="200px"/>
      </div>
    )
  }
}
