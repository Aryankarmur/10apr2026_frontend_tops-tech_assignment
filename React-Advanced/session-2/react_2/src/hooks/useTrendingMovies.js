import { useEffect, useState } from "react";

function useTrendingMovies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchMovies() {
      try {
        setLoading(true);

        const response = await fetch(
          "https://api.themoviedb.org/3/trending/movie/day?api_key=d85fac92b965be2f56f142cbd0728b77"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch movies");
        }

        const data = await response.json();

        setMovies(data.results);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchMovies();
  }, []);

  return {
    movies,
    loading,
    error,
  };
}

export default useTrendingMovies;