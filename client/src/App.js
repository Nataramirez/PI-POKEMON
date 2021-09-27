import './App.css';
import React from 'react';
import { Route } from 'react-router-dom';

import Landing from './components/landing/landing';
import Home from './components/home/home'
import NewPokemon from './components/createPokemon/createPokemon';
import PokemonDetail from './components/pokemonDetail/pokemonDetail'
import Navbar from './components/navbar/navbar'

function App() {
  return (
    <div className="App">
      <header>
      <Route exact path="/" ><Landing/></Route>
      <Route exact path="/pokemons"><Home /></Route>
      <Route exact path="/create"><NewPokemon/></Route>
      <Route exact path="/pokemons/:id" >
        <Navbar />
        <hr />
        <PokemonDetail/>
        </Route>
      </header>
    </div>
  );
}

export default App;
