import { useCallback, useMemo, useState } from "react";

function LargeList() {
  const [count, setCount] = useState(0);
  const [search, setSearch] = useState("");

  const products = useMemo(
    () =>
      Array.from({ length: 1000 }, (_, i) => ({
        id: i,
        name: `Product ${i + 1}`,
      })),
    []
  );

  const filteredProducts = useMemo(() => {
    console.log("Filtering...");
    return products.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [products, search]);

  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div>
      <h2>Counter: {count}</h2>

      <button onClick={increment}>Increment</button>

      <br />
      <br />

      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredProducts.map((product) => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  );
}

export default LargeList;