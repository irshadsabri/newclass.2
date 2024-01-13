// TodoList.js
import React from 'react';
import { useTodoContext } from './TodoContext';

const TodoList = () => {
  const { state, deleteTodo } = useTodoContext();

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {state.todos.map((todo) => (
          <li key={todo.id}>
            <h3>{todo.title}</h3>
            <p>{todo.description}</p>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
