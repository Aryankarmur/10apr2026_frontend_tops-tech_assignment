import React from "react";

const FollowerList = () => {
  const flowerList = [
    "Rose",
    "Lotus",
    "Marigold",
    "Sunflower",
    "Jasmine",
    "Hibiscus",
    "Lily",
    "Tulip",
    "Orchid",
    "Daisy",
  ];

  return (
    <div>
      <h2>List of flowers</h2>
      {flowerList.length>0?(
        <ul>
            {
                flowerList.map((flower)=>{
                    return(
                        <li>{flower}</li>
                    )
                })
            }
      </ul>):(
        <p>No flowers found</p>
      )}
    </div>
  );
};

export default FollowerList;
