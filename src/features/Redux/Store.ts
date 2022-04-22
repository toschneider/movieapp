import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import {moviesApi} from '../../services/movies';


const store = configureStore({
    reducer: {
      [moviesApi.reducerPath]: moviesApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(moviesApi.middleware),
})
export type RootState = ReturnType<typeof store.getState>
setupListeners(store.dispatch);

export default store