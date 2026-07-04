import { useEffect, useState } from "react";

function useFetchData(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Failed to fetch");
        }

        const result = await response.json();

        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, [url]);

  return {
    loading,
    data,
    error,
  };
}

export default useFetchData;