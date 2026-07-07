import { useState } from "react";

function SongItem({ song, dispatch }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(song.name);

  const saveSong = () => {
    dispatch({
      type: "EDIT_SONG",
      payload: {
        id: song.id,
        name: editedName,
      },
    });

    setIsEditing(false);
  };

  return (
    <li>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
          />
          <button onClick={saveSong}>Save</button>
        </>
      ) : (
        <>
          {song.name}
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}

      <button
        onClick={() =>
          dispatch({
            type: "REMOVE_SONG",
            payload: song.id,
          })
        }
      >
        Delete
      </button>
    </li>
  );
}

export default SongItem;