import React from 'react';
import { Pokemon } from '../types/pokemon.types';

interface PokemonCardProps {
  pokemon: Pokemon;
  onClick: (pokemon: Pokemon) => void;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon, onClick }) => {
  return (
    <div
      className="bg-white rounded-lg shadow-lg p-4 cursor-pointer transform transition-transform hover:scale-105"
      onClick={() => onClick(pokemon)}
      data-testid="pokemon-card"
    >
      <img
        src={pokemon.sprites?.front_default}
        alt={pokemon.name}
        className="w-32 h-32 mx-auto"
      />
      <h2 className="text-xl font-bold text-center capitalize mt-2">
        {pokemon.name}
      </h2>
      <div className="flex justify-center gap-2 mt-2">
        {pokemon.types?.map((type, index) => (
          <span
            key={index}
            className="px-2 py-1 rounded-full text-sm text-white bg-blue-500 capitalize"
          >
            {type.type.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PokemonCard;
