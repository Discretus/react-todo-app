import React, {useCallback, useEffect, useState} from 'react';
import TodoInput from '../components/TodoInput';
import TodoList from '../components/TodoList';
import {TodoItem, TodoState} from '../entities/Intefaces';

const TodosPage: React.FC = () => {
  const [todos, setTodos] = useState<TodoState>({});

  useEffect(() => {
    const saved = JSON.parse(
      localStorage.getItem('todos') || '{}'
    ) as TodoState;
    setTodos(saved);
    console.log('use effect init');
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
    console.log('use effect save');
  }, [todos]);

  const addTodo = useCallback((title: string): void => {
    const id: string = Object.values(todos).length.toString();
    const newTodo: TodoItem = {
      id,
      title,
      completed: false,
    };
    setTodos((prev) => {
      let newState = Object.assign({}, prev);
      newState[id] = newTodo;
      return newState;
    });
  }, []);

  const toggleTodo = (id: string): void => {
    setTodos((prev) => {
      return {
        ...prev,
        [id]: {
          ...prev[id],
          completed: !prev[id].completed,
        },
      };
    });
  };

  const deleteTodo = (id: string): void => {
    setTodos((prev) => {
      let newState = Object.assign({}, prev);
      delete newState[id];
      return newState;
    });
  };

  return (
    <React.Fragment>
      <TodoInput addTodo={addTodo}/>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </React.Fragment>
  );
};

export default TodosPage;
