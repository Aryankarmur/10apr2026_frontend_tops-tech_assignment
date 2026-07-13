import { useEffect, useState } from "react";
import { auth } from "./firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";

import SignUp from "./components/SignUp";
import Login from "./components/Login";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (currentUser) => {
        setUser(currentUser);
      }
    );

    return unsubscribe;
  }, []);

  // Task 5: Logout Function
  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("Logged Out Successfully");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Firebase Authentication</h1>

      <h3>
        Logged In User :
        {user ? user.email : "No User Logged In"}
      </h3>

      {user && (
        <button onClick={handleLogout}>
          Logout
        </button>
      )}

      <hr />

      <SignUp />

      <hr />

      <Login />
    </div>
  );
}

export default App;