// import './App.css'

import CartItem from "./components/CartItem";
import LikeButton from "./components/LikeButton";
import SongVote from "./components/SongVote";
import Starvote from "./components/Starvote";

function App() {
  return (
    <>
      {/* Task 1 */}
      <LikeButton />

      {/* Task 2 */}
      <CartItem/>

      {/* Task 3 */}
      <SongVote/>

      {/* Task 4 */}
      <Starvote/>
    </>
  );
}

export default App;
