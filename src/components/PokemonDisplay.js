const PokemonDisplay = props => {
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    if (!props.pokeCurrent) {
      return
    }
  
    return (
      <>
        <div style={{ textAlign: "center" }}>
          <h2>{capitalizeFirstLetter(props.pokeCurrent.forms[0].name)}</h2>
          <p>PV: {props.pokeCurrent.stats[0].base_stat}</p>
          <p>Attaque: {props.pokeCurrent.stats[1].base_stat}</p>
          <p>Défense: {props.pokeCurrent.stats[2].base_stat}</p>
          <p>Attaque spéciale: {props.pokeCurrent.stats[3].base_stat}</p>
          <p>Défense spéciale: {props.pokeCurrent.stats[4].base_stat}</p>
          <img src={props.pokeCurrent.sprites.front_default}></img>
        </div>
      </>
    );
  };
  
  export default PokemonDisplay;