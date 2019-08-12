import React, { Component } from "react";
import "../css/SignUp.css";

import Auth from "../Utils/Auth";
const auth = new Auth();

export default class SignUp extends Component {
  
  constructor() {
    super();
    this.state = {
      user: {
        username: "",
        firstname: "",
        lastname: "",
        password: "",
        email: ""
      },
      error: null
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
  }

  handleFormSubmit = event => {
    debugger
    event.preventDefault();
    auth
      .signup(this.state.user)
      .then(() => {
        debugger
        this.setState({ error: "" });
        this.props.history.push("/");
      })
      .catch((err) => {
        debugger
        this.setState({ error: err.message });
      });
  };

  handleFormChange(event) {
    let user = this.state.user
    user[event.target.name]= event.target.value
    this.setState({
      user: user
    });
  }

  render() {
    return (
      <div className="App-SignUp">
        <div className="signup-container">
          <h2>Be(er) part of the community</h2>

          <form className="signup-form" onSubmit={this.handleFormSubmit}>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={this.state.user.username}
              onChange={this.handleFormChange}
            />

            <input
              type="text"
              name="firstname"
              placeholder="Firstname"
              value={this.state.user.firstname}
              onChange={this.handleFormChange}
            />

            <input
              type="text"
              name="lastname"
              placeholder="Lastname"
              value={this.state.user.lastname}
              onChange={this.handleFormChange}
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={this.state.user.password}
              onChange={this.handleFormChange}
            />

            <input
              type="email"
              name="email"
              placeholder="E-Mail"
              value={this.state.user.email}
              onChange={this.handleFormChange}
            />
            <input className="submit-btn" type="submit" />
          </form>
        </div>
      </div>
    );
  }
}
