import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addSong, removeSong } from "../features/playlist/playlistSlice";

function Playlist() {
  const songs = useSelector((state) => state.playlist.songs);

  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !artist) return;

    dispatch(
      addSong({
        id: Date.now(),
        title,
        artist,
      })
    );

    setTitle("");
    setArtist("");
  };

  return (
    <div
      style={{
        width: "500px",
        margin: "40px auto",
      }}
    >
      <h2>Spotify Playlist</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Song Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <br /><br />

        <input
          type="text"
          placeholder="Artist Name"
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
        />

        <br /><br />

        <button>Add Song</button>
      </form>

      <hr />

      <h3>Playlist</h3>

      {songs.map((song) => (
        <div key={song.id}>
          <h4>{song.title}</h4>
          <p>{song.artist}</p>

          <button
            onClick={() => dispatch(removeSong(song.id))}
          >
            Remove
          </button>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default Playlist;