import useTrendingMovies from "../hooks/useTrendingMovies";

function MoviesList() {
  const { movies, loading, error } = useTrendingMovies();

  if (loading) return <h2>Loading...</h2>;

  if (error) return <h2>{error}</h2>;

  return (
    <div>
      <h1>Trending Movies</h1>

      {movies.map((movie) => (
        <div key={movie.id}>
          {movie.title}
        </div>
      ))}
    </div>
  );
}

export default MoviesList;