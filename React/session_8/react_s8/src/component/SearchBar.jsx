import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react'

const SearchBar = () => {
    const InputRef = useRef(null);

useEffect(()=>{

    if (InputRef.current) {
        InputRef.current.focus();
    }
},[])

  return (
    <div>
       
            <input type="text" placeholder='Enter to search' ref={InputRef}/>
            <button type="submit">Search</button>
        

    </div>
  )
}

export default SearchBar