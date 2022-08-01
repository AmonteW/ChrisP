import SelectionPokedex from './SelectionPokedex';
import SelectionPokemon from './SelectionPokemon';
import { Pokedex } from 'pokeapi-js-wrapper';
import React, { useState, useEffect } from 'react';


function App() {
  let view;
  const [pokedexs, selectedPokedex] = useState(null);
  const [pokemon, selectedPokemon] = useState(null);
  const [hasError, setError] = useState(null);
  const P = new Pokedex()
  return (
    <div>
      <h1>{pokedexs}</h1>
      <SelectionPokedex pokedexs={selectedPokedex} P={P} setError={setError}/>
    </div>
  );
}

export default App;

