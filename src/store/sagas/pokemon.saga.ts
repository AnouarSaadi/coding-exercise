import { call, put, takeLatest, select } from 'redux-saga/effects';
import { 
  fetchPokemonsFailure,
  fetchPokemonsRequest,
  fetchPokemonsSuccess 
} from '../slices/pokemon.slice';
import { RootState } from '../store';
import { PokemonService } from '../../services/pokemon.service';

const getOffset = (state: RootState) => state.pokemon.offset;

function* fetchPokemonsSaga() {
  try {
    const offset: number = yield select(getOffset);
    
    const pokemonList = yield call(PokemonService.fetchPokemonsList, offset);
    
    const pokemonDetails = yield call(
      PokemonService.fetchPokemonDetails, 
      pokemonList.results
    );
    
    yield put(fetchPokemonsSuccess(pokemonDetails));
  } catch (error: any) {
    yield put(fetchPokemonsFailure(error.message));
  }
}

export default function* rootSaga() {
  yield takeLatest(fetchPokemonsRequest.type, fetchPokemonsSaga);
}
