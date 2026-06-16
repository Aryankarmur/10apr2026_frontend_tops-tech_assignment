import React, { useState } from "react";

const SongList = () => {
  const [songList, setSongList] = useState([]);
  const [song, setSong] = useState("");

  const handelSubmit = (e) => {
    e.preventDefault();
    if (song === "") return;
    console.log(song);
    
    setSongList((prev) => [...prev, song]);

    setSong("");
  };

  return (
    <div>
      <h2>Song playlist</h2>
      <form onSubmit={handelSubmit}>
        <label htmlFor="addSong">
          Enter song name to add in playlist : 
          <input type="text" id="addSong" name="songName" value={song} onChange={(e)=>setSong(e.target.value)} />
        </label>
        <br />
        <br />
        <button type="submit">Add Song</button>
      </form>
      <div className="songList">
        <ol>
          {songList.length > 0 &&
            songList.map((song, index) => {
              return <li key={index}>{song}</li>;
            })}
        </ol>
      </div>
    </div>
  );
};

export default SongList;
