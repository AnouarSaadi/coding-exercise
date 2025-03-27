import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store/store';
import { fetchPokemonsRequest, setSelectedPokemon } from './store/slices/pokemon.slice';
import PokemonList from './components/PokemonList.component';
import PokemonModal from './components/PokemonModal.component';

function App() {
  const dispatch = useDispatch();
  const { selectedPokemon } = useSelector((state: RootState) => state.pokemon);

  useEffect(() => {
    dispatch(fetchPokemonsRequest());
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-sky-800 p-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-yellow-100">Poké API (Coding Exercise)</h1>
      <PokemonList />
      <PokemonModal
        pokemon={selectedPokemon}
        onClose={() => dispatch(setSelectedPokemon(null))}
      />
    </div>
  );
}

export default App;