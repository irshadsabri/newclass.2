// TodoForm.js
import React, { useState } from 'react';
import { useTodoContext } from './TodoContext';

const TodoForm = () => {
  const { addTodo } = useTodoContext();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(title, description);
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
      </label>
      <label>
        Description:
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
      </label>
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;
