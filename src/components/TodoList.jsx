import React, { useState } from 'react';

function TodoList() {
  const tasks = [
    'Learn React',
    'Learn Javascript',
    'Learn Tailwindcss',
    'Learn Nodejs',
    'Learn Redux',
  ];
  const [isDone, setIsDone] = useState([]);

  const handleOnClickItem = (index) => {
    const value = index;

    if (isDone.includes(value))
      setIsDone((prev) => {
        let temp = [...prev];
        temp.splice(temp.indexOf(value), 1);

        return temp;
      });
    else setIsDone((prev) => [...prev, value]);
  };

  return (
    <div>
      {tasks.map((task, index) => (
        <h2
          onClick={() => handleOnClickItem(index)}
          style={{
            cursor: 'pointer',
            fontSize: 20,
            userSelect: 'none',
            textDecoration: isDone.includes(index) ? 'line-through' : 'none',
          }}
          key={index}
        >
          {task}
        </h2>
      ))}
    </div>
  );
}

export default TodoList;
