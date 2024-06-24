const poke_container = document.getElementById("poke-container");
// console.log(poke_container);
const pokemon_count = 150;
const fetchPokemons = async () => {
  for (let id = 1; id <= pokemon_count; id++) {
    //we are gonna call funct that makes api call
    await getPokemon(id);
  }
};
const getPokemon = async (id) => {
  try {
    //api call to the pokeApi
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const response = await fetch(url);
    //this is my data
    const pokemon = await response.json();
    // console.log(pokemon);
    //call our pokemon objet and use it inside our function createPokemonCard
    createPokemonCard(pokemon);
  } catch (error) {
    console.log(error);
  }
};
const createPokemonCard = (pokemon) => {
  const pokemonEl = document.createElement("div");
  //here we added the css create we used earlier
  pokemonEl.classList.add("pokemon");
  console.log(pokemonEl);
  const pokemonInnerHtml = `<div class="img-container">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png"
            alt=""
          />
        </div>
        <div class="info">
          <span class="number">#${pokemon.id}</span>
          <h3 class="name">${pokemon.name}</h3>
          <small class="type">Type <span>${pokemon.types[0].type.name}</span></small>
        </div>`;
  pokemonEl.innerHTML = pokemonInnerHtml;
  poke_container.appendChild(pokemonEl);
};
fetchPokemons();
{
  /* <div class="pokemon">
        <div class="img-container">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
            alt=""
          />
        </div>
        <div class="info">
          <span class="number">#001</span>
          <h3 class="name">Balbasaur</h3>
          <small class="type">Type <span>grass</span></small>
        </div>
      </div> */
}
