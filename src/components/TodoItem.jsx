import React, { useState } from 'react';

function TodoItem(props) {
  const [isDone, setIsDone] = useState(false);

  console.log(isDone);

  return (
    <div>
      <span
        onClick={() => {
          setIsDone((prev) => !prev);
        }}
        style={{
          cursor: 'pointer',
          fontSize: 20,
          userSelect: 'none',
          textDecoration: isDone ? 'line-through' : 'none',
        }}
      >
        {props.content}
      </span>

    </div>
  );
}

export default TodoItem;
