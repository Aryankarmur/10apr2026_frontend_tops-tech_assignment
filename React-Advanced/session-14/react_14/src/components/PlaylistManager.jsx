import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSong, removeSong } from "../features/playlist/playlistSlice";

function PlaylistManager() {
  const [song, setSong] = useState("");

  const dispatch = useDispatch();

  const songs = useSelector((state) => state.playlist.songs);

  const handleAddSong = () => {
    if (song.trim() === "") return;

    dispatch(addSong(song));

    setSong("");
  };

  return (
    <div
      style={{
        width: "400px",
        margin: "40px auto",
        textAlign: "center",
      }}
    >
      <h2>Playlist Manager</h2>

      <input
        type="text"
        placeholder="Enter Song Name"
        value={song}
        onChange={(e) => setSong(e.target.value)}
      />

      <button onClick={handleAddSong}>Add Song</button>

      <h3>Playlist</h3>

      {songs.length === 0 ? (
        <p>No Songs Added</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {songs.map((song, index) => (
            <li
              key={index}
              style={{
                margin: "10px 0",
              }}
            >
              {song}

              <button
                style={{ marginLeft: "10px" }}
                onClick={() => dispatch(removeSong(index))}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default PlaylistManager;