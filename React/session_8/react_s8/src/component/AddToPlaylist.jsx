import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';

const AddToPlaylist = () => {
  const InputRef = useRef(null);
  

    
    const handlePlaylist = (e)=>{
        e.preventDefault();

        InputRef.current.value = "";
        InputRef.current.focus();

  }
  
    return (
      <div>
        <h2>Add playlists</h2>
         <form onSubmit={handlePlaylist}>

              <input type="text" placeholder='Enter Playlist name' ref={InputRef}/>
              <button type="submit">Add</button>
          
         </form>
  
      </div>
    )
}

export default AddToPlaylist