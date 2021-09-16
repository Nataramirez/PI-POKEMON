import './App.css';
import React from 'react';
import { Route } from 'react-router-dom';

import Landing from './components/landing/landing';
import Home from './components/home/home'

function App() {
  return (
    <div className="App">
      <Route exact path="/" ><Landing/></Route>
      <Route exact path="/home"><Home /></Route>
    </div>
  );
}

export default App;
