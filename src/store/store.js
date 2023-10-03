import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from './slices/counter/counterSlice';
import { pokemonSlice } from './slices/pokemon/pokemonSlice';
import { todosApis } from './apis/todosApis';

export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        pokemons: pokemonSlice.reducer,
        
        [todosApis.reducerPath]: todosApis.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat( todosApis.middleware ),

})