
// import './App.css'

import CartSummary from "./component/CartSummary"
import FollowerList from "./component/FollowerList"
import OrderStatus from "./component/OrderStatus"
import Playlist from "./component/Playlist"

function App() {
  

  return (
    <>
    {/* Task 1 */}
      <Playlist/>

      {/* Task 2 */}
      <h2>Order status</h2>
      <OrderStatus isDelivered={true}/>
      <OrderStatus isDelivered={false}/>

      {/* Task 3 */}
      <FollowerList/>

      {/* Task 4 */}
      <CartSummary/>
    </>
  )
}

export default App
