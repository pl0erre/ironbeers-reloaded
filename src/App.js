// Requirements
import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';

// Pages
import Home from './Pages/Home';
import AllBeers from './Pages/AllBeers';
import AddBeer from './Pages/AddBeer';
import RandomBeer from './Pages/RandomBeer';

import BeerDetails from './Components/BeerDetails';

// App
function App() {
  return (
    <div className="App">
      <nav className="App-nav"></nav>
      <Route exact path="/" component={Home} />
      <Route path="/all" component={AllBeers} />
      <Route path="/add" component={AddBeer} />
      <Route path="/random" component={RandomBeer} />
      <Route path="/details/:id" component={BeerDetails} />
      <footer className="App-footer"></footer>
    </div>
  );
}

export default App;
