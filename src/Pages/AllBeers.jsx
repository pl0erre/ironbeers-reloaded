import React, { Component } from 'react'
import '../css/AllBeers.css';
import {Link} from 'react-router-dom';
import axios from 'axios'
import BeerItem from '../Components/BeerItem'

export default class AllBeers extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      allBeers: [],
      error: null
    }
  }
    
  componentDidMount() {
    axios.get("https://ih-beers-api.herokuapp.com/beers")
    .then(response => {
      this.setState({allBeers: response.data})
    })
    .catch((error)=>{
      this.setState({error: error.message})
    })
  }

  render() {
    
    return (
      <div className="App-AllBeers">
        <h2>Checkout all our beers!</h2>
        <div className="beerBox-wrapper">
          {this.state.allBeers.map((beer) =>
            <BeerItem beer={beer}/>
          )}
        </div>
        <Link to="/">Home</Link>
      </div>   
    )
  }
}



// {props.countriesArr.map((country)=> {

//   return(

//     <div className="Country-container">

//       <Link to={`/details/${country.cca3}`}>
//         <div className="single-country" key={country.id}>
//           <p>{country.flag.normalize()}</p>
//           <h4>{country.name.common}</h4>
//         </div>
//       </Link>
      
//     </div>
//   )

// })
// }
