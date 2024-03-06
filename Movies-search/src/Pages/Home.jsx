import React from 'react'
import { Component } from 'react';
import axios from "axios";
import { useState } from 'react';
import Movies from '../components/Movies';

export default function Home() {
    const[movieSearchInput,setMovieSearchInput]=useState("");
    const [movies,setMovies]=useState([]);
    const [error,setError]=useState(null);
    async function handleSubmit(e)
    {
        e.preventDefault();

        const endpoint=`http://www.omdbapi.com/?apikey=e48ac0de&s=${movieSearchInput}`;

        const response= await axios.get(endpoint);
        // console.log(response.data);
        try {
            console.log(movieSearchInput);
            const {Search,Response,Error}=response.data
            if(Response === True)
            {
                setMovies(Search);
            }
            else{
                setError(Error);
            }
        
        } catch (error) {
            
        }
    }

  return (
    <div>
        <form onSubmit= {handleSubmit}>
            <input type='text'id='movie-search' name='movie-search' value={movieSearchInput}
                onChange={(e)=>{
                    setMovieSearchInput(e.target.value);
                }
            }/>
            <button type='submit'>Search</button>
            <div>

            </div>
        </form>
        <Movies movies={movies} />
         {/* {error && <h1>Something went wrong</h1>} */}
         {/* {movies.length>0 && <Movies movies={movies}/>} */}
    {/* {Component} */}
   </div>
  );
}
