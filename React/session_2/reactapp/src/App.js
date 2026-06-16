import UserGreeting from "./components/greeting";
import Profile from "./components/Profile";
import logo from "./logo.svg";
// import './App.css';

function App() {
  return (
    <>
       {/* Task 1 */}
      <h1> Welcome to React JSX! </h1>
       {/* Task 2  */}
         {/* function */}
      <UserGreeting user={"Aryan"} />
       {/* Task 3  */}
         {/* class */}
      <UserGreeting user={"Aryan"} />

      {/* Task 4,5 */}
      <Profile/>
    </>
  );
}

export default App;
