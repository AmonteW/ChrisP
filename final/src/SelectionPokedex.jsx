import { useState, useEffect } from "react";

function SelectionPokedex({ selectedPokedex, P, setError, view }) {
    const [pokedexOptions, setPokedexOptions] = useState([]);

    const fetchData = async () => {
        try {
            const response = (await P.getPokedexsList()).results;
            setPokedexOptions(response);
        }
        catch (e) {
            setError(e)
        }
    }

    useEffect(() => {
        fetchData();
    }, [P, setError])

    return (
        pokedexOptions.map(pokedex =>
            <tr>
                <td>{pokedex.name}
                </td>
                <button onClick={() => selectedPokedex(pokedex.name)}>view</button>
            </tr>
        )
    )
}
export default SelectionPokedex;