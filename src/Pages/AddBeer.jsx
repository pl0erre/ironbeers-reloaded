import React, { Component } from 'react';
import '../css/AddBeer.css';
import qs from "querystring";
import axios from "axios";
import Nav from "../Components/Nav";


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
      url: `${process.env.REACT_APP_API}/beers/new`
    })
    .then((res)=> {
        this.props.history.push('/all')
    })
    .catch((err)=> {
        console.log(err)
    })
  }

  render() {
    debugger
    return (
      <>
        <Nav />
        <div className="App-AddBeer">
          <div className="addBeer-container">
          <h2>Add a beer to th collection!</h2>
          <form className="addBeer-form" onSubmit={this.handleFormSubmit}>
              <input  type="text" 
                      name="name" 
                      placeholder="Name" 
                      value={this.state.name} 
                      onChange={this.handleFormChange} />

              <input  type="text" 
                      name="tagline" 
                      placeholder="Tagline" 
                      value={this.state.tagline} 
                      onChange={this.handleFormChange} />

              <input  type="date" 
                      name="first_brewed"
                      checked={this.state.first_brewed} 
                      onChange={this.handleFormChange} />

              <input  type="text" 
                      name="brewers_tips" 
                      placeholder="Brewers tips" 
                      checked={this.state.first_brewed} 
                      onChange={this.handleFormChange} />

              <input  type="text" 
                      name="contributed_by" 
                      placeholder="Contributed by" 
                      checked={this.state.first_brewed}
                      onChange={this.handleFormChange} />

              <input  type="number" 
                      name="attenuation_level" 
                      placeholder="Attenuation level" 
                      checked={this.state.first_brewed} 
                      onChange={this.handleFormChange} />

              <textarea   rows="6" 
                          cols="60" 
                          type="text" 
                          name="description" 
                          placeholder="Description" 
                          value={this.state.description} 
                          onChange={this.handleFormChange} />

              <input  type="submit" 
                      value="Submit"
                      className="submitBtn" />

            </form>
          </div>
        </div>
      </>
    )
  }
}

