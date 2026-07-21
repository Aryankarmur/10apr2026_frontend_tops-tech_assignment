function MovieCard({
  movie,
  deleteMovie,
  setEditingMovie,
}) {
  return (
    <div className="movie-card">

      <h2>{movie.title}</h2>

      <p>
        <strong>Genre:</strong> {movie.genre}
      </p>

      <p>
        <strong>Year:</strong> {movie.year}
      </p>

      <div className="buttons">

        <button
          className="edit-btn"
          onClick={() => setEditingMovie(movie)}
        >
          Edit
        </button>

        <button
          className="delete-btn"
          onClick={() => deleteMovie(movie.id)}
        >
          Delete
        </button>

      </div>

    </div>
  );
}

export default MovieCard;