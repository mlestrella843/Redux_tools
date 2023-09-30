import { setPokemons, startLoadingPokemons } from "./pokemonSlice"
import { pokemonApi } from "../../../api/pokemonApi";


const getPokemons = ( page = 0 ) => {

        return async( dispatch, getState ) => {
            dispatch( startLoadingPokemons() );
        //todo: Request with fetch
            // const resp= await fetch( `https://pokeapi.co/api/v2/pokemon?limit=10&offset= ${ page * 10 }`);
            // const data = await resp.json();
           // console.log( data );
        //Request with Axios
           const { data } = await pokemonApi.get(`pokemon?limit=10&offset=${ page * 10 }`);
           //console.log( data );
           dispatch( setPokemons({ pokemons: data.results, page: page + 1 }) );
        }
}
export default getPokemons
