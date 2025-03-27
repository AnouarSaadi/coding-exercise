import React from 'react';
import { Pokemon } from '../types/pokemon.types';
import { X } from 'lucide-react';

interface PokemonModalProps {
  pokemon: Pokemon | null;
  onClose: () => void;
}

const PokemonModal: React.FC<PokemonModalProps> = ({ pokemon, onClose }) => {
  if (!pokemon) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="rounded-lg p-6 max-w-md w-full relative bg-green-50">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          data-testid="close-button"
        >
          <X size={24} />
        </button>

        <div className="text-center">
          <img
            src={pokemon.sprites?.front_default}
            alt={pokemon.name}
            className="w-40 h-40 mx-auto"
          />
          <h2 className="text-2xl font-bold capitalize mb-4">{pokemon.name}</h2>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold">Height</h3>
            <p>{pokemon.height?.toFixed(2) || 0}</p>
          </div>
          <div>
            <h3 className="font-semibold">Weight</h3>
            <p>{pokemon.weight?.toFixed(2) || 0}</p>
          </div>
        </div>

        <div className="mt-4">
          <h3 className="font-semibold mb-2">Abilities</h3>
          <div className="flex flex-wrap gap-2">
            {pokemon.abilities?.map((ability) => (
              <span
                key={ability.ability.name}
                className="px-2 py-1 bg-gray-100 rounded-full text-sm capitalize"
              >
                {ability.ability.name.replace('-', ' ')}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-4">
          <h3 className="font-semibold mb-2">Stats</h3>
          <div className="grid grid-cols-2 gap-4">
            {pokemon.stats?.map((stat) => (
              <div key={stat.stat.name} className="text-center p-2 bg-gray-50 rounded-lg">
                <div className="text-lg font-bold text-blue-600">
                  {stat.base_stat}
                </div>
                <div className="text-sm text-gray-600 capitalize">
                  {stat.stat.name.replace('-', ' ')}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonModal;
