import { useDispatch, useSelector } from "react-redux";

import { deleteSong } from "../features/playlist/playlistSlice";

function PlaylistList() {
  const dispatch = useDispatch();

  const songs = useSelector(
    (state) => state.playlist.songs
  );

  return (
    <div>
      <h2>Playlist</h2>

      {songs.map((song) => (
        <div key={song.id}>
          <h3>{song.title}</h3>

          <p>{song.artist}</p>

          <button
            onClick={() =>
              dispatch(deleteSong(song.id))
            }
          >
            Remove
          </button>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default PlaylistList;