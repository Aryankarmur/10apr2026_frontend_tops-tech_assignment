import { useCallback, useState } from "react";
import SongItem from "./SongItem";

function PlaylistManager() {
  const [songs, setSongs] = useState([
    { id: 1, name: "Believer", favorite: false },
    { id: 2, name: "Perfect", favorite: false },
    { id: 3, name: "Shape of You", favorite: false },
  ]);

  const toggleFavorite = useCallback((id) => {
    setSongs((prevSongs) =>
      prevSongs.map((song) =>
        song.id === id
          ? { ...song, favorite: !song.favorite }
          : song
      )
    );
  }, []);

  return (
    <div>
      <h2>Playlist</h2>

      {songs.map((song) => (
        <SongItem
          key={song.id}
          song={song}
          toggleFavorite={toggleFavorite}
        />
      ))}
    </div>
  );
}

export default PlaylistManager;