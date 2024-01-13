// TodoContext.js
import React, { createContext, useContext, useReducer } from 'react';

const TodoContext = createContext();

export const useTodoContext = () => {
  return useContext(TodoContext);
};

const initialState = {
  todos: [],
};

const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return { ...state, todos: [...state.todos, action.payload] };
    case 'DELETE_TODO':
      return { ...state, todos: state.todos.filter((todo) => todo.id !== action.payload) };
    default:
      return state;
  }
};

export const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const addTodo = (title, description) => {
    const newTodo = {
      id: Date.now(),
      title,
      description,
    };
    dispatch({ type: 'ADD_TODO', payload: newTodo });
  };

  const deleteTodo = (id) => {
    dispatch({ type: 'DELETE_TODO', payload: id });
  };

  return (
    <TodoContext.Provider value={{ state, addTodo, deleteTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
