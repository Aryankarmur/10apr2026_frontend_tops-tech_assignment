import React from "react";

const CartSummary = () => {
  const cartItems = [
    {
      name: "Wireless Headphones",
      price: 2999.0,
    },
    {
      name: "Leather Wallet",
      price: 1249.0,
    },
    {
      name: "Stainless Steel Water Bottle",
      price: 799.0,
    },
    {
      name: "Running Shoes",
      price: 4500.0,
    },
    {
      name: "Mechanical Keyboard",
      price: 3499.0,
    },
  ];

  return (
    <div>
      <h2>Cart items</h2>
      {
        cartItems.length>0?(
            <ul>
                {cartItems.map((item)=>{
                    return(
                        <li>{item.name} -- {item.price}</li>
                    )
                })}
            </ul>
        ):(
            <p>Cart is empty</p>
        )
      }
      {cartItems.length>=3?(
        <button>Checkout Now</button>
      ):""}
    </div>
  );
};

export default CartSummary;
