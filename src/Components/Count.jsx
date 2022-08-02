import React, { useState } from "react";

export default function Count() {
  const [count, setCount] = useState(0);

  function increment() {
    setTimeout(() => {
      setCount(count + 1);
    }, 2000);
  }
  function decrement() {
    if (count > 0) {
      setTimeout(() => {
        setCount(count - 1);
      }, 2000);
    }
  }

  return (
    <div className="counter">
      <button onClick={decrement} className="bg-info">
        -
      </button>
      <p className="count">{count}</p>
      <button onClick={increment} className="bg-success">
        +
      </button>
    </div>
  );
}
