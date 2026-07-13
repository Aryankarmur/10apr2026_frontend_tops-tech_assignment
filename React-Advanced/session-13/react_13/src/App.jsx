import PlaylistEditor from "./components/PlaylistEditor";
import LiveCommentsFeed from "./components/LiveCommentsFeed";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <PlaylistEditor />

      <hr />

      <LiveCommentsFeed />
    </div>

// Task 4

// Firestore's onSnapshot() creates a real-time listener for a collection or document. Whenever data changes in Firestore, the listener receives the updated data automatically and updates the React state. In the LiveCommentsFeed component, this means that new, edited, or deleted comments appear immediately on the screen without requiring the user to refresh the page. This keeps the application's UI synchronized with the database in real time.

// Task 5

// useEffect(() => {
//   const unsubscribe = onSnapshot(collection(db, "comments"), (snapshot) => {
//     // Handle updated data
//   });
//   return () => {
//     unsubscribe();
//   };
// }, []);


  );
}

export default App;