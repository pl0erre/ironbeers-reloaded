import React, { Component } from 'react';
import '../css/AddBeer.css';
import {Link} from 'react-router-dom';

export default class AddBeer extends Component {
  render() {
    return (
      <div className="App-AddBeer">
        <Link to="/">Home</Link>
      </div>
    )
  }
}
