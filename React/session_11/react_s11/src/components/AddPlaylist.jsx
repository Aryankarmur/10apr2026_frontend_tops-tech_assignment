import { useState } from "react";
import axios from "axios";

function AddPlaylist() {
  const [playlistName, setPlaylistName] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        {
          title: playlistName,
          body: description,
        },
      );

      console.log(response.data);

      setMessage("Playlist added successfully!");

      setPlaylistName("");
      setDescription("");
    } catch (error) {
      console.log(error);
      setMessage("Something went wrong.");
    }
  };

  return (
    <div>
      <h2>Add Playlist</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Playlist Name"
          value={playlistName}
          onChange={(e) => setPlaylistName(e.target.value)}
          required
        />

        <br />
        <br />

        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <br />
        <br />

        <button type="submit">Add Playlist</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}

export default AddPlaylist;
