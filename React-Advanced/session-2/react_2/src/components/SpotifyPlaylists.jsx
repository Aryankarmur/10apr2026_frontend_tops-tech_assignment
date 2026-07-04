import useFetchData from "../hooks/useFetchData";


function SpotifyPlaylists() {
  const { data, loading, error } = useFetchData(
    "https://fakestoreapi.com/products",
    
  );

  if (loading) return <h2>Loading...</h2>;

  if (error) return <h2>{error}</h2>;

  return (
    <div>
      <h1>Featured Spotify Playlists</h1>

      {data?.map((playlist) => (
        <div
          key={playlist.id}
          style={{
            border: "1px solid gray",
            margin: "10px",
            padding: "10px",
          }}
        >
          
          <h3>{playlist.title}</h3>

          <p>{playlist.description}</p>
        </div>
      ))}
    </div>
  );
}

export default SpotifyPlaylists;