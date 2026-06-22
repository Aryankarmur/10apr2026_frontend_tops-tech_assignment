import React, { useEffect, useState } from "react";

const MovieSuggestions = () => {
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(false);
  const [click, setClick] = useState("");

  useEffect(() => {
    try {
      setLoading(true);
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => setMovies(data));
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <div>
      <h2>Movies list</h2>
      {click &&(loading ? (
        <p>Loading....</p>
      ) : (
        <ul>
          {movies &&
            movies.map((m, i) => {
              return <li key={i}> {m?.name} </li>;
            })}
        </ul>
      ))}
    { !click ?<button onClick={()=>setClick(!click)}>Click to see list</button> : <button onClick={()=>setClick(!click)}>Click to hide list</button>}
    </div>
  );
};

export default MovieSuggestions;
