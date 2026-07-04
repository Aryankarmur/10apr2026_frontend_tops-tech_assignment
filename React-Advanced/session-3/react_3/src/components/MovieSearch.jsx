import { useState } from "react";
import useSearchMovies from "../hooks/useSearchMovies";

function MovieSearch() {
  const [query, setQuery] = useState("Batman");

  const { movies, loading, error } = useSearchMovies(query);

  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {loading && <h2>Loading...</h2>}

      {error && <h2>{error}</h2>}

      {movies.map((movie) => (
        <div key={movie.imdbID}>
          {movie.Title}
        </div>
      ))}
    </div>
  );
}

export default MovieSearch;