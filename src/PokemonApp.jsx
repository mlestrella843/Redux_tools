import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import getPokemons from './store/slices/pokemon/thunks';


const PokemonApp = () => {

   const dispatch = useDispatch();

   useEffect(() => {
    dispatch( getPokemons() );
   }, [])
   
    return (
        <>
            <h1>Pokemon App</h1>
            <hr />

            <ul>
                <li>Hola 1</li>
                <li>Hola 1</li>
                <li>Hola 1</li>
            </ul>
        </>
    )
}
export default PokemonApp
