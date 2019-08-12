import React, { Component } from 'react'
import axios from 'axios';
import '../css/RandomBeer.css';

export default class RandomBeer extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      randomBeer: {},
      error: null
    }
  }
    
  componentDidMount() {
    axios.get("https://ih-beers-api.herokuapp.com/beers/random")
    .then(response => {
      this.setState({randomBeer: response.data})
    })
    .catch((error)=>{
      this.setState({error: error.message})
    })
  }
  
  render() {
    return (
      <div className="App-RandomBeer">
        <div className="detailsBox">
          <img src={this.state.randomBeer.image_url} alt="beer-img" />
          <div className="details-info">
            <h2>{this.state.randomBeer.name}</h2>
            <h4>{this.state.randomBeer.tagline}</h4>
            <p>{this.state.randomBeer.description}</p>
            <p>Contributed by: <span className="colored">{this.state.randomBeer.contributed_by}</span></p>
          </div>
        </div>
      </div>
    )
  }
}
