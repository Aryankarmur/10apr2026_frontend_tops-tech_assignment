import Clock from "./components/Clock";
import MoviesList from "./components/MoviesList";
import PostCard from "./components/PostCard";
import SpotifyPlaylists from "./components/SpotifyPlaylists";

function App() {
  return (
    <>
      {/* Task 1 */}
      <Clock />

      {/* Task 2 */}
      <MoviesList />

      {/* Task 3 */}
      <PostCard />

      {/* Task 4 */}
      <SpotifyPlaylists />

      {/* Task 5 */}
      {/* 
        A custom hook helps you write the fetching logic once and reuse it in many components. Instead of copying the same useState, useEffect, loading, and error handling into every component, you keep that logic in one place. This makes your code:

          Easier to reuse.
          Easier to maintain.
          Less repetitive.
          Simpler to test and debug.
          More readable because components focus on rendering UI.
          Flipkart-style examples

          Example 1: Product Listing Page

          const {
            data: products,
            loading,
            error,
          } = useFetchData(
            "https://api.example.com/products"
          );

          This page displays all products with loading and error handling provided by the hook.

          Example 2: Product Details Page

          const {
            data: product,
            loading,
            error,
          } = useFetchData(
            `https://api.example.com/products/${id}`
          );

The same hook fetches details for a single product without duplicating any fetch logic.
      */}
    </>
  );
}

export default App;
