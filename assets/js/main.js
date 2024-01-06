const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

const convertPokemonTypestoLi = (pokemonTypes) => {
    return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`);
};

const convertPokemonLi = (pokemon) => {
    return `
    <li class="pokemon">
        <span class="number">#${pokemon.order}</span>
        <span class="name">${pokemon.name}</span>
        <div class="details">
            <ol class="types">
                ${convertPokemonTypestoLi(pokemon.types).join('')}
            </ol>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg"
                alt="${pokemon.name} image">
        </div>
    </li>`
}


const pokemonList = document.getElementById('pokemonList');

pokeApi.getPokemons().then((pokemons = []) => {
    pokemonList.innerHTML = pokemons.map(convertPokemonLi).join('')
})
