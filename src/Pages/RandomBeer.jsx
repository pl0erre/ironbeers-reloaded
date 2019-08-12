import React, { Component } from 'react'
import axios from 'axios';

export default class RandomBeer extends Component {
  
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     randomBeer: {},
  //     error: null
  //   }
  // }
    
  // componentDidMount() {
  //   axios.get("https://ih-beers-api.herokuapp.com/beers/random")
  //   .then(response => {
  //     this.setState({randomBeer: response.data})
  //   })
  //   .catch((error)=>{
  //     this.setState({error: error.message})
  //   })
  // }
  
  render() {
    return (
      <div className="App-RandomBeer">
        <h3>{this.state.randomBeer.name}</h3>
      </div>
    )
  }
}
