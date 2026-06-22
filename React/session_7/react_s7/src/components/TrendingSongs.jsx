import React, { useEffect } from 'react'

const TrendingSongs = () => {

    useEffect(()=>{
        console.log("Component mounted")   
    },[])

  return (
    <div>TrendingSongs</div>
  )
}

export default TrendingSongs