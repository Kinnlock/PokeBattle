import React, { useState, useEffect } from 'react';


//States
const App = () => {
  const [pokeAll, setPokeAll] = useState([]);
  const [pokeCurrent, setPokeCurrent] = useState(null);
  const [pokeCurrentTwo, setPokeCurrentTwo] = useState(null);


//Récupère tout les pokémons 
  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=255');
        const allpokemon = await response.json();
        setPokeAll(allpokemon.results);
      } catch (error) {
        console.error('Pokemons non récupérés', error);
      }
    };
    fetchPokemon();
  }, []);

  //Choisi un pokémon, si number = 1 cela choisi le premier et si number = 2 ...
  const handleSelectChange = async (number, event) => {
    const selectedPokemonName = event.target.value;
    const selectedPokemon = pokeAll.find(poke => poke.name === selectedPokemonName);
    if (selectedPokemon) {
      try {
        const response = await fetch(selectedPokemon.url);
        const pokemonData = await response.json();
        if (number === 1) {
          setPokeCurrent(pokemonData);
        } else if (number === 2) {
          setPokeCurrentTwo(pokemonData);
        }
        console.log(pokemonData)
      } catch (error) {
        console.error('Pokemon actuel non récupéré', error);
      }
    }
  };


  //Fait le combat
  const battle = () => {

    if(pokeCurrent && pokeCurrentTwo){

      if(pokeCurrent.stats[1].base_stat > pokeCurrentTwo.stats[1].base_stat){

        alert(pokeCurrent.forms[0].name)

      }

      if(pokeCurrent.stats[1].base_stat < pokeCurrentTwo.stats[1].base_stat){

        alert(pokeCurrentTwo.forms[0].name)

      }
    }

  }


  //bref du jsx
  return (
    <>
      <h1 style={{textAlign: "center", fontSize: "80px", color: "#F2CB05", fontFamily: "Pokemon Solid", margin: "0px", borderColor: "#3671BF", borderWidth: 5}}>Poke battle !</h1>

      <h1>Premier Pokemon</h1>
      <select onChange={(event) => handleSelectChange(1, event)}>
        <option value="">Select a Pokemon</option>
        {pokeAll.map((poke) => (
          <option key={poke.name} value={poke.name}>{poke.name}</option>
        ))}
      </select>
      <h1>Deuxième Pokemon</h1>
      <select onChange={(event) => handleSelectChange(2, event)}>
        <option value="">Select a Pokemon</option>
        {pokeAll.map((poke) => (
          <option key={poke.name} value={poke.name}>{poke.name}</option>
        ))}
      </select>
      {pokeCurrent && (
        <div>
          <h2>Premier Pokemon</h2>
          <p>HP: {pokeCurrent.stats[0].base_stat}</p>
          <p>Attaque: {pokeCurrent.stats[1].base_stat}</p>
          <p>Defense: {pokeCurrent.stats[2].base_stat}</p>
          <p>Attaque spécial: {pokeCurrent.stats[3].base_stat}</p>
          <p>Defense spécial: {pokeCurrent.stats[4].base_stat}</p>
          <p>Vitesse: {pokeCurrent.stats[5].base_stat}</p>
        </div>
      )}
      {pokeCurrentTwo && (
        <div>
          <h2>Deuxième Pokemon</h2>
          <p>HP: {pokeCurrentTwo.stats[0].base_stat}</p>
          <p>Attaque: {pokeCurrentTwo.stats[1].base_stat}</p>
          <p>Defense: {pokeCurrentTwo.stats[2].base_stat}</p>
          <p>Attaque spécial: {pokeCurrentTwo.stats[3].base_stat}</p>
          <p>Defense spécial: {pokeCurrentTwo.stats[4].base_stat}</p>
          <p>Vitesse: {pokeCurrentTwo.stats[5].base_stat}</p>
        </div>
      )}

      <button onClick={battle}>Combat</button>
    </>
  );
};

export default App;