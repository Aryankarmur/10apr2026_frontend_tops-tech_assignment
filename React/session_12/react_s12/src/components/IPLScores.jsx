import { useEffect, useState } from "react";

function IPLScores() {
  const [scores, setScores] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchScores();
  }, []);

  const fetchScores = async () => {
    try {
      setError(false);

      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );

      if (response.status !== 200) {
        throw new Error("Response Error");
      }

      const data = await response.json();

      setScores(data);
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div>
      <h2>IPL Scores</h2>

      {error ? (
        <p>Error loading scores</p>
      ) : (
        <ul>
          {scores.map((team) => (
            <li key={team.id}>
              {team.name} - {Math.floor(Math.random() * 250)}/
              {Math.floor(Math.random() * 10)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default IPLScores;