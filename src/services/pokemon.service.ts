import axios from 'axios';
import { Pokemon, PokemonReponse } from '../types/pokemon.types';

const POKE_API_URL = 'https://pokeapi.co/api/v2/pokemon';

export const PokemonService = {
    async fetchPokemonsList(offset: number, limit: number = 20): Promise<PokemonReponse[]> {
        const response = await axios.get(`${POKE_API_URL}?limit=${limit}&offset=${offset}`);
        return response.data;
    },

    async fetchPokemonDetails(pokemonList: Pokemon[]) {
        const details = await Promise.all(
            pokemonList.map((pokemon: Pokemon) =>
                axios.get(pokemon.url).then((res) => res.data)
            )
        );
        return details;
    }
};
