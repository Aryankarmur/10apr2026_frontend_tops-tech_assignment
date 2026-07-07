import { useReducer } from "react";

const initialState = 1;

function reducer(state, action) {
  switch (action.type) {
    case "increase":
      return state + 1;

    case "decrease":
      return state > 1 ? state - 1 : state;

    case "reset":
      return initialState;

    default:
      return state;
  }
}

// useState method

// const [count, setCount] = useState(0);

// <button onClick={() => setCount(count + 1)}>+</button>
// <button onClick={() => setCount(count - 1)}>-</button>
// <button onClick={() => setCount(0)}>Reset</button>


function CartItem() {
  const [quantity, dispatch] = useReducer(reducer, initialState);

  return (
    <div
      style={{
        border: "1px solid gray",
        width: "250px",
        padding: "20px",
      }}
    >
      <h3>iPhone 16</h3>

      <p>Quantity: {quantity}</p>

      <button onClick={() => dispatch({ type: "increase" })}>
        +
      </button>

      <button
        disabled={quantity === 1}
        onClick={() => dispatch({ type: "decrease" })}
      >
        -
      </button>

      <button onClick={() => dispatch({ type: "reset" })}>
        Reset
      </button>
    </div>
  );
}

export default CartItem;