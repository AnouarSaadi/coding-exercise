export interface Pokemon {
  id: number;
  name: string;
  url: string;
  sprites?: {
    front_default: string;
  };
  types?: {
    type: {
      name: string;
    };
  }[];
  height?: number;
  weight?: number;
  abilities?: {
    ability: {
      name: string;
    };
  }[];
  stats?: {
    base_stat: number;
    stat: {
      name: string;
    };
  }[];
}

export interface PokemonState {
  pokemons: Pokemon[];
  selectedPokemon: Pokemon | null;
  loading: boolean;
  error: string | null;
  offset: number;
}


export interface PokemonReponse {
  count: number;
  next: string;
  previous: string;
  results: {
    name: string;
    url: string;
  }[];
}