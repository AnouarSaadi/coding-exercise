import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Pokemon, PokemonState } from '../../types/pokemon.types';

const initialState: PokemonState = {
  pokemons: [],
  selectedPokemon: null,
  loading: false,
  error: null,
  offset: 0,
};

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    fetchPokemonsRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchPokemonsSuccess: (state, action: PayloadAction<Pokemon[]>) => {
      state.pokemons = [...state.pokemons, ...action.payload];
      state.loading = false;
      state.offset = state.offset + 20;
    },
    fetchPokemonsFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    setSelectedPokemon: (state, action: PayloadAction<Pokemon | null>) => {
      state.selectedPokemon = action.payload;
    },
  },
});

export const {
  fetchPokemonsRequest,
  fetchPokemonsSuccess,
  fetchPokemonsFailure,
  setSelectedPokemon,
} = pokemonSlice.actions;

export default pokemonSlice.reducer;