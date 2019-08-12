import React, { Component } from 'react';
import '../css/BeerDetails.css'
import {Link} from 'react-router-dom';

export default class BeerDetails extends Component {
  
  render() {
    debugger
    return (
      <div className="App-BeerDetails">
        <div className="detailsBox">
          <img src={this.props.location.state.beer.image_url} alt="beer-img" />
          <div className="details-info">
            <h2>{this.props.location.state.beer.name}</h2>
            <h4>{this.props.location.state.beer.tagline}</h4>
            <p>{this.props.location.state.beer.description}</p>
            <p>Contributed by: <span className="colored">{this.props.location.state.beer.contributed_by}</span></p>
          </div>
        </div>
        <Link to="/">Home</Link>
      </div>
    )
  }
}
