const PokeCard = props => {

  const handleSelectChange = async (number, event) => {
    const selectedPokemonName = event.target.value;
    const selectedPokemon = props.pokemons.find(poke => poke.name === selectedPokemonName);
    if (selectedPokemon) {
      try {
        const response = await fetch(selectedPokemon.url);
        const pokemonData = await response.json();
        if (props.number === 1) {
          props.setPokeCurrent(pokemonData);
        } else if (props.number === 2) {
          props.setPokeCurrentTwo(pokemonData);
        }
        console.log(pokemonData.form)
      } catch (error) {
        console.error('Pokemon actuel non récupéré', error);
      }
    }
  };

  return (
    <>
      <select onChange={(event) => handleSelectChange(props.number, event)}>
        <option value="">Choose your Pokemon</option>
        {props.pokemons.map((poke) => (
          <option key={poke.name} value={poke.name}>{poke.name}</option>
        ))}
      </select>
    </>
  )
}

export default PokeCard;