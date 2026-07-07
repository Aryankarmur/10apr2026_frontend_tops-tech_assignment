import React from 'react'
import ProductList from './components/ProductList'
import PlaylistManager from './components/PlaylistManager'
import LargeList from './components/LargeList'

const App = () => {
  return (
    <>
    {/* Task 1, 2 */}
      <ProductList/>
      {/* Task 3 */}
      <PlaylistManager/>
     {/* Task 4 */}
      <LargeList/>
    </>
  )
}

export default App