import Auth from "./Auth"
import Cart from "./Cart"
import Header from "./Header"
import Playlist from "./Playlist"
import Restaurant from "./Restaurant"


function App() {
  

  return (
    <>
      <Header/>
      <hr />

      <Restaurant />
      <hr />

      <Playlist />
      <hr />

      <Auth />
      <hr />

      <Cart />
    </>
  )
}

export default App
