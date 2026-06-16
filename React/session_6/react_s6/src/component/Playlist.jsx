import React from "react";

const Playlist = () => {
  const SongList = [
    {
      id: 2,
      song_name: "Tum Hi Ho",
      artist: "Arijit Singh",
    },
    {
      id: 1,
      song_name: "Kesariya",
      artist: "Arijit Singh",
    },
    {
      id: 3,
      song_name: "Jai Ho",
      artist: "A.R. Rahman",
    },
    {
      id: 4,
      song_name: "Chaiyya Chaiyya",
      artist: "Sukhwinder Singh, Sapna Awasthi",
    },
    {
      id: 5,
      song_name: "Kal Ho Naa Ho",
      artist: "Sonu Nigam",
    },
  ];
  return(
     <div>
        <h2>Song list with artist name</h2>
        <ul>
            {
                SongList.map((song)=>{
                    return(
                        <li key={song.id}>{song.song_name} - {song.artist}</li>
                    )
                })
            }
        </ul>
     </div>
    );
};

export default Playlist;
