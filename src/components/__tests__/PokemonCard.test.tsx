import { screen, fireEvent } from '@testing-library/dom';
import { render } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import PokemonCard from '../PokemonCard.component';

describe('PokemonCard', () => {
  const mockPokemon = {
    id: 1,
    name: 'Pikachu',
    url: 'https://pokeapi.co/api/v2/pokemon/1/',
    types: [
      { type: { name: 'Electric' } }
    ]
  };

  it('renders pokemon name and type', () => {
    render(<PokemonCard pokemon={mockPokemon} onClick={() => {}} />);
    
    expect(screen.getByText('Pikachu')).toBeInTheDocument();
    expect(screen.getByText('Electric')).toBeInTheDocument();
  });

  it('calls onClick handler when clicked', () => {
    const handleClick = vi.fn();
    render(<PokemonCard pokemon={mockPokemon} onClick={handleClick} />);
    
    fireEvent.click(screen.getByText('Pikachu'));
    expect(handleClick).toHaveBeenCalledWith(mockPokemon);
  });
});
