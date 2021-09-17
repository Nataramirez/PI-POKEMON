import './App.css';
import React from 'react';
import { Route } from 'react-router-dom';

import Landing from './components/landing/landing';
import Home from './components/home/home'
import NewPokemon from './components/createPokemon/createPokemon';

function App() {
  return (
    <div className="App">
      <header>
      <Route exact path="/" ><Landing/></Route>
      <Route path="/pokemons"><Home /></Route>
      <Route path="/create"><NewPokemon/></Route>
      </header>
    </div>
  );
}

export default App;
