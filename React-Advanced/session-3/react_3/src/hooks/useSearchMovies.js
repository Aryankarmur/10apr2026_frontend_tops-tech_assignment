import { useEffect, useState } from "react";

function useSearchMovies(query) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!query.trim()) {
      setMovies([]);
      setError("");
      return;
    }
    async function fetchMovies() {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          `https://www.omdbapi.com/?apikey=${import.meta.env.VITE_OMDB_API_KEY}&s=${query}`,
        );

        const data = await response.json();

        if (data.Response === "False") {
          throw new Error(data.Error);
        }

        setMovies(data.Search);
      } catch (err) {
        setError(err.message);
        setMovies([]);
      } finally {
        setLoading(false);
      }
    }

    if (query.trim()) {
      fetchMovies();
    } else {
      setMovies([]);
    }
  }, [query]);

  useEffect(() => {
    console.log("Movie data updated");

    console.log(movies);
  }, [movies]);

  return {
    movies,
    loading,
    error,
  };
}

export default useSearchMovies;
