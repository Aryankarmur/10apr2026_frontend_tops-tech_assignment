import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import LikeButton from './components/LikeButton'
import SearchBar from './components/SearchBar'
import LoginForm from './components/LoginForm'
import SongList from './components/SongList'
// import './App.css'

function App() {


  return (
    <>
    {/* Task 1 */}
      <LikeButton/>

      {/* Task 2 */}
      <SearchBar/>

    {/* Task 3,5 */}
    <LoginForm/>

    {/* Task 4 */}
    <SongList/>
    </>
  )
}

export default App
