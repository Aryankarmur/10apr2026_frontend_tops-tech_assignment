import { memo } from "react";

const SongItem = memo(({ song, toggleFavorite }) => {
  console.log("Rendering:", song.name);

  return (
    <div>
      <span>
        {song.name} {song.favorite ? "❤️" : "🤍"}
      </span>

      <button onClick={() => toggleFavorite(song.id)}>
        Favorite
      </button>
    </div>
  );
});

export default SongItem;