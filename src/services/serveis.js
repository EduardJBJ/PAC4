import axios from 'axios'

function numAleatori(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

const pokeAPI = axios.create( {
    baseURL:'https://pokeapi.co/api/v2',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export const invocarPokemons = async () => {
    let tenPokemons = []
    for (let i=0; i < 10; i++) {
        const {data} = await ferConsulta(i)
        tenPokemons.push(data)
    }
    return tenPokemons
}

function ferConsulta() {
        const pokemonid = numAleatori(1, 1000);
        const resposta = pokeAPI.get(`/pokemon/${pokemonid}`);
        return resposta
}

export async function getPokemonid(id) {
    return await pokeAPI.get(`/pokemon/${id}`)
}

