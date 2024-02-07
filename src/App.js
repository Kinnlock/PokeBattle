import React, { useState, useEffect } from 'react';
import Button from './components/Button';
import PokeCard from './components/PokeCard.js';

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


  //Fait le combat
  const battle = () => {

    if (pokeCurrent && pokeCurrentTwo) {

      if (pokeCurrent.stats[1].base_stat > pokeCurrentTwo.stats[1].base_stat) {
        alert(pokeCurrent.forms[0].name)
      }

      if (pokeCurrent.stats[1].base_stat < pokeCurrentTwo.stats[1].base_stat) {
        alert(pokeCurrentTwo.forms[0].name)
      }
    }

    else {
      alert("Choisissez votre pokemon !")
    }
  }

  //bref du jsx
  return (
    <>

      <h1 style={{ textAlign: "center", fontSize: "60px", color: "#F2CB05", fontFamily: "Pokemon Solid", margin: 0, textShadow: "10px  10px  2px  blue" }}>Poke battle !</h1>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div style={{ background: "rgba(0, 0, 0, 0.4)", width: "300px", height: "450px", border: "2px", borderColor: "black"}}>
          <h1 style={{ textAlign: "center" }}>Ready player 1</h1>

          <div style={{textAlign: "center" }}>
            <PokeCard pokemons={pokeAll} number={1} setPokeCurrent={setPokeCurrent} setPokeCurrentTwo={setPokeCurrentTwo}></PokeCard>
          </div>

          {pokeCurrent && (
            <div style={{ textAlign: "center" }}>
              <h2>{pokeCurrent.forms[0].name}</h2>
              <p>HP: {pokeCurrent.stats[0].base_stat}</p>
              <p>Attaque: {pokeCurrent.stats[1].base_stat}</p>
              <p>Defense: {pokeCurrent.stats[2].base_stat}</p>
              <p>Attaque spécial: {pokeCurrent.stats[3].base_stat}</p>
              <p>Defense spécial: {pokeCurrent.stats[4].base_stat}</p>
              <p>Vitesse: {pokeCurrent.stats[5].base_stat}</p>
            </div>
          )}
        </div>
        <div style={{ position: "absolute", marginTop: "10%" }}>
          <Button backgroundColor="#F2CB05"
            fontFamily="Pokemon Solid"
            label="FIGHT !"
            onClick={battle}
            width="100px"
            height="60px"
            color="blue"
            borderColor="blue">
          </Button>
        </div>
        <div>
          <h1>Ready player 2</h1>

          <PokeCard pokemons={pokeAll} number={2} setPokeCurrent={setPokeCurrent} setPokeCurrentTwo={setPokeCurrentTwo}></PokeCard>

          {pokeCurrentTwo && (
            <div>
              <h2>{pokeCurrentTwo.forms[0].name}</h2>
              <p>HP: {pokeCurrentTwo.stats[0].base_stat}</p>
              <p>Attaque: {pokeCurrentTwo.stats[1].base_stat}</p>
              <p>Defense: {pokeCurrentTwo.stats[2].base_stat}</p>
              <p>Attaque spécial: {pokeCurrentTwo.stats[3].base_stat}</p>
              <p>Defense spécial: {pokeCurrentTwo.stats[4].base_stat}</p>
              <p>Vitesse: {pokeCurrentTwo.stats[5].base_stat}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default App;