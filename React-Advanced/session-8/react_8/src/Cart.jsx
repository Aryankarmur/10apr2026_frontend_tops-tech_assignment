import { useContext } from "react";
import { CartContext } from "./context/CartContext";

function Cart() {
  const { cart, dispatch } = useContext(CartContext);

  return (
    <>
      <h2>Shopping Cart</h2>

      <button
        onClick={() =>
          dispatch({
            type: "ADD",
            payload: { id: 1, name: "Laptop" },
          })
        }
      >
        Add Laptop
      </button>

      <button
        onClick={() =>
          dispatch({
            type: "REMOVE",
            payload: 1,
          })
        }
      >
        Remove Laptop
      </button>

      <button onClick={() => dispatch({ type: "CLEAR" })}>
        Clear Cart
      </button>

      <p>Total Items: {cart.length}</p>
    </>
  );
}

export default Cart