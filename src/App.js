import React, { useState, useEffect } from 'react';
import Button from './components/Button';
import PokeCard from './components/PokeCard.js';
import PokemonDisplay from './components/PokemonDisplay.js';

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
      <div>
        <h1 style={{ textAlign: "center", fontSize: "60px", color: "#F2CB05", fontFamily: "Pokemon Solid", margin: 0, textShadow: "10px  10px  2px  blue" }}>Poke battle !</h1>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <div style={{ background: "rgba(0, 0, 0, 0.7)", width: "300px", height: "450px", border: "2px", borderColor: "black", marginTop: "100px"}}>
            <h1 style={{ textAlign: "center" }}>Ready player 1</h1>

            <div style={{ textAlign: "center" }}>
              <PokeCard pokemons={pokeAll} number={1} setPokeCurrent={setPokeCurrent} setPokeCurrentTwo={setPokeCurrentTwo}></PokeCard>
            </div>

            <div>
              <PokemonDisplay pokeCurrent={pokeCurrent} />
            </div>
          </div>

          <div style={{ position: "absolute", marginTop: "1%", display: "flex", flexDirection: "column", gap: "20px"}}>
            <div style={{display: "flex", justifyContent: "center"}}> 
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
              <img src="https://art.pixilart.com/3d21237dd0410ba.png" 
                   width={450}/>
            </div>
          </div>
          <div style={{ background: "rgba(0, 0, 0, 0.7)", width: "300px", height: "450px", border: "2px", borderColor: "black", marginTop: "100px" }}>
            <h1 style={{ textAlign: "center" }}>Ready player 2</h1>

            <div style={{ textAlign: "center" }}>
              <PokeCard pokemons={pokeAll} number={2} setPokeCurrent={setPokeCurrent} setPokeCurrentTwo={setPokeCurrentTwo}></PokeCard>
            </div>

            <div>
              <PokemonDisplay pokeCurrent={pokeCurrentTwo} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;