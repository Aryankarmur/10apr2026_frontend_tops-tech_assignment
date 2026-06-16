import React from 'react'
import { useState } from 'react'

const SearchBar = () => {
    const[query, setQuery]=useState("");
  return (
    <div>
        <h1>search bar</h1>
        <input type="text" value={query} onChange={(e)=>setQuery(e.target.value)} />
        <p>{query}</p>
    </div>
  )
}

export default SearchBar