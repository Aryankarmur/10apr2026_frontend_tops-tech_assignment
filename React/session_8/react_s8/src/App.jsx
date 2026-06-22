import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import SearchBar from './component/SearchBar'
import LoginForm from './component/LoginForm'
import AddToPlaylist from './component/AddToPlaylist'
import Feedback from './component/Feedback'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* Task 1 */}
  <SearchBar/>
  {/* Task2 */}
  <LoginForm/>
  {/* Task 3 */}
  <AddToPlaylist/>
  {/* Task 4 */}
  <Feedback/>
    </>
  )
}

export default App
