// Requirements
import React, {Component} from 'react';
import './App.css';
import {Route, Link} from 'react-router-dom';

// Pages
import Home from './Pages/Home';
import AllBeers from './Pages/AllBeers';
import AddBeer from './Pages/AddBeer';
import RandomBeer from './Pages/RandomBeer';
import Profile from './Pages/Profile';

// Components
import Login from './Components/Login';
import Logout from './Components/Logout';
import SignUp from './Components/SignUp';
import ProtectedRoute from './Components/ProtectedRoute';
import BeerDetails from './Components/BeerDetails';

// Utilities
import Auth from './Utils/Auth';
const auth = new Auth();

// App
export default class App extends Component {

  state = {
    user: null
  }
  componentDidMount() {
    this.setState({
        user: auth.getUser()
    })
  }

  render() {
    return (
      <div className="App">

        <Route exact path="/" component={Home} />
        <Route exact path="/all" component={AllBeers} />
        <Route exact path="/add" component={AddBeer} />
        <Route exact path="/random" component={RandomBeer} />
        <Route exact path="/details/:id" component={BeerDetails} />
        <Route exact path="/auth/login" component={Login} />
        <Route exact path="/auth/signup" component={SignUp} />
        <ProtectedRoute 
          redirectUrl='/auth/login'
          path="/auth/logout" 
          component={Logout} />
        <ProtectedRoute 
          redirectUrl='/auth/login' 
          path="/profile" 
          component={Profile}
        />
        <footer className="App-footer"></footer>
      </div>
    );
  }
}