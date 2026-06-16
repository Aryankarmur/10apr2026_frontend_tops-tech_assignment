import React from 'react'
import { useState } from 'react'

const SongVote = () => {
    const[votes, setVotes]=useState(0);

    const handelUpVote=()=>{
            setVotes(votes + 1);
    }

    const handelDownVote=()=>{
        if (votes <=0)return;
        setVotes(votes - 1);
    }

  return (
    <div> 
        <h1>Vote for Song</h1> 
        <p>Votes: {votes}</p>
        <button onClick={handelUpVote}>Up vote ↑ </button>
        <button onClick={handelDownVote}>Down vote ↓ </button>
    </div>
  )
}

export default SongVote