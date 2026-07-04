import Feed from "./components/context api/Feed";
import UserContext from "./components/context api/UserContext";
import FlipkartProductList from "./components/FlipkartProductList";
import LikeCounter from "./components/LikeCounter";
import PlaylistCard from "./components/PlayListCard";

function App() {
  // Task 3
  const user = {
    name: "Aryan",
    age: 22,
  };

  return (
    <div>
      {/* Task 1 */}
      <PlaylistCard song="Perfect" artist="Ed Sheeran" />

      <PlaylistCard song="Believer" artist="Imagine Dragons" />

      <PlaylistCard song="Blinding Lights" artist="The Weeknd" />

      {/* Task 2 */}
      <LikeCounter />

      {/* Task 3 */}
      <UserContext.Provider value={user}>
        <Feed />
      </UserContext.Provider>
{/* Task 4 */}
<FlipkartProductList/>
    </div>
  );
}

export default App;
