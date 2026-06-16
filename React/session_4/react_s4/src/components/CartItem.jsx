import React from 'react'
import "../assets/css/CartItem.css"
import { useState } from 'react'

const CartItem = () => {
    const [count, setCount ]= useState(0);

    const Increment = ()=>{
        setCount(count + 1);
    }
    const Decrement = ()=>{
        if (count < 1) {
            return;
        }
        setCount(count - 1);
    }

  return (
    <div className='cart_main'>
        <img src="https://d2v5dzhdg4zhx3.cloudfront.net/web-assets/images/storypages/primary/ProductShowcasesampleimages/JPEG/Product+Showcase-1.jpg" alt="shoes image" />
        <div className="info">
            <p className="pname">shoes</p>
            <div className="quantity">
                <button onClick={Increment}>+</button>
                <input type="text" disabled value={count}/>
                <button onClick={Decrement}>-</button>
            </div>
        </div>
    </div>
  )
}

export default CartItem