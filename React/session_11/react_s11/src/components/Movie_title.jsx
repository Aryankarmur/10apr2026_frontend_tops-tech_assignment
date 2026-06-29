import React, { useEffect, useState } from 'react'
import axios from "axios";

const Movie_title = () => {
    const [ movies, setMovies]=useState([]);

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts").then(data => setMovies(data));
    },[])

    
  return (
    <div>
        <h1>Movies Titles</h1>
        {
            movies && movies?.data?.slice(0,5).map((item, i)=>{
                return(
                    <p key={i}> {item.title} </p>
                )
            })
        }
    </div>
  )
}

export default Movie_title