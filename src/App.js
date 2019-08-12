// Requirements
import React from 'react';
import './App.css';
import {Route, Link} from 'react-router-dom';

// Pages
import Home from './Pages/Home';
import AllBeers from './Pages/AllBeers';
import AddBeer from './Pages/AddBeer';
import RandomBeer from './Pages/RandomBeer';
import Login from './Components/Login';

import BeerDetails from './Components/BeerDetails';
import SignUp from './Components/SignUp';

// App
function App() {
  return (
    <div className="App">
      <nav className="App-nav">
        <Link to="/">Home</Link>
        <ul>
          <li><Link to="/auth/login">Login</Link></li>
          <li><Link to="/auth/signup">Join us!</Link></li>
        </ul>
      </nav>
      <Route exact path="/" component={Home} />
      <Route path="/all" component={AllBeers} />
      <Route path="/add" component={AddBeer} />
      <Route path="/random" component={RandomBeer} />
      <Route path="/details/:id" component={BeerDetails} />
      <Route path="/auth/login" component={Login} />
      <Route path="/auth/signup" component={SignUp} />
      <footer className="App-footer"></footer>
    </div>
  );
}

export default App;
