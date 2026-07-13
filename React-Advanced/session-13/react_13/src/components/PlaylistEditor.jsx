import { useState } from "react";
import { db } from "../firebase";

import {
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

function PlaylistEditor() {
  const [playlistId, setPlaylistId] = useState("");
  const [playlistName, setPlaylistName] = useState("");

  // Update Playlist
  const updatePlaylist = async () => {
    try {
      const playlistRef = doc(db, "playlists", playlistId);

      await updateDoc(playlistRef, {
        name: playlistName,
      });

      alert("Playlist Updated Successfully");
    } catch (error) {
      alert(error.message);
    }
  };

  // Delete Playlist
  const deletePlaylist = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this playlist?"
    );

    if (!confirmDelete) return;

    try {
      const playlistRef = doc(db, "playlists", playlistId);

      await deleteDoc(playlistRef);

      alert("Playlist Deleted Successfully");

      setPlaylistId("");
      setPlaylistName("");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      <h2>Playlist Editor</h2>

      <input
        placeholder="Playlist ID"
        value={playlistId}
        onChange={(e) =>
          setPlaylistId(e.target.value)
        }
      />

      <br />
      <br />

      <input
        placeholder="New Playlist Name"
        value={playlistName}
        onChange={(e) =>
          setPlaylistName(e.target.value)
        }
      />

      <br />
      <br />

      <button onClick={updatePlaylist}>
        Update Playlist
      </button>

      <button
        onClick={deletePlaylist}
        style={{ marginLeft: "10px" }}
      >
        Delete Playlist
      </button>
    </div>
  );
}

export default PlaylistEditor;