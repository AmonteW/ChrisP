import { Pokedex } from "pokeapi-js-wrapper";
import { useState, useEffect } from "react";
function SelectionPokemon({ selectedPokemon, P, setError }) {
    const [pokemonOptions, setPokemonOptions] = useState([]);
    const fetchData = async () => {
        try {
            const response = (await P.getPokedexByName(Pokedex)).pokemon_entries;
            setPokemonOptions(response);
        }
        catch (e) {
            setError(e)
        }
    }

    useEffect(() => {
        fetchData();
    }, [P, setError])

    return (
    
        pokemonOptions.map(pokemon =>
            <tr>
                <td>{pokemon.name}
                </td>
                <button onClick={() => selectedPokemon(pokemon_species.name)}>view</button>
            </tr>
        )
    )
}
export default SelectionPokemon;