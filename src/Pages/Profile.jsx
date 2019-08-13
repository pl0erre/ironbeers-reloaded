import React, { Component } from 'react';
import '../css/Profile.css';
import Nav from '../Components/Nav';

import Auth from '../Utils/Auth';
const auth = new Auth();

export default class Profile extends Component {
  
  render() {
    let user = auth.getUser();
    return (
      <>
        <Nav />
        <div className="App-Profile">
          <div className="user-container">
            <img src="https://image.flaticon.com/icons/png/512/55/55089.png" alt="user-png" width="200px"/>
            <div className='user-info'>
              <h2>Hey {user.username}</h2>
              <p>Fistname: {user.firstname}</p>
              <p>Lastname: {user.lastname}</p>
              <p>E-Mail: {user.email}</p>
            </div>
          </div>
          
        </div>
      </>
    )
  }
}
