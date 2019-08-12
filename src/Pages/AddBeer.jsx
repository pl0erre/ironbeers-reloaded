import React, { Component } from 'react';
import '../css/AddBeer.css';
import {Link} from 'react-router-dom';
import qs from "querystring";
import axios from "axios";

export default class AddBeer extends Component {

  constructor(props) {
      super(props);
      this.state = { 
        name: '',
        tagline: '',
        first_brewed: '',
        brewers_tips: '',
        contributed_by: '',
        attenuation_level: '',
        description: ''
      }

      this.handleFormSubmit = this.handleFormSubmit.bind(this);
      this.handleFormChange = this.handleFormChange.bind(this);
  }

  handleFormChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleFormSubmit(event) {
    event.preventDefault(); //! deactivates default behaviour of html forms

    axios({
      method: "POST",
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      data:  qs.stringify(this.state), //! don't send data in json format => cors error
      url: `https://ih-beers-api.herokuapp.com/beers/new`
    })
    .then((res)=> {
        this.props.history.push('/all')
    })
    .catch((err)=> {
        console.log(err)
    })
  }


  render() {
    return (
      <div className="App-AddBeer">
        <div className="addBeer-container">

        <form className="addBeer-form">
          <div>
            <input type="text" name="name" placeholder="Name" value={this.state.name} onChange={this.handleFormChange}/>
          </div>

          <div>
            <input type="text" name="tagline" placeholder="Tagline" value={this.state.tagline} onChange={this.handleFormChange}/>
          </div>

          <div>
            <input type="text" name="first_brewed" placeholder="First brewed" value={this.state.first_brewed} onChange={this.handleFormChange}/>
          </div>

          <div>
            <input type="text" name="brewers_tips" placeholder="Brewers tips" value={this.state.brewers_tips} onChange={this.handleFormChange}/>
          </div>

          <div>
            <input type="text" name="contributed_by" placeholder="Contributed by" value={this.state.contributed_by} onChange={this.handleFormChange}/>
          </div>

          <div>
            <input type="text" name="attenuation_level" placeholder="Attenuation level" value={this.state.attenuation_level} onChange={this.handleFormChange}/>
          </div>

          <div>
            <textarea rows="6" cols="60" type="text" name="description" placeholder="Description" value={this.state.description} onChange={this.handleFormChange}/>
          </div>

          <div>
            <input className="submit-btn" type="submit" value="Submit" />
          </div>

          </form>
        </div>

        <Link to="/">Home</Link>
      </div>
    )
  }
}