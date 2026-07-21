import { useEffect, useState } from "react";

import MovieForm from "../components/MovieForm";
import MovieCard from "../components/MovieCard";
import Loader from "../components/Loader";

import { db } from "../firebase/firebase";

import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";

function Watchlist() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingMovie, setEditingMovie] = useState(null);
  const [error, setError] = useState("");

  const movieCollection = collection(db, "movies");

  // =============================
  // Get Movies
  // =============================

  const getMovies = async () => {
    try {
      setLoading(true);

      const data = await getDocs(movieCollection);

      const movieList = data.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setMovies(movieList);

      setError("");
    } catch (err) {
      setError("Unable to fetch movies.");
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  // =============================
  // Add Movie
  // =============================

  const addMovie = async (movie) => {
    try {
      await addDoc(movieCollection, movie);

      getMovies();
    } catch (err) {
      console.log(err);
    }
  };

  // =============================
  // Delete Movie
  // =============================

  const deleteMovie = async (id) => {
    try {
      await deleteDoc(doc(db, "movies", id));

      getMovies();
    } catch (err) {
      console.log(err);
    }
  };

  // =============================
  // Update Movie
  // =============================

  const updateMovie = async (id, movie) => {
    try {
      const movieDoc = doc(db, "movies", id);

      await updateDoc(movieDoc, movie);

      setEditingMovie(null);

      getMovies();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container">

      <MovieForm
        addMovie={addMovie}
        updateMovie={updateMovie}
        editingMovie={editingMovie}
      />

      <hr />

      {loading && <Loader />}

      {error && (
        <h2 className="error">
          {error}
        </h2>
      )}

      {!loading &&
        movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            deleteMovie={deleteMovie}
            setEditingMovie={setEditingMovie}
          />
        ))}
    </div>
  );
}

export default Watchlist;