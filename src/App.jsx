import { useState } from 'react';
import Counter from './components/counter';
import TodoItem from './components/TodoItem';
import TodoList from './components/TodoList';

function App() {
  return (
    <div>
      <TodoList />
      {/* <TodoItem content={'Learn React'} /> */}
    </div>
  );
}

export default App;
