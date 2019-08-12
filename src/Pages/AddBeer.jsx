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
        description: '',
        image_url:''
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
     
      <div className="App-AddBeer">
        <div className="addBeer-container">

        <form className="addBeer-form" onSubmit={this.handleFormSubmit}>
          <div>
            <input  type="text" 
                    name="name" 
                    placeholder="Name" 
                    value={this.state.name} 
                    onChange={this.handleFormChange} />
          </div>

          <div>
            <input  type="text" 
                    name="tagline" 
                    placeholder="Tagline" 
                    value={this.state.tagline} 
                    onChange={this.handleFormChange} />
          </div>

          <div>
            <input  type="date" 
                    name="first_brewed" 
                    // placeholder="First brewed" 
                    checked={this.state.first_brewed} 
                    onChange={this.handleFormChange} />
          </div>

          <div>
            <input  type="text" 
                    name="brewers_tips" 
                    placeholder="Brewers tips" 
                    checked={this.state.first_brewed} 
                    onChange={this.handleFormChange} />
          </div>

          <div>
            <input  type="text" 
                    name="contributed_by" 
                    placeholder="Contributed by" 
                    checked={this.state.first_brewed}
                    onChange={this.handleFormChange} />
          </div>

          <div>
            <input  type="number" 
                    name="attenuation_level" 
                    placeholder="Attenuation level" 
                    checked={this.state.first_brewed} 
                    onChange={this.handleFormChange} />
          </div>

          <div>
            <textarea   rows="6" 
                        cols="60" 
                        type="text" 
                        name="description" 
                        placeholder="Description" 
                        value={this.state.description} 
                        onChange={this.handleFormChange} />
          </div>

          <div>
            <input  type="url"
                    name="image_url"
                    placeholder="Image url"
                    checked={this.state.image_url}
                    onchange={this.handleFormChange} />
          </div>

          <div>
            <input  type="submit" 
                    value="Submit" />
          </div>

          </form>
        </div>

        <Link to="/">Home</Link>
      </div>
    )
  }
}

