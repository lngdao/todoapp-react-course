import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(1);

  console.log(count);

  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        Increace
      </button>
    </div>
  );
}

export default Counter;
