import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import pokemonReducer from './slices/pokemon.slice';
import rootSaga from './sagas/pokemon.saga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
