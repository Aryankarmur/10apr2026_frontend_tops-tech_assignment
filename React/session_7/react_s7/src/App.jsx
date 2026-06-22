
// import './App.css'

import IPLScoreFetcher from "./components/IPLScoreFetcher"
import MovieSuggestions from "./components/MovieSuggestions"
import TrendingSongs from "./components/TrendingSongs"

function App() {


  return (
    <>
    {/* Task 1 */}
    <TrendingSongs/>

    {/* Task 2 */}
    <IPLScoreFetcher/>

    {/* Task 3,4   */}
    <MovieSuggestions/>
    </>
  )
}

export default App
