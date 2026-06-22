import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Navbar from './component/Navbar'
import NotificationDemo from './component/NotificationDemo.jsx'
// import './App.css'

function App() {
 

  return (
    <>
    {/* Task 1,2,3 */}
     <Navbar/>
     {/* Task 4 */}
     <h1>WhatsApp Notification Demo</h1>
      <NotificationDemo />

    </>
  )
}

export default App
