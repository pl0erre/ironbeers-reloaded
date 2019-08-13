import React, { Component } from 'react'
import {Link} from "react-router-dom";
import "../css/Nav.css";

// Font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBeer } from '@fortawesome/free-solid-svg-icons';

import Auth from "../Utils/Auth";
const auth = new Auth();


export default class Nav extends Component {
  render() {
    let user = auth.getUser();
    return (
      <nav className="App-nav">
        <Link to="/"><FontAwesomeIcon icon={faBeer} /></Link>
        <ul>
          {user
            ? 
            <>
              <li><Link to="/auth/logout">Logout</Link></li>
              <li><Link to="/profile">Profile</Link></li>
              <li><span className="user-welcome">Hello {user.username}</span></li>
            </>
            :
            <>
              <li><Link to="/auth/login">Login</Link></li>
              <li><Link to="/auth/signup"><span  className="nav-join">Join us!</span></Link></li>
            </>
          }
        </ul>
      </nav>
    )
  }
}
