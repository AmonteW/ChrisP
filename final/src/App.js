import SelectionPokedex from './SelectionPokedex';
import { Pokedex } from 'pokeapi-js-wrapper';
import React, {useState} from 'react'

const P = new Pokedex.Pokedex()
const [pokedex, setPokedex] = (null);
P.resource([
  "api/v2/pokedex",
]).then( response => {
  console.log(response)
})
let name = Pokedex.name;
function App() {
console.log("me maw")
return (
  <div>
    <SelectionPokedex pokedex={pokedex}></SelectionPokedex>
    <button>{name}</button>
    </div>
);
}

export default App;
