import { useReducer } from "react";

const initialState = 0;

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return state + 1;

    case "decrement":
      return state - 1;

    case "reset":
      return initialState;

    default:
      return state;
  }
}

function PlaylistCounter() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>Playlist Songs: {count}</h2>

      <button onClick={() => dispatch({ type: "increment" })}>
        +
      </button>

      <button 
      disabled={count === 0}
      onClick={() => dispatch({ type: "decrement" })}>
        -
      </button>

      <button onClick={() => dispatch({ type: "reset" })}>
        Reset
      </button>
    </div>
  );
}

export default PlaylistCounter;