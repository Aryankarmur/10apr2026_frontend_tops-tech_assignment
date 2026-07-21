import LoginForm from "./components/LoginForm";
import PlaylistList from "./components/PlaylistList";

function App() {
  return (
    <>
      <LoginForm />

      <hr />

      <PlaylistList />

      {/* Task 5 */}
{/* editSong: (state, action) => {
  const { id, title, artist } = action.payload;

  const song = state.songs.find(
    (song) => song.id === id
  );

  if (song) {
    song.title = title;
    song.artist = artist;
  }
}; */}
    </>
  );
}

export default App;
