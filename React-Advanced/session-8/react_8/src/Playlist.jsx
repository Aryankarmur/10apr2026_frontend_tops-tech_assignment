import React from "react";

const Playlist = React.memo(function Playlist() {
  return (
    <>
      <h2>Spotify Playlist</h2>
      <p>Memoized Component</p>
    </>
  );
});

export default Playlist