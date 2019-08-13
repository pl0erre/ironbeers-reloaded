import React, { Component } from 'react';
import '../css/Login.css';
import Auth from "../Utils/Auth";
const auth = new Auth();

export default class Login extends Component {
  
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      error: null
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
  }

  handleFormChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleFormSubmit(e) {
    e.preventDefault()
    auth.login(this.state.username, this.state.password)
    .then(() => {
      debugger
      this.setState({ error: "" });
      this.props.history.push("/");
    })
    .catch((err) => {
      debugger
      this.setState({ error: err.message });
    });
  }

  render() {
    return (
      <div className="App-Login">
        <div className="login-container">
          <h2>Login</h2>
          <form className="login-form" onSubmit={this.handleFormSubmit}>
            <input  type="text" 
                    name="username" 
                    placeholder="Username"
                    value={this.state.username}
                    onChange={this.handleFormChange} />
            <input  type="password"
                    name="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.handleFormChange} />
            <input  className="submitBtn" type="submit" />
          </form>
        </div>
        
      </div>
    )
  }
}
