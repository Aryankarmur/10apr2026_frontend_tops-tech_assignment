function PlaylistCard({ song, artist }) {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "15px",
        marginBottom: "10px",
        borderRadius: "8px",
      }}
    >
      <h2>{song}</h2>
      <p>{artist}</p>
    </div>
  );
}

export default PlaylistCard;