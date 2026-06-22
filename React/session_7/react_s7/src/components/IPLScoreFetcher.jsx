import React, { useEffect, useState } from "react";

const IPLScoreFetcher = () => {
  const [headLine, setHeadLine] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setHeadLine(data));
  }, []);

  return (
    <div>
      <h1> match headline - {headLine && headLine[0].title}</h1>
    </div>
  );
};

export default IPLScoreFetcher;
