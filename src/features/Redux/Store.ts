import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import {moviesApi} from '../../services/movies';
import {personsApi} from '../../services/persons';


const store = configureStore({
    reducer: {
      [moviesApi.reducerPath]: moviesApi.reducer,
      [personsApi.reducerPath]: personsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(moviesApi.middleware).concat(personsApi.middleware),
})
export type RootState = ReturnType<typeof store.getState>
setupListeners(store.dispatch);

export default store