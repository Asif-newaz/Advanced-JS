import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        setError(false);
        const response = await axios.get("/api/products");
        const productsData = response?.data;
        setProducts(productsData);
        console.log(productsData);
        setLoading(false);
      } catch (error) {
        setError(true);
      }
    })();
  }, []);

  if (error) {
    return <h1>Something went wrong</h1>;
  }

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <h1>Learning API integration!</h1>
      <h2>Number of products are {products.length}</h2>
    </>
  );
}

export default App;
