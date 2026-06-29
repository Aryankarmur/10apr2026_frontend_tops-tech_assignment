import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import TrendingSongs from './components/TrendingSongs'
import IPLScores from './components/IPLScores'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* Task 4 fixed buggy code */}

    {/* useEffect(() => {
  const fetchData = async () => {
    try {
      setError(false);

      const response = await fetch(
        "https://jsonplaceholder.typicode.com/invalidurl"
      );

      if (!response.ok) {
        throw new Error("HTTP Error");
      }

      const data = await response.json();

      setData(data);
    } catch (err) {
      setError(true);
    }
  };

  fetchData();
}, []); */}


{/* components */}

  <TrendingSongs/>
  <IPLScores/>


    </>
  )
}

export default App
