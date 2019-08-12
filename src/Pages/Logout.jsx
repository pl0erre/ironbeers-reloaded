import React, { Component } from 'react';
import Auth from "../Utils/Auth";
const auth = new Auth();

export default class Logout extends Component {
  
  constructor() {
    super();
    this.state = {
      error: null
    }
  }

  componentDidMount(){
    auth.logout()
    .then(()=> {
        this.props.history.push("/");
    })
    .catch((error)=> {
        this.setState({error: error.message});
    })
  }

  render() {
    return (
      <div>
        {this.state.error ? <h1>{this.state.error}</h1> : <img src="https://media.giphy.com/media/tXL4FHPSnVJ0A/giphy.gif" alt="loading_img" />}
      </div>
    )
  }
}


