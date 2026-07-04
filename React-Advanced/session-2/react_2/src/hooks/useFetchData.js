import { useEffect, useState } from "react";

function useFetchData(url, options = {}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);

        const response = await fetch(url, options);
        const result = await response.json();
       

        if (!response.ok) {
          throw new Error(result.error?.message || "Request failed");
        }

        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [url]);

  return { data, loading, error };
}

export default useFetchData;
