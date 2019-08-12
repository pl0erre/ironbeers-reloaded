import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../css/Home.css';

export default class Home extends Component {

  render() {

    return (

      <div className="App-Home">
        <h1>Bier - Øl - Bière</h1>
        <Link to="/all">
          <div className="img-container-1">
             See all beers!
          </div>
        </Link>
        
        <Link to="/random">
          <div className="img-container-2">
            Get random beer!
          </div>
        </Link>

        <Link to="/add">
          <div className="img-container-3">
            Add a beer!
          </div>
        </Link>
      </div>

    )

  }
}
