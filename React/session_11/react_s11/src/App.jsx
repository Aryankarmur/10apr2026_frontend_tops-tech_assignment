import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Movie_title from './components/Movie_title'
import AddPlaylist from './components/AddPlaylist'
import RestaurantSearch from './components/RestaurantSearch'
import MovieList from './components/MovieList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Movie_title/>
      <AddPlaylist/>
      <RestaurantSearch/>
      <MovieList/>
      
    </>
  )
}

export default App
