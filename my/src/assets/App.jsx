
import React from 'react';
import './App.css';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

function App() {
  return (
    <div className="app">
      <h1>Todo App </h1>
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
