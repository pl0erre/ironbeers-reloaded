// Requirements
import React, {Component} from 'react';
import './App.css';
import {Route, Link} from 'react-router-dom';

// Font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBeer } from '@fortawesome/free-solid-svg-icons';

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
        <nav className="App-nav">
          <Link to="/"><FontAwesomeIcon icon={faBeer} /></Link>
          <ul>
            {this.state.user
              ? 
              <>
                <li><Link to="/auth/logout">Logout</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><span className="user-welcome">Hello {this.state.user.username}</span></li>
              </>
              :
              <>
                <li><Link to="/auth/login">Login</Link></li>
                <li><Link to="/auth/signup"><span  className="nav-join">Join us!</span></Link></li>
              </>
            }
          </ul>
        </nav>
        <Route exact path="/" component={Home} />
        <Route exact path="/all" component={AllBeers} />
        <Route exact path="/add" component={AddBeer} />
        <Route exact path="/random" component={RandomBeer} />
        <Route exact path="/details/:id" component={BeerDetails} />
        <Route exact path="/auth/login" component={Login} />
        <Route exact path="/auth/signup" component={SignUp} />
        <Route exact path="/auth/logout" component={Logout} />
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