import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Loader2 } from 'lucide-react';
import { RootState } from '../store/store';
import { fetchPokemonsRequest, setSelectedPokemon } from '../store/slices/pokemon.slice';
import PokemonCard from './PokemonCard.component';
import { Pokemon } from '../types/pokemon.types';

const PokemonList: React.FC = () => {
  const dispatch = useDispatch();
  const { pokemons, loading } = useSelector((state: RootState) => state.pokemon);

  const loadMore = () => {
    dispatch(fetchPokemonsRequest());
  };

  const handlePokemonClick = (pokemon: Pokemon) => {
    dispatch(setSelectedPokemon(pokemon));
  };

  if (loading && pokemons.length === 0) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="animate-spin" size={48} />
      </div>
    );
  }

  return (
    <InfiniteScroll
      dataLength={pokemons.length}
      next={loadMore}
      hasMore={true}
      loader={
        <div className="flex justify-center p-4">
          <Loader2 className="animate-spin" size={24} />
        </div>
      }
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {pokemons.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
            onClick={handlePokemonClick}
          />
        ))}
      </div>
    </InfiniteScroll>
  );
};

export default PokemonList;