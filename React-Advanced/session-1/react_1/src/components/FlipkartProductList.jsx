import useFetchData from "../hooks/useFetchData";

function FlipkartProductList() {
  const { loading, data, error } = useFetchData(
    "https://fakestoreapi.com/products"
  );

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }

  return (
    <div>
      <h1>Products</h1>

      {data.map((product) => (
        <div key={product.id}>
          {product.title}
        </div>
      ))}
    </div>
  );
}

export default FlipkartProductList;