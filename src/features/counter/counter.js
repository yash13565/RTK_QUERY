import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount, reset } from "./counterSlice";

const Counter = () => {
  const [incrementAmount, setIncrementAmount] = useState(0);
  const addValue = Number(incrementAmount) || 0;
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const resetAll = () => {
    setIncrementAmount(0);
    dispatch(reset());
  };
  return (
    <section
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h4>{count}</h4>
      <div style={{ marginBottom: "10px", display: "flex", gap: "10px" }}>
        <button
          style={{ padding: "5px", background: "black", color: "white" }}
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <button
          style={{ padding: "5px", background: "black", color: "white" }}
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
      <input
        style={{ padding: "10px", borderRadius: "10px" }}
        type="text"
        value={incrementAmount}
        onChange={(e) => setIncrementAmount(e.target.value)}
      />
      <div style={{ marginTop: "10px", display: "flex", gap: "10px" }}>
        <button
          style={{ padding: "5px", background: "black", color: "white" }}
          onClick={() => dispatch(incrementByAmount(addValue))}
        >
          Add Amount
        </button>
        <button
          style={{ padding: "5px", background: "black", color: "white" }}
          onClick={resetAll}
        >
          Reset
        </button>
      </div>
    </section>
  );
};

export default Counter;
