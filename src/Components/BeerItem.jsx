import React, { Component } from 'react';
import '../css/BeerItem.css';
import {Link} from 'react-router-dom';

export default class BeerItem extends Component {

  render() {
    return (
      <div className="beerBox">
        <h3>{this.props.beer.name}</h3>
        <h4>{this.props.beer.tagline}</h4>
        <img src={this.props.beer.image_url} alt="beer-img" />
        <p>{this.props.beer.contributed_by}</p>
        <Link 
          beers={this.props.beers} 
          to={{ pathname: "/details/" + this.props.beer._id, 
                state: {beer: this.props.beer}}}>
          Details
        </Link>
      </div>
    )

  }

}
