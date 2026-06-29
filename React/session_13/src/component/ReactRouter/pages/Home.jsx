import React, { useEffect, useState } from "react";
import Carousel from "../Carousel";
import Card from "../Card";
import axios from "axios";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchAxios = async()=>{
    try {
      setLoading(true);

     let res = await axios
        .get("https://fakestoreapi.com/products")
      setProducts(res.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  fetchAxios();
  }, []);


  return (
    <div style={{ height: "fit-content", marginTop: "58px" }}>
      <h2
        style={{
          textAlign: "center",
          background: "linear-gradient(to right, #ff5f37, #fcc499)",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        Explore your self
      </h2>
      <Carousel />
      <div
        style={{
          marginBlock: "20px",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        {loading ? (
          <p style={{color:"green"}}>Loading...</p>
        ) : error ? (
          <p style={{color:"red"}}> {error} </p>
        ) : products?.length > 0 ? (
          products.map((items, i) => {
            return (
              <Card
                key={i}
                image={items?.image}
                title={items?.title}
                price={items?.price}
                desc={items?.description}
              />
            );
          })
        ) : (
          <p>No products found</p>
        )}
      </div>
    </div>
  );
};

export default Home;
