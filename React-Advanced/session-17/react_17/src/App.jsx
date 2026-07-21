import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Task1 from './Task1'
import Task2 from './Task2'
import Task3 from './Task3'
import Task4 from './Task4'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h2>Task 1</h2>
      <Task1/>
      <br />

    <h2>Task 2</h2>
      <Task2/>
      <br />
      <h2>Task 3</h2>
      <Task3/>
      <br />
      <h2>Task 4</h2>
      <Task4/>

      {/* Task 5 */}
      {/* | useState Form                                    | Formik + Yup                                                                          |
| ------------------------------------------------ | ------------------------------------------------------------------------------------- |
| Need multiple useState hooks                     | One `initialValues` object manages all fields                                         |
| Validation must be written manually              | Yup handles validation with simple rules                                              |
| More code for change handlers and error handling | Formik provides `handleChange`, `errors`, `touched`, and `handleSubmit` automatically | */}

    </>
  )
}

export default App
