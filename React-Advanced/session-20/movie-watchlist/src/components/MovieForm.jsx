import { useState, useEffect } from "react";

function MovieForm({
  addMovie,
  updateMovie,
  editingMovie,
}) {
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [year, setYear] = useState("");

  useEffect(() => {
    if (editingMovie) {
      setTitle(editingMovie.title);
      setGenre(editingMovie.genre);
      setYear(editingMovie.year);
    }
  }, [editingMovie]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !genre || !year) {
      alert("Please fill all fields.");
      return;
    }

    const movie = {
      title,
      genre,
      year,
    };

    if (editingMovie) {
      updateMovie(editingMovie.id, movie);
    } else {
      addMovie(movie);
    }

    setTitle("");
    setGenre("");
    setYear("");
  };

  return (
    <form className="movie-form" onSubmit={handleSubmit}>

      <input
        type="text"
        placeholder="Movie Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="text"
        placeholder="Genre"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
      />

      <input
        type="number"
        placeholder="Release Year"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />

      <button>
        {editingMovie ? "Update Movie" : "Add Movie"}
      </button>

    </form>
  );
}

export default MovieForm;