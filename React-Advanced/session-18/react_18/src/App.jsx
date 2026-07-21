import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "spotify.firebaseapp.com",
    projectId: "spotify",
  };

  return (
    <>
      <div>
        <h1>Environment Variables Task 1</h1>

        <p>
          Spotify API Key:
          {import.meta.env.VITE_SPOTIFY_API_KEY}
        </p>

        <h1>Environment Variables Task 2</h1>

        <p>
          Firebase API Key:
          {firebaseConfig.apiKey}
        </p>
      </div>
       <div>
      <h2>
        Task 3 : { import.meta.env.VITE_WELCOME_MSG}
      </h2>
    </div>
    <h2>Task 4 : api_key = {import.meta.env.VITE_FIREBASE_API_KEY}</h2>
    </>
  );
}

export default App;
