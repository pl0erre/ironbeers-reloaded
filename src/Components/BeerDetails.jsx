import React, { Component } from 'react';
import '../css/BeerDetails.css';
import Nav from '../Components/Nav';


export default class BeerDetails extends Component {
  
  render() {
    return (
      <>
        <Nav />
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
        </div>
      </>
    )
  }
}
