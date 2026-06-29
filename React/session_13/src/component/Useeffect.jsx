import React, { useEffect, useState } from "react";

const Useeffect = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  
  useEffect(() => {
    try {
        setLoading(true);
        setTimeout(() => {
        setData (["jay", "vijay", "ajay", "raghav", "aryan", "vishal"]);
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.log(error.massage);
    } finally {
    }
  }, []);
  return <div>{
        loading?(
            <p>Loading...</p>
        ):(
            data.map((d,i)=>{
                return(
                    <p key={i}>{d}</p>
                )
            })
        )
    }</div>;
};

export default Useeffect;
